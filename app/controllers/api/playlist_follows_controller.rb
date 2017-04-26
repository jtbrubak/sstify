class Api::PlaylistFollowsController < ApplicationController
  def create
    @playlist_follow = PlaylistFollow.new(playlist_follow_params)
    @user = User.find(@playlist_follow.user_id)
    if @playlist_follow.save
      render "api/users/show"
    else
      render json: @playlist_follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_follow = PlaylistFollow.find_by(playlist_follow_params)
    @user = User.find(@playlist_follow.user_id)
    if @playlist_follow.destroy
      render "api/users/show"
    else
      render json: ["Not found"], status: 404
    end
  end

  private
  def playlist_follow_params
    params.require(:playlist_follow).permit(:user_id, :playlist_id)
  end
end
