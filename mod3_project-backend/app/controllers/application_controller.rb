class ApplicationController < ActionController::API

# helper_method :current_user, :logged_in?, :authorized?
    
# Check who the current user is
    def current_user
     if session[:user_id]
       User.find(session[:user_id])
     else
       User.new
     end
    end

# Check if there is nay user logged in
    def logged_in?
     !!current_user.id
    end
   
# Check if the current user is authorized to view resource or page
    def authorized?
     if !logged_in?
       flash[:authorized] = "You aren't logged in"
       redirect_to login_path and return
     end
    end    
end
