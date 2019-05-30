class ApplicationSerializer

    def initialize(application_object)
        @application = application_object
    end

    def to_serialized_hash
        options = {            
              include: {
                  tasks: {
                      only: [:name, :deadline, :status]
                  },
                  cover_letters: {
                    only: [:content]
                  }
                }
          }
        @application.to_json(options)
    end


end