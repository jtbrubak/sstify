json.extract! @playlist, :title, :id
json.user @playlist.user
json.tracks @playlist.tracks.order('playlist_ord') do |track|
  json.extract! track, :title, :length, :album
  json.artist track.album.artist
end
