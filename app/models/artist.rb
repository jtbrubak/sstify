class Artist < ActiveRecord::Base
  validates :name, :bio, presence: true
  has_attached_file :image, styles: { thumb: "300x300#" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  has_many :albums
  has_many :tracks, through: :tracks
end
