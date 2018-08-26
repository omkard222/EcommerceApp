# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



15.times do |n|
  Product.create(

    title: ["Full Sleev T-Shirt","Short T-shirt","Sleev-Less T-Shirt"].shuffle.first,
    price: ["599","699","399", "499", "299"].shuffle.first,
    size: ["S", "M", "L", "XL", "XLL"].shuffle.first,
    image: ["shop_01.jpg", "shop_02.jpg", "shop_03.jpg", "shop_05.jpg", "shop_08.jpg"].shuffle.first
)
end
