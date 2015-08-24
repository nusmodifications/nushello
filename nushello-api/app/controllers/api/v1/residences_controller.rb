class Api::V1::ResidencesController < ApplicationController
  skip_before_filter :authenticate_user_from_token!, only: [:index, :show]
  
  def index
    residences = ActiveModel::ArraySerializer.new(Residence.all, each_serializer: ResidenceSerializer)
    generate_api_payload('residences', residences)
  end

  def show
    residences = ActiveModel::ArraySerializer.new(Residence.where(id: params[:residenceId]), each_serializer: ResidenceSerializer)
    generate_api_payload('residences', residences)
  end
end
