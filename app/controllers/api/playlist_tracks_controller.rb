class Api::PlaylistTracksController < ApplicationController

  def create
    @playlist = Playlist.find(params[:playlist_id])
    if PlaylistTrack.where(playlist_id: @playlist.id).length > 0
      playlist_ord = PlaylistTrack.order('playlist_ord').where("playlist_id = #{@playlist.id}").last.playlist_ord
    else
      playlist_ord = 1
    end
    params[:tracks].values.each do |track|
      playlist_ord += 1
      new_track = PlaylistTrack.new(playlist_id: @playlist.id, playlist_ord: playlist_ord, track_id: track[:id])
      unless new_track.save
        render json: new_track.errors.full_messages, status: 422
        break
      end
    end
    render 'api/playlists/show'
  end

end
