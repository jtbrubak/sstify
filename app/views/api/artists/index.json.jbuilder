json.array!(@artists) do |artist|
  json.extract! artist, :id, :name
  json.image_url artist.image.url(:thumb)
end
