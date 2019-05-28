class ApplicationsController < ApplicationController

    def index
        @applications = Application.all
        render json: @applications
    end
end
