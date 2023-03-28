import React from 'react';
import ShowChannelList from './shared/ShowChannelList';
import { Breadcrumb } from 'app/components';
import { styled } from '@mui/material';

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

export default function ChannelList() {
  return (
    <>
      <ProgressRoot>
          <div className="breadcrumb">
            <Breadcrumb
              routeSegments={[{ name: 'Channel List', path: '/ChannelList' }, { name: 'Channel' }]}
            />
          </div>
        <ShowChannelList />
      </ProgressRoot>
    </>
  );
}
