class MatchSerializer < ActiveModel::Serializer
  attributes :id, :fake_name, :bio, :gender, :matriculation_year, :faculty, :first_major, :second_major, :residence, :online

  has_one :personality, serializer: PersonalitySerializer

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
