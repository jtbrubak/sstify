# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` - create new user

### Session

- `POST /api/session`
- `DELETE /api/session`

### Artists

- `GET /api/artists`
- `GET /api/artists/:id`

### Releases

- `GET /api/artists/:id/releases` - gets all releases for given artist
- `GET /api/artists/:id/releases/:id` - gets details for specific release

### Playlists

- `GET /api/users/playlists`
- `GET /api/users/playlists/:id`
- `POST /api/users/playlists`
- `PATCH /api/users/playlists/:id`
- `DELETE /api/users/playlists/:id`

### PlaylistFollows

- `GET /api/users/playlist_follows`
- `POST /api/users/playlist_follows/:id`
- `DELETE /api/users/playlist_follows/:id`

### UserFollows

- `GET /api/users/user_follows`
- `POST /api/users/user_follows/:id`
- `DELETE /api/users/user_follows/:id`
