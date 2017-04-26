class PlaylistFollow < ActiveRecord::Base
  validates :playlist_id, :user_id, presence: true
  validates :playlist_id, uniqueness: { scope: :user_id }

  belongs_to :follower,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id
  belongs_to :playlist,
    class_name: 'Playlist',
    primary_key: :id,
    foreign_key: :playlist_id
end
