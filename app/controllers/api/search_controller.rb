class Api::SearchController < ApplicationController

  def index
    @artists = Artist.where("name LIKE '%#{search_params[:terms]}'")
    @playlists = Playlist.where("title LIKE '%#{search_params[:terms]}'")
    @albums = Album.where("title LIKE '%#{search_params[:terms]}'")
    @tracks = Track.where("track LIKE '%#{search_params[:terms]}'")
    render 'api/search/index'
  end

  private
  def search_params
    params.require(:search).permit(:terms)
  end
end
