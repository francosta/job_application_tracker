class SessionsController < ApplicationController

#  Initiate new session (user logs in)

  #  Create new session
  def create
    user = User.find_by(email: params["email"])
    if user
      render json: user.id
    else
     render json: [message: "No user found with this email."]
    end
  end

  #  User logout
  def destroy
     session[:user_id] = nil
     flash[:success] = "You have successfully logged out."
     redirect_to(posts_path)
  end

end
