class PreferenceSerializer < ActiveModel::Serializer
  attributes :gender, :faculty_id, :major_id, :residence_id, :year, :filter_facebook_friends,
             :party, :sports, :mugger, :introvert
end
