class SessionsController < ApplicationController

#  Initiate new session (user logs in)

  #  Create new session
  def create
    user = User.find_by(email: session_params[:email])
    if user && user.authenticate(session_params[:password])
      session[:user_id] = user.id
      render json: user.id
    else
     render json: {
      error: "We couldn't find a user with that email address.",
      status: 400
    }, status: 400
    end
  end

  #  User logout
  def destroy
    user = User.find_by(id: params[:id].to_i)
    if user
     session[:id] = nil
     render json: {
       message: "The user was logged out."
     }
    else
      render json: {
        error: "The user was not logged out.",
        status: 400
      }, status: 400
    end
  end

  def session_params
    params.require(:session).permit(:email, :password, :id)
  end

end
