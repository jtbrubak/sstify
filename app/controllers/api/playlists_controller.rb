class Api::PlaylistsController < ApplicationController

  def show
    @playlist = Playlist.find(params[:id])
    if @playlist
      render 'api/playlists/show'
    else
      render json: ['Not found'], status: 404
    end
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  private
  def playlist_params
    params.require(:playlist).permit(:user_id, :title)
  end

end
