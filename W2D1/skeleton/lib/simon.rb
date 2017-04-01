class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []

  end

  def play
    until game_over
      take_turn
    end
    puts game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    puts round_success_message
    @sequence_length += 1

  end

  def show_sequence
    add_random_color
    print @seq
    sleep(1)
    system("clear")
  end

  def require_sequence
    puts "Repeat back the colors:"
    print ">> "
    input = gets.chomp.split(" ")
    unless input == @seq
      @game_over = true
    end
  end

  def add_random_color
    @seq << COLORS.sample

  end

  def round_success_message
    @game_over ? "Ouch..." : "Good job"

  end

  def game_over_message
    "You lose!"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end

if FILE == $PROGRAM_NAME
  simon = Simon.new
  simon.play
end
