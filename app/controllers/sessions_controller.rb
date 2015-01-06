class SessionsController < ApplicationController

  def create_oauth
    auth_hash = request.env["omniauth.auth"]
    if User.find_by(uid: auth_hash["uid"]).nil?
      @user = User.create(uid: auth_hash["uid"], name: auth_hash["info"]["name"], provider: params[:provider], avatar: auth_hash["info"]["avatar"])
      session[:user_id] = @user.id
      redirect_to root_path, notice: "You're signed in, #{@user.name}"
    else
      @user = User.find_by(uid: auth_hash["uid"])
      session[:user_id] = @user.id
      redirect_to root_path, flash: "Something went wrong :-("
    end
  end
  
end
