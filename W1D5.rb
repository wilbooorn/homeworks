class Stack
  attr_accessor :ivar
  def initialize
    @ivar = []
  end

  def add(el)
    ivar.push(el)
  end

  def remove
    ivar.pop
  end

  def show
    p ivar
  end
end

# x = Stack.new
# x.add(1)
# x.add(2)
# x.show
# x.add(3)
# x.show
# x.remove
# x.show
# x.remove
# x.show

class Queue
  attr_accessor :ivar
  def initialize
    @ivar = []
  end

  def enqueue(el)
    ivar.push(el)
  end

  def dequeue
    ivar.shift
  end

  def show
    p ivar
  end
end

# x = Queue.new
# x.enqueue(1)
# x.enqueue(2)
# x.show
# x.enqueue(3)
# x.show
# x.dequeue
# x.show
# x.dequeue
# x.show


class Map
  attr_accessor :ivar

  def initialize
    @ivar = []
  end

  def assign(key, value)
    index = nil
    ivar.each_with_index { |el, i| index = i if el[0] == key }
    if index.nil?
      ivar << [key, value]
    else
      ivar[index][1] = value
    end
  end

  def lookup(key)
    ivar.each { |el| return el[1] if el[0] == key }
  end

  def remove(key)
    ivar.each_with_index { |el, index| ivar.delete_at(index) if el[0] == key }
  end

end

# x = Map.new
# x.assign(1, 2)
# x.assign(3, 4)
# x.assign(3, 5)
# p x.lookup(3)
# x.remove(3)
# p x
