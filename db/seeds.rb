status = ['To Do', 'In Progress', 'To Verify', 'Completed']

30.times do
  Task.create(
    title: Faker::Job.field,
    description: Faker::Seinfeld.quote,
    status: status.sample
  )
end

puts 'Tasks seeded'
