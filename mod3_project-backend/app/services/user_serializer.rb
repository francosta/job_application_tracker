class UserSerializer

    def initialize(user_object)
        @user = user_object
    end

    def to_serialized_hash
        options = {
          include: {
            applications: {
              only: [:role, :company_name, :person_of_contact, :id],
              include: {
                  tasks: {
                      only: [:name, :deadline, :status, :id]
                  },
                  cover_letters: {
                    only: [:content]
                  }
                }
            }
          },
          except: [:updated_at, :created_at, :id, :password_digest],
        }
        @user.to_json(options)
    end


end