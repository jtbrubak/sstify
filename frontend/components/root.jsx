import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// components
import SessionFormContainer from './session_form/session_form_container';
import MainContainer from './main/main_container';
import BrowseContainer from './browse/browse_container';
import BrowseArtistsContainer from './browse/browse_artists_container';
import BrowseAlbumsContainer from './browse/browse_albums_container';
import BrowseTracksContainer from './browse/browse_tracks_container'
import AlbumDetailContainer from './album_detail/album_detail_container';
import ArtistDetailContainer from './artist_detail/artist_detail_container';

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
            <Route path="/browse" component={BrowseContainer}>
              <Route path="/browse/artists" component={BrowseArtistsContainer}/>
              <Route path="/browse/albums" component={BrowseAlbumsContainer}/>
              <Route path="/browse/tracks" component={BrowseTracksContainer}/>
            </Route>
            <Route path="/album/:id" component={AlbumDetailContainer}/>
            <Route path="/artist/:id" component={ArtistDetailContainer}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
