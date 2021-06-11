class Api::TrailsController < ApplicationController
    def show 
        @trail = Trail.find_by(id: params[:id])
    end

    
end
