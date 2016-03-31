puts "hello world"
puts "Hi there – what is your name?"
name = gets
puts "Nice to meet you " + name

command = ""

while command != "bye"
    puts command
    command = gets.chomp
end

puts "see ya bitch"