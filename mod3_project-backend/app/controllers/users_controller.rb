class UsersController < ApplicationController

    def index
        @users = User.all
        render json: UserSerializer.new(@users).to_serialized_hash
    end

    def show
        @user = User.find_by(id: params[:id])
        render json: UserSerializer.new(@user).to_serialized_hash
    end

    def update
        user = User.find_by(id: user_params[:id])
        if user
            user.update(user_params)
            render json: user
        end
    end

    private

    def user_params
        params.require(:user).permit(:id, :name, :education, :email)
    end

end