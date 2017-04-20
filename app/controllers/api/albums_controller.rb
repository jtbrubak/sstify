class Api::AlbumsController < ApplicationController

  def show
    @album = Album.find(params[:id])
    if @album
      render 'api/albums/show'
    else
    end
  end
  
end
