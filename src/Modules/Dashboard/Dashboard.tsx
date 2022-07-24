import React, {
  ReactElement, useMemo, useState,
} from 'react';
import {
  Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import { SearchBar } from '../../Components/SearchBar/SearchBar';
import { ExtensionStatisticsInterface, OccurrencesInterface } from './Utils/DashboardInterfaces';
import { ExtensionsTable } from '../../Components/ExtensionsTable/ExtensionsTable';

interface DashboardInterface {
  occurrences: OccurrencesInterface | undefined;
}

export function Dashboard({ occurrences }: DashboardInterface): ReactElement {
  const [filter, setFilter] = useState<string>('');

  const makeData = useMemo((): ExtensionStatisticsInterface[] | undefined => {
    if (occurrences) {
      return Object.entries(occurrences)
        .map(([extensionName, occurredTimes]) => ({ extensionName, occurredTimes })) as ExtensionStatisticsInterface[];
    }
    return undefined;
  }, [occurrences]);

  const filteredData = useMemo((): ExtensionStatisticsInterface[] | undefined => {
    if (filter === '') return makeData;
    return makeData?.filter(
      (item) => item.extensionName.toLowerCase().includes(filter),
    );
  }, [makeData, filter]);

  if (occurrences === undefined) return <Box>Please, submit the form</Box>;

  return (
    <Box>
      <Paper>
        <SearchBar onSearch={(search: string) => setFilter(search)} />
        <ExtensionsTable extensions={filteredData} />
      </Paper>
    </Box>
  );
}
