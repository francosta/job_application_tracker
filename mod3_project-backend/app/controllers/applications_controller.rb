class ApplicationsController < ApplicationController

    def index
        @applications = Application.all
        render json: ApplicationSerializer.new(@applications).to_serialized_hash
    end

    def show
        @application = Application.find_by(id: params[:id])
        render json: ApplicationSerializer.new(@application).to_serialized_hash
    end

    def create
        application = Application.new(application_params)
        if application.save
            render json: application
        else
           render json: {
             error: "The user was not logged out.",
             status: 400
             }, status: 400
        end
    end

    def update
        application = Application.find_by(id: params[:id].to_i)
        if application.update(application_params)
            render json: application
        end
    end

    def destroy
        application = Application.all.find_by(application_params)
        application.destroy
        render json: application
    end

    private

    def application_params
        params.permit(:company_name, :person_of_contact, :role, :user_id, :id)
    end


end
