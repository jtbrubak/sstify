class Playlist < ActiveRecord::Base
  validates :title, :user_id, presence: true
  belongs_to :user
  has_many :playlist_tracks
  has_many :tracks, through: :playlist_tracks
end
