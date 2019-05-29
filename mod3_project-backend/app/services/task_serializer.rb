class TaskSerializer

    def initialize(task_object)
        @task = task_object
    end

    def to_serialized_hash
        options = {only: [:name, :deadline, :id]}
        @task.to_json(options)
    end


end