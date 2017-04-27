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
  json.extract! track, :id, :title, :album, :artist, :length
end
json.playlists @playlists do |playlist|
  json.extract! playlist, :id, :title
end
