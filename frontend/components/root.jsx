import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// components
import SessionFormContainer from './session_form/session_form_container';
import MainContainer from './main/main_container';
import BrowseContainer from './browse/browse_container';
import AlbumDetailContainer from './album_detail/album_detail_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/browse');
    }
  }

  const _redirect = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/browse');
    } else {
      replace('/login');
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute onEnter={_redirect} />
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/main" component={MainContainer} onEnter={_ensureLoggedIn}>
            <Route path="/browse" component={BrowseContainer}/>
            <Route path="/albums/:id" component={AlbumDetailContainer}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
