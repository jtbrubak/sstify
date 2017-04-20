class Album < ActiveRecord::Base
  validates :title, :artist_id, :year, presence: true
  has_attached_file :image, styles: { thumb: "300x300#" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  belongs_to :artist
  has_many :tracks
end
