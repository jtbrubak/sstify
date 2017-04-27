json.extract! @playlist, :title, :id
json.user @playlist.user
json.tracks @playlist.playlist_tracks.order('playlist_ord') do |playlist_track|
  json.extract! playlist_track, :id, :playlist_ord
  json.title playlist_track.track.title
  json.length playlist_track.track.length
  json.album playlist_track.track.album
  json.artist playlist_track.track.album.artist
  json.track_id playlist_track.track.id
  json.url playlist_track.track.audio.url
end
