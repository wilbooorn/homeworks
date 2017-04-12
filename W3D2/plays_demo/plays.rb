require 'sqlite3'
require 'singleton'

class PlayDBConnection < SQLite3::Database
  include Singleton

  def initialize
    super('plays.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Play
  attr_accessor :title, :year, :playwright_id

  def self.all
    data = PlayDBConnection.instance.execute("SELECT * FROM plays")
    data.map { |datum| Play.new(datum) }
  end

  def self.find_by_title(title)
    play = PlayDBConnection.instance.execute("SELECT * FROM plays WHERE title = #{title}")
    return nil unless play.length > 0
    play.first.map { |datum| Play.new(datum) }
  end

  def self.find_by_playwright(name)
    data = PlayDBConnection.instance.execute("SELECT * FROM plays WHERE playwright_id = (SELECT id FROM playwrights WHERE name = #{name})")
    data.map { |datum| Play.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @year = options['year']
    @playwright_id = options['playwright_id']
  end

  def create
    raise "#{self} already in database" if @id
    PlayDBConnection.instance.execute(<<-SQL, @title, @year, @playwright_id)
      INSERT INTO
        plays (title, year, playwright_id)
      VALUES
        (?, ?, ?)
    SQL
    @id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless @id
    PlayDBConnection.instance.execute(<<-SQL, @title, @year, @playwright_id, @id)
      UPDATE
        plays
      SET
        title = ?, year = ?, playwright_id = ?
      WHERE
        id = ?
    SQL
  end
end
#
# class PlaywrightDBConnection < SQLite3::Database
#   include Singleton
#
#   def initialize
#     super('plays.db')
#     self.type_translation = true
#     self.results_as_hash = true
#   end
# end
#
#
# class Playwright
#   attr_accessor :name, :birth_year
#
#   def self.all
#     data = PlaywrightDBConnection.instance.execute("SELECT * FROM playwrights")
#     data.map { |datum| Playwright.new(datum) }
#   end
#
#   def self.find_by_name(name)
#     data = PlaywrightDBConnection.instance.execute("SELECT * FROM playwrights WHERE name = #{name}")
#     return nil unless data.length > 0
#     data.map { |datum| Playwright.new(datum) }
#   end
#
#   def initialize(options)
#     @id = options['id']
#     @name = options['name']
#     @birth_year = options['birth_year']
#   end
#
#   def create
#     raise "#{self} already in DB" if @id
#     PlaywrightDBConnection.instance.execute(<<-SQL, @name, @birth_year)
#       INSERT INTO
#         playwrights (name, birth_year)
#       VALUES
#         (?, ?)
#     SQL
#     @id = PlaywrightDBConnection.instance.last_insert_row_id
#   end
#
#
#   def update
#     raise "#{self} not in DB" unless @id
#     PlaywrightDBConnection.instance.execute(<<-SQL, @name, @birth_year, @id)
#       UPDATE
#         playwrights
#       SET
#         name = ?, birth_year = ?
#       WHERE
#         id = ?
#     SQL
#   end
#
#   def get_plays
#     plays = PlaywrightDBConnection.instance.execute(<<-SQL, @id)
#       SELECT
#         *
#       FROM
#         plays
#       WHERE
#         playwright_id = ?
#     SQL
#     plays.map { |play| Play.new(play) }
#   end
#
#
# end
