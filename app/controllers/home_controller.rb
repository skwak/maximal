class HomeController < ApplicationController

  def index
    if !current_user.nil? && current_user.provider == "tumblr"
      @tumblr_user = current_user.name 
      @tumblrs = HTTParty.get("http://api.tumblr.com/v2/blog/#{@tumblr_user}.tumblr.com/posts?api_key=#{ENV["TUMBLR_KEY"]}&limit=10").parsed_response
      @tumblr_posts = @tumblrs["response"]["posts"]
      @tumblrs = @tumblr_posts.collect { |post| post["post_url"].to_json + post["date"].to_json + post["photos"].to_json }
    end
    
    if !current_user.nil? && current_user.provider == "twitter"
      $client = Twitter::REST::Client.new do |config|
        config.consumer_key    = ENV["TWITTER_KEY"]
        config.consumer_secret = ENV["TWITTER_SECRET"]
        config.access_token = ENV["TWITTER_ACCESS_TOKEN"]
        config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
      end
      
      # @tweets = $client.user_timeline(current_user.uid.to_i)
      @tweets = $client.user_timeline(current_user.uid.to_i)

    end
  end




  
end
