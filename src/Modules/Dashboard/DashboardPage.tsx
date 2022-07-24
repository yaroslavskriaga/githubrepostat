import { Form, Formik, FormikValues } from 'formik';
import React, {
  ReactElement, useEffect, useMemo, useState,
} from 'react';

import { Box, Button, LinearProgress } from '@mui/material';
import { Dashboard } from './Dashboard';
import GithubService from '../../Services/Github-Service';
import { OccurrencesInterface } from './Utils/DashboardInterfaces';
import { FormFields } from './Components/FormFields/FormFields';
import { RepositoryInterface, TreeItemInterface } from '../../Api/Interfaces';
import { FORM_FIELDS_INITIAL_VALUES } from './Utils/FormFieldsInitialValues';

export function DashboardPage(): ReactElement {
  const [repoData, setRepoData] = useState<string[][]>([]);
  const [extensions, setExtensions] = useState<string[][]>([]);
  const fileNamesArray: string[] = [];
  const extensionsArray: string[] = [];

  const makeOccurrencesObject = useMemo((): OccurrencesInterface | undefined => (extensions && extensions.length
    ? extensions[0].reduce((acc: any, curr: string) => {
      if (!(acc) || acc[curr]) {
        if (acc) {
          ++acc[curr];
        }
      } else {
        acc[curr] = String(1);
      }
      return acc;
    }, {}) : undefined), [extensions]);

  function makeRecursiveSearch(data: TreeItemInterface[], owner: string, repo: string): void | number {
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].type === 'tree') {
        GithubService
          .getRepoSHA(owner, repo, data[i].sha)
          .then((info: any) => {
            makeRecursiveSearch(info.tree, owner, repo);
          });
      } else {
        fileNamesArray.push(data[i].path);
        setRepoData([fileNamesArray]);
      }
    }
    return 0;
  }

  function fetchRepo(owner: string, repo: string, branch: string): Promise<void> {
    return GithubService
      .getRepo(owner, repo, branch)
      .then((data: RepositoryInterface) => {
        makeRecursiveSearch(data.tree, owner, repo);
      });
  }

  useEffect(() => {
    if (repoData[0]) {
      for (let i = 0; i < repoData[0].length; i += 1) {
        if (repoData && repoData[0] && repoData[0][i]) {
          const splittable = repoData[0][i].split(/[#?]/)[0];
          extensionsArray.push(splittable.split('.')?.pop()?.trim() as string);
        }
        setExtensions([extensionsArray]);
      }
    }
  }, [repoData]);

  const isValid = useMemo(() => function validate(values: FormikValues): boolean {
    return !values.owner || !values.repoName || !values.branchName;
  }, []);

  if (!repoData && makeOccurrencesObject === undefined) return <LinearProgress />;

  return (
    <div>
      <h1>Github repository statistics</h1>
      <Formik
        initialValues={FORM_FIELDS_INITIAL_VALUES}
        onSubmit={(values: FormikValues) => {
          fetchRepo(values.owner, values.repoName, values.branchName);
        }}
      >
        {({ values }) => (
          <Form>
            <FormFields />
            <Button disabled={isValid(values)} variant="contained" type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
      <Box my={3} />
      <Dashboard occurrences={makeOccurrencesObject} />
    </div>
  );
}
