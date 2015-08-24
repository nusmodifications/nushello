class Api::V1::FacultiesController < ApplicationController
  skip_before_filter :authenticate_user_from_token!, only: [:index, :show, :majors]

  def index
    faculties = ActiveModel::ArraySerializer.new(Faculty.all, each_serializer: FacultySerializer)
    generate_api_payload('faculties', faculties)
  end

  def show
    faculty = ActiveModel::ArraySerializer.new(Faculty.where(id: params[:facultyId]), each_serializer: FacultySerializer)
    generate_api_payload('faculty', faculty)
  end

  def majors
  	majors = ActiveModel::ArraySerializer.new(Major.where(faculty_id: params[:facultyId]), each_serializer: MajorSerializer)
    generate_api_payload('majors', majors)
  end
end
