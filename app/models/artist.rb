class Artist < ActiveRecord::Base
  validates :name, presence: true
  has_attached_file :image, styles: { thumb: "300x300#", banner: "" },
    convert_options: {
      :banner => '-crop "1600x350+0+0" -gravity North'
    }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  has_many :albums
  has_many :tracks, through: :tracks
end
