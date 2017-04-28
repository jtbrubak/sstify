json.artists @artists do |artist|
  json.extract! artist, :id, :name
  json.image_url artist.image.url(:thumb)
end
json.albums @albums do |album|
  json.extract! album, :id, :title
  json.artist album.artist
  json.image_url album.image.url(:thumb)
end
json.tracks @tracks do |track|
  json.extract! track, :id, :title, :album, :length
  json.artist track.album.artist
  json.url track.audio.url
  json.image_url track.album.image.url
  json.artist_id track.album.artist.id
  json.album_id track.album.id
end
json.playlists @playlists do |playlist|
  json.extract! playlist, :id, :title
end
json.users @users do |user|
  json.extract! user, :id, :username
end
