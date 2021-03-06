#!/bin/env ruby
# frozen_string_literal: true

require 'every_politician_scraper/scraper_data'
require 'pry'

class MemberList
  class Member
    def name
      noko.css('.section-item__title').text.tidy
    end

    def position
      noko.css('.section-item-member__position').text.split(/ [-—] /).map(&:tidy)
    end
  end

  class Members
    def member_container
      noko.css('.section-item-member')
    end
  end
end

file = Pathname.new 'official.html'
puts EveryPoliticianScraper::FileData.new(file).csv
