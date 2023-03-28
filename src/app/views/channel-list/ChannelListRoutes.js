import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

const ChannelList = Loadable(lazy(() => import('./ChannelList')));
const OnMainVideo = Loadable(lazy(() => import('./shared/OnMainVideo')));

const ChannelListRoutes = [
    { path: '/channel-list/ChannelList', element: <ChannelList /> },
    { path: '/channel-list/OnMainVideo', element: <OnMainVideo /> },
];

export default ChannelListRoutes;