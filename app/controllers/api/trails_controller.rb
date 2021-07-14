class Api::TrailsController < ApplicationController

    def show
        @trail = Trail.find_by(id: params[:id])
        render :show
    end

    def index 
        @trails = Trail.all
        render :index
    end


end