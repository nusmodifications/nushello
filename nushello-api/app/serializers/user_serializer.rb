class UserSerializer < ActiveModel::Serializer
  attributes :facebook_id, :name, :last_name, :fake_name, :bio, :gender, :matriculation_year, :faculty,
             :first_major, :second_major, :residence, :online, :profile_picture_url, :fake_profile_picture_url

  has_one :personality, serializer: PersonalitySerializer
  has_one :preference, serializer: PreferenceSerializer

  def faculty
    object.faculty.try(:name)
  end

  def first_major
    object.first_major.try(:name)
  end

  def second_major
    object.second_major.try(:name)
  end

  def residence
    object.residence.try(:name)
  end
end
