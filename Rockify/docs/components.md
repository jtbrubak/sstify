## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**AppContainer**
 - Navigation
 - Queue
 - Audio Player

**BrowseContainer**
 - Browse
    - BrowseItem

**ArtistDetailContainer**
 - ArtistDetail
    - ReleaseContainer
      - Release

**SearchResultsContainer**
 - SearchResults
    - SearchResultItem

**ReleaseContainer**
 - Release
    - Track

**FollowedPlaylistsContainer**
  - FollowedPlaylists
    - FollowedPlaylistItem

**UserContainer**
 - User
    - UserPlaylistItem

**UserFollowsContainer**
 - UserFollows
    - UserFollowItem

**FollowedPlaylists**
  - FollowedPlaylists
    - FollowedPlaylistItem

**FollowerContainer**
 - Followers
    - FollowerItem

**PlaylistContainer**
  - Playlist
    - PlaylistTrack

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "App" |
| "/browse" | "BrowseContainer" |
| "search" | "SearchContainer" |
| "/artists/:artistId" | "ArtistDetailContainer" |
| "/artists/:artistId/releases/releaseId" | "ReleaseDetailContainer" |
| "/home/users/:userId/" | "UserContainer" |
| "/home/users/:userId/playlists" | "UserPlaylistsContainer" |
| "/home/users/:userId/userfollows" | "UserFollowsContainer" |
| "/home/users/:userId/followers" | "UserFollowedContainer" |
| "/home/users/:userId/followedplaylists" | "FollowedPlaylistsContainer" |
