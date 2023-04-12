import React from 'react';
import UserTable from './shared/UserTable';
import { SimpleCard } from 'app/components';
import { Breadcrumb } from 'app/components';
import { styled } from '@mui/material';
import FilterTable from './shared/FilterTable';

const ProgressRoot = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: {
    margin: '16px'
  },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '16px'
    }
  },
  '& .progress': {
    margin: theme.spacing(2)
  }
}));

export default function UserList() {
  return (
    <>
      <ProgressRoot>
        <div className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: 'User List', path: '/UserList' }, { name: 'User' }]}
          />
        </div>

        <SimpleCard title="User List">
          <UserTable />
        </SimpleCard>
          <FilterTable/>
          
      </ProgressRoot>
    </>
  );
}
