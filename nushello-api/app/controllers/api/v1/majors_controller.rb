class Api::V1::MajorsController < ApplicationController
  skip_before_filter :authenticate_user_from_token!, only: [:show]

  def show
    majors = ActiveModel::ArraySerializer.new(Major.where(faculty_id: params[:facultyId]), each_serializer: MajorSerializer)
    generate_api_payload('majors', majors)
  end
end
