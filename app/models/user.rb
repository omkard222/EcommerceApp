class User < ApplicationRecord
  validates :name, presence: true
  before_save { self.email = email.downcase }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true,  length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                     uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }                  
  has_secure_password
end
