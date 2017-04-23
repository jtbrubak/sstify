class Api::ArtistsController < ApplicationController

  def show
    @artist = Artist.find(params[:id])
    if @artist
      render 'api/artists/show'
    else
      render json: ['Not found'], status: 404
    end
  end

  def index
    @artists = Artist.all.order('name')
    render 'api/artists/index'
  end

end
