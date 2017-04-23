json.array!(@albums) do |album|
  json.extract! album, :id, :title, :year
  json.artist album.artist
  json.image_url album.image.url(:thumb)
end
