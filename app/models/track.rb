require 'byebug'

class Track < ActiveRecord::Base
  validates :album_id, :title, :album_ord, :length, presence: true
  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\z/
  belongs_to :album
  after_initialize :extract_metadata
  #
  def extract_metadata
    if (audio.queued_for_write[:original])
      path = audio.queued_for_write[:original].path
      open_opts = { :encoding => 'utf-8' }
      Mp3Info.open(path, open_opts) do |mp3info|
        self.length = mp3info.length.to_i
        self.title = mp3info.tag.title
        self.album_ord = mp3info.tag.tracknum.to_i
        # self.album = Album.find_by_title(mp3info.tag.album)
      end
    end
  end
end
