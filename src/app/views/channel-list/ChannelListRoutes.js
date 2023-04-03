import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

const ChannelList = Loadable(lazy(() => import('./ChannelList')));
const OnMainVideo = Loadable(lazy(() => import('./shared/OnMainVideo')));
const ShowAllButton = Loadable(lazy(() => import('./shared/ShowAllButton')));

const ChannelListRoutes = [
    { path: '/channel-list/ChannelList', element: <ChannelList /> },
    { path: '/channel-list/OnMainVideo', element: <OnMainVideo /> },
    { path: '/channel-list/ShowAllButton', element: <ShowAllButton /> },
];

export default ChannelListRoutes;