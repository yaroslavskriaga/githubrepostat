import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import { Field } from 'formik';

export function FormFields(): ReactElement {
  return (
    <>
      <Box display="flex">
        <label htmlFor="owner">Github username</label>
        <Box ml={1}>
          <Field id="owner" name="owner" />
        </Box>
      </Box>
      <Box mb={1} />
      <Box display="flex">
        <label htmlFor="repoName">Repository name</label>
        <Box ml={1}>
          <Field id="repoName" name="repoName" />
        </Box>
      </Box>
      <Box mb={1} />
      <Box display="flex">
        <label htmlFor="branchName">Branch name</label>
        <Box ml={1}>
          <Field
            id="branchName"
            name="branchName"
          />
        </Box>
      </Box>
      <Box mb={1} />
    </>
  );
}
