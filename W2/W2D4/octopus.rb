def sluggish_octopus(fishes)
  sorted = false
  until sorted
    sorted = true
    fishes.each_index do |i|
      next if i + 1 == fishes.length
      j = 1 + 1
      if fishes[i].length > fishes[j].length
        fishes[i], fishes[j] = fishes[j], fishes[i]
        sorted = false
      end
    end
  end
  fishes[-1]
end
#
# p sluggish_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish',
#                     'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])

def dominant_octopus(fishes)
  return fishes if fishes.length == 1
  mid = fishes.length / 2
  left = dominant_octopus(fishes[0...mid])
  right = dominant_octopus(fishes[mid..-1])
  consume(left, right)
end

def consume(left, right)
  fish = []
  until right.empty? || left.empty?
    if right.first.length < left.first.length
      fish << right.shift
    else
      fish << left.shift
    end
  end
  fish + left + right
end

def clever_octopus(fishes)
  long = ""
  fishes.each { |fish| long = fish if fish.length > long.length }
  long
end

def slow_dance(direction, array)
  array.each_index do |i|
    return i if array[i] == direction
  end
end

def fast_dance(direction, hash)
  hash[direction]
end

tiles_hash = { "up" => 0, "right-up" => 1, "right" => 2,
               "right-down" => 3, "down" => 4, "left-down" => 5,
               "left" => 6, "left-up" => 7 }

tiles_array = ["up", "right-up", "right", "right-down", "down",
               "left-down", "left", "left-up" ]
# p slow_dance("right", tiles_array)
# p fast_dance("right", tiles_hash)
# p clever_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish',
#                     'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])
