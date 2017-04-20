json.extract! @album, :id, :title, :year, :image
json.artist @album.artist.name
json.image_url @album.image.url
json.tracks @album.tracks do |track|
  json.extract! :title, :album_ord, :length
  json.url track.audio.url
end
