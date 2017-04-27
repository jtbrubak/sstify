json.extract! @album, :id, :title, :year
json.artist @album.artist
json.image_url @album.image.url(:thumb)
json.tracks @album.tracks.order('album_ord') do |track|
  json.extract! track, :title, :album_ord, :length, :id
  json.url track.audio.url
  json.artist track.album.artist
  json.artist_id track.album.artist.id
  json.image_url track.album.image.url
end
