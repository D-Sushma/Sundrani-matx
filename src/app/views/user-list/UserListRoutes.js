import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

const UserList = Loadable(lazy(() => import('./UserList')));

const UserListRoutes = [
    { path: '/user-list/UserList', element: <UserList /> },
];

export default UserListRoutes;