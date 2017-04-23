json.array!(@tracks) do |track|
  json.extract! track, :title, :length
  json.artist track.album.artist.name
  json.url track.audio.url
end
