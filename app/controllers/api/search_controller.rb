class Api::SearchController < ApplicationController

  def index
    @artists = Artist.where('name ilike ?', "%#{search_params[:terms]}%")
    @playlists = Playlist.where('title ilike ?', "%#{search_params[:terms]}%")
    @albums = Album.where('title ilike ?', "%#{search_params[:terms]}%")
    @tracks = Track.where('title ilike ?', "%#{search_params[:terms]}%")
    @users = User.where('username ilike ?', "%#{search_params[:terms]}%")
    render 'api/search/index'
  end

  private
  def search_params
    params.require(:search).permit(:terms)
  end
end
