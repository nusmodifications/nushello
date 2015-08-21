class UserSerializer < ActiveModel::Serializer
  attributes :facebook_id, :name, :profile_picture_url, :last_name, :gender, :matriculation_year, :faculty,
             :first_major, :second_major, :residence, :online

  def faculty
    object.faculty.name
  end

  def first_major
    object.first_major.name
  end

  def second_major
    object.second_major.try(:name)
  end

  def residence
    object.residence.name
  end
end
