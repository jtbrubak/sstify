class Api::AlbumsController < ApplicationController

  def show
    @album = Album.find(params[:id])
    if @album
      render 'api/albums/show'
    else
      render json: ['Not found'], status: 404
    end
  end

  def index
    @albums = Album.all.order('title')
    render 'api/albums/index'
  end

end
