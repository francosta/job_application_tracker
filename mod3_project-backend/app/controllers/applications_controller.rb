class ApplicationsController < ApplicationController

    def index
        @applications = User.all
        render json: @applications
    end
end
