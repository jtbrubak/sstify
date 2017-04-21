json.extract! @artist, :id, :name
json.image_url @artist.image.url(:banner)
json.albums @artist.albums.order('year DESC') do |album|
  json.extract! album, :title, :id
  json.image_url album.image.url
end
