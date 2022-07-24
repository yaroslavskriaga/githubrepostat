import React, { ReactElement } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import { ExtensionStatisticsInterface } from '../../Modules/Dashboard/Utils/DashboardInterfaces';

interface ExtensionsTableInterface {
  extensions: ExtensionStatisticsInterface[] | undefined
}

export function ExtensionsTable({ extensions }: ExtensionsTableInterface): ReactElement {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ext</TableCell>
            <TableCell>Times</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {extensions?.map((row: ExtensionStatisticsInterface) => (
            <TableRow key={row.extensionName}>
              <TableCell>
                .
                {row.extensionName}
              </TableCell>
              <TableCell>{row.occurredTimes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
