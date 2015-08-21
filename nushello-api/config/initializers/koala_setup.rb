require 'koala'

Koala.configure do |config|
  config.api_version = 'v2.4'
  # other common options are `rest_server` and `dialog_host`
  # see lib/koala/http_service.rb
end

Koala::Facebook::OAuth.class_eval do
  def initialize_with_default_settings(*args)
    raise "application id and/or secret are not specified in the envrionment" unless ENV['FB_APP_ID'] && ENV['FB_SECRET_KEY']
    initialize_without_default_settings(ENV['FB_APP_ID'].to_s, ENV['FB_SECRET_KEY'].to_s, args.first)
  end

  alias_method_chain :initialize, :default_settings
end
