class ApplicationsController < ApplicationController

    def index
        @applications = Application.all
        render json: ApplicationSerializer.new(@applications).to_serialized_hash
    end

    def show
        @application = Application.find_by(id: params[:id])
        render json: ApplicationSerializer.new(@application).to_serialized_hash
    end

    def update
        application = Application.find_by(id: params[:id].to_i)
        if application.update(application_params)
            render json: application
        end
    end

    private

    def application_params
        params.permit(:company_name, :person_of_contact, :role)
    end


end
