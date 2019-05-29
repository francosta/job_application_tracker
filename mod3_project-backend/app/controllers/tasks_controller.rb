class TasksController < ApplicationController

    def index
        @tasks = Task.all
        render json: TaskSerializer.new(@tasks).to_serialized_hash
    end

    def show
        @task = Task.find_by(id: params[:id])
        render json: TaskSerializer.new(@task).to_serialized_hash
    end

    private

    def task_params
        params.permit(:name, :deadline, :id)
    end

end
