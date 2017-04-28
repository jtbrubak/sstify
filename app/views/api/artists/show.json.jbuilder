json.extract! @artist, :id, :name
json.image_url @artist.image.url(:banner)
json.albums @artist.albums.includes(:tracks).order('year DESC') do |album|
  json.extract! album, :title, :id, :artist
  json.image_url album.image.url
  json.tracks album.tracks.order('album_ord') do |track|
    json.extract! track, :title, :album_ord, :length, :id
    json.url track.audio.url
    json.artist track.album.artist
    json.artist_id track.album.artist.id
    json.album_id track.album.id
    json.image_url track.album.image.url
  end
end
