#SSTify

[SSTify live](https://sstify.herokuapp.com)

SSTify is a full-stack web application inspired by Spotify and created as a tribute to the catalog of the legendary SST Records. It's built on a Ruby on Rails backend, a PostgreSQL database, and a Reactjs/Redux frontend.

##Features and Implementation

#Asynchronous Music Playback

![playbar]

SSTify's music playbar is routed at the root page, allowing it to remain on screen and actively playing music regardless of where else the user navigates. When the user clicks a play button on an album, playlist, or song, the store is update with an array holding a queue of tracks and their attached information, which then gets placed in the playbar component's state. The page's audio HTML element gets its source attribute filled in with the URL of the first track in the queue, and when the track is finished or skipped, an event is fired that unshifts the track from the queue, thus replacing the audio element's source with the next track's URL. The playbar component's state also holds an "elapsed" variable, which counts the number of seconds that have elapsed in the currently playing track. This allows for constant updating of the time information in the playbar as well as the percentage of the progress bar is filled.

#Playlist creation

![playlist]

Users can create playlists at any time using the Add Playlist button located on the sidebar. After the playlist has been created, it immediately shows up in the playlists section of the sidebar, allowing users to have access to their playlists at all times. Users can then add tracks or entire albums to their playlists by clicking the add icons and selecting their desired playlist from the resulting dropdown menu. Playlists are managed in the database through the join table PlaylistTracks, which connects the Playlists and Tracks table. A PlaylistTrack item has foreign keys for the playlist and track, as well as a playlist_ord column, which indicates where in the playlist the track is located.

#Search

![search]

Users can search for artists, albums, tracks, playlists, and users through the search function, conveniently located on the sidebar. Each keystroke the user makes fires off a new AJAX request to the database, populating the store with new results and thus rendering the results immediately on the page. Search has its own backend route, which uses an ActiveRecord 'where' query (including an 'ILIKE' operator to accomodate uppercase/lowercase letters) to find matching items for each category.

[playbar]: ./docs/screenshots/playbar.PNG
[playlist]: ./docs/screenshots/playlist.PNG
[search]: ./docs/screenshots/search.PNG
