class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { Array.new([:stone, :stone, :stone, :stone]) }
    @cups[6], @cups[13] = [], []

  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless start_pos.between?(0, 12)
    raise "Invalid starting cup" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    temp = @cups[start_pos]
    @cups[start_pos] = []
    index = start_pos
    until temp.empty?
      index += 1
      index = 0 if index >= 14
      if index == 6
        @cups[6] << temp.shift if current_player_name == @name1
      elsif index == 13
        @cups[13] << temp.shift if current_player_name == @name2
      else
        @cups[index] << temp.shift
      end
    end
    render
    next_turn(index)
  end

  def next_turn(ending_cup_idx)
    #puts ending_cup_idx
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].count == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[0..5].all? { |cup| cup.empty? } ||
    @cups[7..12].all? { |cup| cup.empty? }
  end

  def winner
    p1 = @cups[6].count
    p2 = @cups[13].count

    return :draw if p1 == p2
    p1 > p2 ? @name1 : @name2
  end
end
