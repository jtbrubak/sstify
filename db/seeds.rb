# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create(username: 'guest', password: 'password')

Artist.destroy_all
Artist.create(name: 'Black Flag', image: "https://s3.amazonaws.com/sstify-dev/seeds/artists/black_flag.jpg")

Album.destroy_all
Album.create(artist: Artist.find_by_name('Black Flag'), title: 'My War', year: 1984, image: 'https://s3.amazonaws.com/sstify-dev/seeds/albums/my_war.jpg')

Track.destroy_all
Track.create(audio: 'https://s3.amazonaws.com/sstify-dev/seeds/tracks/01+-+black+flag+-+my+war.mp3', album: Album.find_by_title('My War'))
Track.create(audio: 'https://s3.amazonaws.com/sstify-dev/seeds/tracks/04+-+black+flag+-+i+love+you.mp3', album: Album.find_by_title('My War'))
Track.create(audio: 'https://s3.amazonaws.com/sstify-dev/seeds/tracks/03+-+black+flag+-+beat+my+head+against+the+wall.mp3',
album: Album.find_by_title('My War'))
Track.create(audio: 'https://s3.amazonaws.com/sstify-dev/seeds/tracks/05+-+black+flag+-+forever+time.mp3',
album: Album.find_by_title('My War'))
Track.create(audio: 'https://s3.amazonaws.com/sstify-dev/seeds/tracks/07+-+black+flag+-+nothing+left+inside.mp3',
album: Album.find_by_title('My War'))
Track.create(audio: 'https://s3.amazonaws.com/sstify-dev/seeds/tracks/06+-+black+flag+-+the+swinging+man.mp3',
album: Album.find_by_title('My War'))
Track.create(audio: 'https://s3.amazonaws.com/sstify-dev/seeds/tracks/08+-+black+flag+-+three+nights.mp3',
album: Album.find_by_title('My War'))
Track.create(audio: 'https://s3.amazonaws.com/sstify-dev/seeds/tracks/09+-+black+flag+-+scream.mp3',
album: Album.find_by_title('My War'))
