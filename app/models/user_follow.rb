class UserFollow < ActiveRecord::Base
  validates :follower_id, :followed_id, presence: true
  validates :follower_id, uniqueness: { scope: :followed_id }

  belongs_to :follower,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :follower_id
  belongs_to :followed,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :followed_id
end
