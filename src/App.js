import { Route, Switch } from 'react-router-dom';

import AllMeetup from './pages/AllMeetup';
import NewMeetup from './pages/NewMeetup';
import Favourites from './pages/Favourites';
import Layout from './components/layouts/Layout';

function App() {
  return (
  <Layout>
    <Switch>
      <Route exact path="/">
        <AllMeetup />
      </Route>
      <Route path="/new-meetup">
        <NewMeetup />
      </Route>
      <Route path="/favourites">
        <Favourites />
      </Route>
    </Switch>
  </Layout>
  )
}

export default App;
