import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Fallback from './Fallback';

const Home = React.lazy(() => import('./pages/Home'));
const Posts = React.lazy(() => import('./pages/Posts'));

const Router = () => (
  <React.Suspense fallback={<Fallback />}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form1" component={Form1} />
        <Route exact path="/form2" component={Form2} />
        <Route exact path="/form3" component={Form3} />

        <Route exact path="/posts" component={Posts} />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default Router;
