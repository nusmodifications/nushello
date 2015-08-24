class Api::V1::FacultiesController < ApplicationController
  skip_before_filter :authenticate_user_from_token!, only: [:index, :show]

  def index
    faculties = ActiveModel::ArraySerializer.new(Faculty.all, each_serializer: FacultySerializer)
    generate_api_payload('faculties', faculties)
  end

  def show
    faculties = ActiveModel::ArraySerializer.new(Faculty.where(id: params[:facultyId]), each_serializer: FacultySerializer)
    generate_api_payload('faculties', faculties)
  end
end
