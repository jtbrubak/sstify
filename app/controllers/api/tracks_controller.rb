class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all.order('title')
    render 'api/tracks/index'
  end

end
