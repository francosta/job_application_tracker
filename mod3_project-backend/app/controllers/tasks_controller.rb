class TasksController < ApplicationController

    def index
        @tasks = Task.all
        render json: TaskSerializer.new(@tasks).to_serialized_hash
    end

    def show
        @task = Task.find_by(id: params[:id])
        render json: TaskSerializer.new(@task).to_serialized_hash
    end

    def update
        task = Task.find_by(id: params[:id])
        task.update(task_params)
        render json: task
    end

    def create
        task = Task.new(task_params)
        if task.save
            render json: task
        else
           render json: {
             error: "The task was not created. Please try again later.",
             status: 400
             }, status: 400
        end

    end

    private

    def task_params
        params.require(:task).permit(:name, :deadline, :id, :status, :application_id)
    end

end
