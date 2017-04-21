json.extract! @album, :id, :title, :year
json.artist @album.artist
json.image_url @album.image.url(:thumb)
json.tracks @album.tracks.order('album_ord') do |track|
  json.extract! track, :title, :album_ord, :length
  json.url track.audio.url
end
