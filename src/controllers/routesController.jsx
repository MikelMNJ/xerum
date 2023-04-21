import { H2 } from 'components/Typography/H2';
import { NotFound } from 'components';
import { appConstants } from 'modules';
import { theme } from 'theme';
import { MainWrapper } from 'pages';

const routes = [
  // Private routes
  {
    path: '/',
    element: <MainWrapper />,
  },

  // Public routes
  {
    path: '*',
    element: <NotFound
      theme={theme}
      selectedTheme={appConstants.themes.light}
      icon='fa-solid fa-sad-tear'
      title={<H2>Unga Bunga!  We bungled the request ...</H2>}
      message="We'll try to do better, next time."
    />,
  },
];

export { routes };