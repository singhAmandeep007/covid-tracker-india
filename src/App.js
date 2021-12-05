import React, { Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import { schemaMarkup } from './components/SEO';
import Routes from './Routes';
import PlaceholderImage from './components/PlaceholderImage/PlaceholderImage';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
   return (
      <HelmetProvider>
         <Helmet>
            <script type="application/json">
               {JSON.stringify(schemaMarkup())}
            </script>
         </Helmet>
         <Router>
            <Suspense fallback={<PlaceholderImage />}>
               <Routes />
            </Suspense>
         </Router>
      </HelmetProvider>
   );
};

export default App;
