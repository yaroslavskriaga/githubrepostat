import React, { ChangeEvent, ReactElement } from 'react';
import { FilledInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarInterface {
    onSearch(value: string): void;
}

export function SearchBar({ onSearch }: SearchBarInterface): ReactElement {
  const doSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value.toLowerCase());
  };

  return (
    <FilledInput
      fullWidth
      placeholder="Search..."
      onChange={doSearch}
      endAdornment={(
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
            )}
    />
  );
}
