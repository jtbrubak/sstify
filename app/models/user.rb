class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token

  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :session_token, :username, uniqueness: true
  has_many :playlists
  has_many :playlist_follows,
    class_name: 'PlaylistFollow',
    primary_key: :id,
    foreign_key: :user_id
  has_many :user_follows,
    class_name: 'UserFollow',
    primary_key: :id,
    foreign_key: :follower_id
  has_many :followed_playlists,
    through: :playlist_follows,
    source: :playlist
  has_many :followed_users,
    through: :user_follows,
    source: :followed


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user.try(:is_password?, password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def is_password?(unencrypted_password)
    BCrypt::Password.new(self.password_digest).is_password?(unencrypted_password)
  end

  def password=(unencrypted_password)
    if unencrypted_password.present?
      @password = unencrypted_password
      self.password_digest = BCrypt::Password.create(unencrypted_password)
    end
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
