class SessionsController < ApplicationController
  def create_oauth
  end
end

# auth_hash = request.env['omniauth.auth']
# if Oauth.find_by(uid: auth_hash["uid"])
#   @oauth = Oauth.find_by(uid: auth_hash["uid"])
#   session[:user_id] = @oauth.user_id
#   @user = User.find(@oauth.user_id)
#   redirect_to my_account_path, notice: "You're signed in, #{@user.username}. Yay!"
# else
#   @user = User.create(username: auth_hash["info"]["nickname"], password_digest: "nil", email: "nil")
#   @oauth = Oauth.create(user_id: @user.id, uid: auth_hash["uid"], provider: auth_hash["provider"], token: auth_hash["credentials"]["token"])
#   session[:user_id] = @oauth.user_id
#   redirect_to my_account_path, notice: "You're signed in, #{@user.username}. Yay!"
# end
