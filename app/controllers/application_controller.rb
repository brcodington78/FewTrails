class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token ##for testing, take out once you have buttons

    helper_method :current_user, :logged_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_login
        redirect_to new_session_url unless logged_in?
    end

    def require_loggout
        redirect_to new_session_if logged_in?
    end

    def logged_in?
        !!current_user
    end


    def login(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logout
        current_user.reset_session_token!

        session[:session_token] = nil
    end


end
