class NameGenerator
  def self.random
    adjectives = get_adjectives
    nouns = get_nouns

    "#{adjectives.sample.strip.capitalize} #{nouns.sample.strip.capitalize}"
  end

  private
    def self.get_adjectives
      get_file_contents('adjectives')
    end

    def self.get_nouns
      get_file_contents('nouns')
    end

    def self.get_file_contents(filename)
      file_path = File.expand_path("../assets/#{filename}.txt", __FILE__)
      File.readlines(file_path)
    end
end
