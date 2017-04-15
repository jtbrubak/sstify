# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## artists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
image_url   | string    | not null
bio         | text      | not null

## releases
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
artist_id   | integer   | not null, foreign key (references artists), indexed
title       | integer   | not null
type        | string    | not null, inclusion in: [album, compilation, single]
image_url   | string    | not null
year        | integer   | not null

## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
release_id  | integer   | not null, foreign key (references releases), indexed
title       | string    | not null
release_ord | integer   | not null
track_url   | string    | not null

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null

##playlist_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
playlist_id | integer   | not null, foreign key (references playlists), indexed

##playlist_tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | not null, foreign key (references tracks), indexed
playlist_id | integer   | not null, foreign key (references playlists), indexed
playlist_ord| integer   | not null

##user_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followed_id | integer   | not null, foreign key (references users), indexed
