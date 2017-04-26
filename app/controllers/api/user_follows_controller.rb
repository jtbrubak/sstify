class Api::UserFollowsController < ApplicationController
  def create
    @user_follow = UserFollow.new(user_follow_params)
    @user = User.find(@user_follow.follower_id)
    if @user_follow.save
      render "api/users/show"
    else
      render json: @user_follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @user_follow = UserFollow.find_by(user_follow_params)
    @user = User.find(@user_follow.follower_id)
    if @user_follow.destroy
      render "api/users/show"
    else
      render json: ["Not found"], status: 404
    end
  end

  private
  def user_follow_params
    params.require(:user_follow).permit(:follower_id, :followed_id)
  end
end
