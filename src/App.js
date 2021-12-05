import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';

import { schemaMarkup } from './components/SEO';
import Routes from './Routes';
import PlaceholderImage from './components/PlaceholderImage/PlaceholderImage';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
   return (
      <>
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
      </>
   );
};

export default App;
