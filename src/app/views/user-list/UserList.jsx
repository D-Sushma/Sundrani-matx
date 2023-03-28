import React from 'react';
import UserTable from './shared/UserTable';
import { SimpleCard } from 'app/components';

export default function UserList() {
  return (
    <>
      <SimpleCard title="User List">
        <UserTable />
      </SimpleCard>
    </>
  );
}
