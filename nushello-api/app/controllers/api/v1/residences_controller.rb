class Api::V1::ResidencesController < ApplicationController
  skip_before_filter :authenticate_user_from_token!, only: [:fb_auth]
  
  def index
    residences = ActiveModel::ArraySerializer.new(Residence.all, each_serializer: ResidenceSerializer)
    generate_api_payload('residences', residences)
  end
end
