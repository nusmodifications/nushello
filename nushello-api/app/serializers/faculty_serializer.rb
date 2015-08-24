class FacultySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :majors, serializer: MajorSerializer
end
