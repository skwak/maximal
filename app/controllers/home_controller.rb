class HomeController < ApplicationController

  def index
    @tumblr_user = current_user.name
    @tumblrs = HTTParty.get("http://api.tumblr.com/v2/blog/#{@tumblr_user}.tumblr.com/posts?api_key=#{ENV["TUMBLR_KEY"]}&limit=10").parsed_response
    @tumblr_posts = @tumblrs["response"]["posts"]
    @tumblrs = @tumblr_posts.collect { |post| post["date"] + ", " + post["post_url"] + ", " + post["photos"].to_json }
  end

end
