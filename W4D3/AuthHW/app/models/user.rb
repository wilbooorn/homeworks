class User < ApplicationRecord
  attr_reader :password

  validates :username, :session_token, presence: true
  validates :password_digest, presence: {message: 'Password can\'t be blank'}
  validates :password, length: { minimum: 5 , allow_nil: true}

  before_validation :ensure_session_token


  def self.find_by_credentials(name, password)
    user = User.find_by(username: name)
    user && BCrypt::Password.new(user.password_digest).is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.update_attributes(session_token: User.generate_session_token)
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
