class UserMailer < ApplicationMailer
  default from: 'admin@e99cats.com'

  def welcome_email(user)
    @user = user
    @url = 'http://example.com/login'
    mail(to: user.username, subject: 'Welcome to 99 Cats!')
  end

end
