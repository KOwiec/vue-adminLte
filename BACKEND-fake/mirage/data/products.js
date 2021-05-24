const products = [
    {
      "id": 1,
      "name": "Practical Wooden Chips",
      "color": "blue",
      "department": "Shoes",
      "price": "685.00",
      "adjective": "Unbranded",
      "material": "Soft",
      "product": "Pants"
    },
    {
      "id": 2,
      "name": "Practical Metal Salad",
      "color": "magenta",
      "department": "Toys",
      "price": "700.00",
      "adjective": "Handcrafted",
      "material": "Rubber",
      "product": "Fish"
    },
    {
      "id": 3,
      "name": "Rustic Rubber Salad",
      "color": "lavender",
      "department": "Outdoors",
      "price": "177.00",
      "adjective": "Gorgeous",
      "material": "Soft",
      "product": "Pizza"
    },
    {
      "id": 4,
      "name": "Rustic Wooden Pizza",
      "color": "sky blue",
      "department": "Beauty",
      "price": "864.00",
      "adjective": "Sleek",
      "material": "Cotton",
      "product": "Pants"
    },
    {
      "id": 5,
      "name": "Ergonomic Plastic Shirt",
      "color": "white",
      "department": "Tools",
      "price": "111.00",
      "adjective": "Refined",
      "material": "Granite",
      "product": "Shirt"
    },
    {
      "id": 6,
      "name": "Handcrafted Steel Mouse",
      "color": "fuchsia",
      "department": "Outdoors",
      "price": "992.00",
      "adjective": "Tasty",
      "material": "Frozen",
      "product": "Fish"
    },
    {
      "id": 7,
      "name": "Intelligent Metal Shirt",
      "color": "orchid",
      "department": "Shoes",
      "price": "449.00",
      "adjective": "Incredible",
      "material": "Frozen",
      "product": "Soap"
    },
    {
      "id": 8,
      "name": "Refined Plastic Computer",
      "color": "green",
      "department": "Toys",
      "price": "831.00",
      "adjective": "Generic",
      "material": "Cotton",
      "product": "Fish"
    },
    {
      "id": 9,
      "name": "Tasty Soft Ball",
      "color": "ivory",
      "department": "Outdoors",
      "price": "691.00",
      "adjective": "Licensed",
      "material": "Soft",
      "product": "Gloves"
    },
    {
      "id": 10,
      "name": "Generic Frozen Bike",
      "color": "yellow",
      "department": "Health",
      "price": "522.00",
      "adjective": "Tasty",
      "material": "Metal",
      "product": "Cheese"
    },
    {
      "id": 11,
      "name": "Handmade Metal Cheese",
      "color": "grey",
      "department": "Movies",
      "price": "381.00",
      "adjective": "Fantastic",
      "material": "Metal",
      "product": "Hat"
    },
    {
      "id": 12,
      "name": "Tasty Concrete Chair",
      "color": "plum",
      "department": "Beauty",
      "price": "295.00",
      "adjective": "Incredible",
      "material": "Soft",
      "product": "Pizza"
    },
    {
      "id": 13,
      "name": "Ergonomic Metal Chicken",
      "color": "white",
      "department": "Outdoors",
      "price": "760.00",
      "adjective": "Awesome",
      "material": "Fresh",
      "product": "Sausages"
    },
    {
      "id": 14,
      "name": "Tasty Fresh Salad",
      "color": "orange",
      "department": "Kids",
      "price": "734.00",
      "adjective": "Rustic",
      "material": "Metal",
      "product": "Salad"
    },
    {
      "id": 15,
      "name": "Licensed Plastic Sausages",
      "color": "magenta",
      "department": "Games",
      "price": "986.00",
      "adjective": "Tasty",
      "material": "Wooden",
      "product": "Keyboard"
    },
    {
      "id": 16,
      "name": "Intelligent Soft Mouse",
      "color": "silver",
      "department": "Books",
      "price": "803.00",
      "adjective": "Tasty",
      "material": "Rubber",
      "product": "Pizza"
    },
    {
      "id": 17,
      "name": "Sleek Concrete Towels",
      "color": "cyan",
      "department": "Tools",
      "price": "669.00",
      "adjective": "Gorgeous",
      "material": "Steel",
      "product": "Pizza"
    },
    {
      "id": 18,
      "name": "Unbranded Concrete Car",
      "color": "blue",
      "department": "Games",
      "price": "941.00",
      "adjective": "Incredible",
      "material": "Wooden",
      "product": "Table"
    },
    {
      "id": 19,
      "name": "Handmade Concrete Pants",
      "color": "indigo",
      "department": "Beauty",
      "price": "187.00",
      "adjective": "Practical",
      "material": "Plastic",
      "product": "Salad"
    },
    {
      "id": 20,
      "name": "Licensed Plastic Pants",
      "color": "red",
      "department": "Garden",
      "price": "996.00",
      "adjective": "Practical",
      "material": "Plastic",
      "product": "Chair"
    },
    {
      "id": 21,
      "name": "Rustic Metal Chair",
      "color": "lime",
      "department": "Jewelery",
      "price": "410.00",
      "adjective": "Fantastic",
      "material": "Cotton",
      "product": "Towels"
    },
    {
      "id": 22,
      "name": "Generic Wooden Towels",
      "color": "maroon",
      "department": "Kids",
      "price": "192.00",
      "adjective": "Handcrafted",
      "material": "Granite",
      "product": "Ball"
    },
    {
      "id": 23,
      "name": "Practical Wooden Fish",
      "color": "sky blue",
      "department": "Books",
      "price": "73.00",
      "adjective": "Sleek",
      "material": "Plastic",
      "product": "Soap"
    },
    {
      "id": 24,
      "name": "Incredible Rubber Pants",
      "color": "azure",
      "department": "Home",
      "price": "61.00",
      "adjective": "Tasty",
      "material": "Frozen",
      "product": "Pants"
    },
    {
      "id": 25,
      "name": "Fantastic Wooden Chair",
      "color": "salmon",
      "department": "Music",
      "price": "780.00",
      "adjective": "Practical",
      "material": "Wooden",
      "product": "Gloves"
    },
    {
      "id": 26,
      "name": "Refined Soft Chair",
      "color": "white",
      "department": "Computers",
      "price": "437.00",
      "adjective": "Fantastic",
      "material": "Metal",
      "product": "Pants"
    },
    {
      "id": 27,
      "name": "Awesome Plastic Ball",
      "color": "violet",
      "department": "Music",
      "price": "241.00",
      "adjective": "Generic",
      "material": "Soft",
      "product": "Pants"
    },
    {
      "id": 28,
      "name": "Sleek Metal Keyboard",
      "color": "mint green",
      "department": "Shoes",
      "price": "858.00",
      "adjective": "Handmade",
      "material": "Rubber",
      "product": "Chicken"
    },
    {
      "id": 29,
      "name": "Incredible Cotton Chair",
      "color": "white",
      "department": "Grocery",
      "price": "262.00",
      "adjective": "Fantastic",
      "material": "Granite",
      "product": "Shirt"
    },
    {
      "id": 30,
      "name": "Tasty Granite Ball",
      "color": "grey",
      "department": "Industrial",
      "price": "261.00",
      "adjective": "Generic",
      "material": "Rubber",
      "product": "Cheese"
    },
    {
      "id": 31,
      "name": "Sleek Frozen Car",
      "color": "salmon",
      "department": "Shoes",
      "price": "949.00",
      "adjective": "Fantastic",
      "material": "Rubber",
      "product": "Keyboard"
    },
    {
      "id": 32,
      "name": "Intelligent Rubber Salad",
      "color": "fuchsia",
      "department": "Automotive",
      "price": "729.00",
      "adjective": "Ergonomic",
      "material": "Concrete",
      "product": "Keyboard"
    },
    {
      "id": 33,
      "name": "Refined Concrete Towels",
      "color": "mint green",
      "department": "Automotive",
      "price": "293.00",
      "adjective": "Unbranded",
      "material": "Metal",
      "product": "Chair"
    },
    {
      "id": 34,
      "name": "Tasty Steel Salad",
      "color": "gold",
      "department": "Toys",
      "price": "735.00",
      "adjective": "Unbranded",
      "material": "Rubber",
      "product": "Bacon"
    },
    {
      "id": 35,
      "name": "Unbranded Steel Sausages",
      "color": "ivory",
      "department": "Automotive",
      "price": "294.00",
      "adjective": "Fantastic",
      "material": "Cotton",
      "product": "Tuna"
    },
    {
      "id": 36,
      "name": "Rustic Granite Hat",
      "color": "plum",
      "department": "Movies",
      "price": "761.00",
      "adjective": "Refined",
      "material": "Frozen",
      "product": "Chips"
    },
    {
      "id": 37,
      "name": "Rustic Steel Chicken",
      "color": "indigo",
      "department": "Tools",
      "price": "457.00",
      "adjective": "Licensed",
      "material": "Cotton",
      "product": "Mouse"
    },
    {
      "id": 38,
      "name": "Small Steel Keyboard",
      "color": "red",
      "department": "Tools",
      "price": "717.00",
      "adjective": "Unbranded",
      "material": "Fresh",
      "product": "Chair"
    },
    {
      "id": 39,
      "name": "Refined Soft Cheese",
      "color": "magenta",
      "department": "Home",
      "price": "68.00",
      "adjective": "Licensed",
      "material": "Soft",
      "product": "Pants"
    },
    {
      "id": 40,
      "name": "Handmade Soft Shoes",
      "color": "turquoise",
      "department": "Garden",
      "price": "60.00",
      "adjective": "Licensed",
      "material": "Frozen",
      "product": "Tuna"
    },
    {
      "id": 41,
      "name": "Handcrafted Wooden Computer",
      "color": "salmon",
      "department": "Clothing",
      "price": "107.00",
      "adjective": "Refined",
      "material": "Rubber",
      "product": "Mouse"
    },
    {
      "id": 42,
      "name": "Incredible Plastic Soap",
      "color": "cyan",
      "department": "Grocery",
      "price": "755.00",
      "adjective": "Rustic",
      "material": "Plastic",
      "product": "Chicken"
    },
    {
      "id": 43,
      "name": "Gorgeous Granite Shirt",
      "color": "turquoise",
      "department": "Automotive",
      "price": "467.00",
      "adjective": "Tasty",
      "material": "Soft",
      "product": "Car"
    },
    {
      "id": 44,
      "name": "Practical Fresh Table",
      "color": "lavender",
      "department": "Home",
      "price": "81.00",
      "adjective": "Rustic",
      "material": "Frozen",
      "product": "Shirt"
    },
    {
      "id": 45,
      "name": "Rustic Frozen Keyboard",
      "color": "red",
      "department": "Health",
      "price": "729.00",
      "adjective": "Licensed",
      "material": "Cotton",
      "product": "Tuna"
    },
    {
      "id": 46,
      "name": "Generic Soft Shoes",
      "color": "gold",
      "department": "Clothing",
      "price": "951.00",
      "adjective": "Intelligent",
      "material": "Concrete",
      "product": "Table"
    },
    {
      "id": 47,
      "name": "Awesome Granite Towels",
      "color": "azure",
      "department": "Sports",
      "price": "517.00",
      "adjective": "Gorgeous",
      "material": "Concrete",
      "product": "Tuna"
    },
    {
      "id": 48,
      "name": "Awesome Cotton Computer",
      "color": "magenta",
      "department": "Shoes",
      "price": "179.00",
      "adjective": "Rustic",
      "material": "Wooden",
      "product": "Pants"
    },
    {
      "id": 49,
      "name": "Handmade Wooden Computer",
      "color": "white",
      "department": "Garden",
      "price": "828.00",
      "adjective": "Tasty",
      "material": "Granite",
      "product": "Keyboard"
    },
    {
      "id": 50,
      "name": "Fantastic Frozen Mouse",
      "color": "blue",
      "department": "Movies",
      "price": "674.00",
      "adjective": "Incredible",
      "material": "Frozen",
      "product": "Pizza"
    },
    {
      "id": 51,
      "name": "Unbranded Soft Pizza",
      "color": "gold",
      "department": "Garden",
      "price": "561.00",
      "adjective": "Handmade",
      "material": "Fresh",
      "product": "Car"
    },
    {
      "id": 52,
      "name": "Small Steel Chicken",
      "color": "indigo",
      "department": "Jewelery",
      "price": "237.00",
      "adjective": "Fantastic",
      "material": "Wooden",
      "product": "Hat"
    },
    {
      "id": 53,
      "name": "Sleek Plastic Sausages",
      "color": "grey",
      "department": "Sports",
      "price": "814.00",
      "adjective": "Generic",
      "material": "Granite",
      "product": "Shoes"
    },
    {
      "id": 54,
      "name": "Practical Granite Bacon",
      "color": "lavender",
      "department": "Shoes",
      "price": "155.00",
      "adjective": "Tasty",
      "material": "Metal",
      "product": "Salad"
    },
    {
      "id": 55,
      "name": "Licensed Metal Car",
      "color": "violet",
      "department": "Toys",
      "price": "337.00",
      "adjective": "Incredible",
      "material": "Cotton",
      "product": "Car"
    },
    {
      "id": 56,
      "name": "Intelligent Cotton Bike",
      "color": "yellow",
      "department": "Automotive",
      "price": "416.00",
      "adjective": "Small",
      "material": "Metal",
      "product": "Tuna"
    },
    {
      "id": 57,
      "name": "Sleek Plastic Fish",
      "color": "olive",
      "department": "Books",
      "price": "262.00",
      "adjective": "Unbranded",
      "material": "Frozen",
      "product": "Tuna"
    },
    {
      "id": 58,
      "name": "Licensed Plastic Pants",
      "color": "teal",
      "department": "Jewelery",
      "price": "469.00",
      "adjective": "Handmade",
      "material": "Plastic",
      "product": "Chicken"
    },
    {
      "id": 59,
      "name": "Incredible Plastic Table",
      "color": "maroon",
      "department": "Garden",
      "price": "366.00",
      "adjective": "Practical",
      "material": "Plastic",
      "product": "Cheese"
    },
    {
      "id": 60,
      "name": "Handcrafted Wooden Shoes",
      "color": "blue",
      "department": "Grocery",
      "price": "521.00",
      "adjective": "Handmade",
      "material": "Soft",
      "product": "Bacon"
    },
    {
      "id": 61,
      "name": "Unbranded Rubber Ball",
      "color": "grey",
      "department": "Automotive",
      "price": "590.00",
      "adjective": "Rustic",
      "material": "Steel",
      "product": "Sausages"
    },
    {
      "id": 62,
      "name": "Rustic Granite Tuna",
      "color": "salmon",
      "department": "Games",
      "price": "670.00",
      "adjective": "Generic",
      "material": "Fresh",
      "product": "Bacon"
    },
    {
      "id": 63,
      "name": "Ergonomic Soft Cheese",
      "color": "indigo",
      "department": "Garden",
      "price": "180.00",
      "adjective": "Incredible",
      "material": "Steel",
      "product": "Car"
    },
    {
      "id": 64,
      "name": "Ergonomic Cotton Tuna",
      "color": "blue",
      "department": "Tools",
      "price": "219.00",
      "adjective": "Refined",
      "material": "Metal",
      "product": "Tuna"
    },
    {
      "id": 65,
      "name": "Unbranded Frozen Gloves",
      "color": "orchid",
      "department": "Games",
      "price": "137.00",
      "adjective": "Gorgeous",
      "material": "Granite",
      "product": "Salad"
    },
    {
      "id": 66,
      "name": "Intelligent Rubber Computer",
      "color": "maroon",
      "department": "Automotive",
      "price": "11.00",
      "adjective": "Generic",
      "material": "Rubber",
      "product": "Car"
    },
    {
      "id": 67,
      "name": "Rustic Plastic Soap",
      "color": "green",
      "department": "Computers",
      "price": "779.00",
      "adjective": "Intelligent",
      "material": "Metal",
      "product": "Bike"
    },
    {
      "id": 68,
      "name": "Unbranded Granite Gloves",
      "color": "orange",
      "department": "Games",
      "price": "662.00",
      "adjective": "Handcrafted",
      "material": "Granite",
      "product": "Bacon"
    },
    {
      "id": 69,
      "name": "Refined Steel Keyboard",
      "color": "olive",
      "department": "Kids",
      "price": "749.00",
      "adjective": "Small",
      "material": "Plastic",
      "product": "Fish"
    },
    {
      "id": 70,
      "name": "Generic Soft Hat",
      "color": "pink",
      "department": "Clothing",
      "price": "980.00",
      "adjective": "Intelligent",
      "material": "Wooden",
      "product": "Keyboard"
    },
    {
      "id": 71,
      "name": "Awesome Soft Computer",
      "color": "violet",
      "department": "Home",
      "price": "198.00",
      "adjective": "Small",
      "material": "Fresh",
      "product": "Chips"
    },
    {
      "id": 72,
      "name": "Fantastic Concrete Shoes",
      "color": "red",
      "department": "Tools",
      "price": "643.00",
      "adjective": "Generic",
      "material": "Plastic",
      "product": "Pizza"
    },
    {
      "id": 73,
      "name": "Fantastic Metal Ball",
      "color": "violet",
      "department": "Tools",
      "price": "402.00",
      "adjective": "Handmade",
      "material": "Granite",
      "product": "Tuna"
    },
    {
      "id": 74,
      "name": "Gorgeous Frozen Ball",
      "color": "lime",
      "department": "Jewelery",
      "price": "759.00",
      "adjective": "Practical",
      "material": "Cotton",
      "product": "Pants"
    },
    {
      "id": 75,
      "name": "Awesome Granite Shirt",
      "color": "azure",
      "department": "Sports",
      "price": "723.00",
      "adjective": "Rustic",
      "material": "Soft",
      "product": "Chair"
    },
    {
      "id": 76,
      "name": "Intelligent Soft Shoes",
      "color": "turquoise",
      "department": "Automotive",
      "price": "897.00",
      "adjective": "Rustic",
      "material": "Soft",
      "product": "Salad"
    },
    {
      "id": 77,
      "name": "Handcrafted Granite Computer",
      "color": "lime",
      "department": "Tools",
      "price": "498.00",
      "adjective": "Rustic",
      "material": "Rubber",
      "product": "Gloves"
    },
    {
      "id": 78,
      "name": "Rustic Cotton Computer",
      "color": "white",
      "department": "Games",
      "price": "641.00",
      "adjective": "Rustic",
      "material": "Steel",
      "product": "Salad"
    },
    {
      "id": 79,
      "name": "Handcrafted Rubber Car",
      "color": "maroon",
      "department": "Computers",
      "price": "531.00",
      "adjective": "Intelligent",
      "material": "Steel",
      "product": "Tuna"
    },
    {
      "id": 80,
      "name": "Small Granite Hat",
      "color": "black",
      "department": "Music",
      "price": "553.00",
      "adjective": "Gorgeous",
      "material": "Concrete",
      "product": "Tuna"
    },
    {
      "id": 81,
      "name": "Gorgeous Soft Soap",
      "color": "fuchsia",
      "department": "Tools",
      "price": "818.00",
      "adjective": "Handcrafted",
      "material": "Fresh",
      "product": "Pizza"
    },
    {
      "id": 82,
      "name": "Gorgeous Granite Shoes",
      "color": "teal",
      "department": "Beauty",
      "price": "128.00",
      "adjective": "Handcrafted",
      "material": "Rubber",
      "product": "Car"
    },
    {
      "id": 83,
      "name": "Fantastic Soft Cheese",
      "color": "grey",
      "department": "Tools",
      "price": "446.00",
      "adjective": "Handmade",
      "material": "Wooden",
      "product": "Chicken"
    },
    {
      "id": 84,
      "name": "Fantastic Granite Soap",
      "color": "teal",
      "department": "Computers",
      "price": "602.00",
      "adjective": "Intelligent",
      "material": "Plastic",
      "product": "Mouse"
    },
    {
      "id": 85,
      "name": "Sleek Wooden Car",
      "color": "pink",
      "department": "Shoes",
      "price": "947.00",
      "adjective": "Generic",
      "material": "Plastic",
      "product": "Shirt"
    },
    {
      "id": 86,
      "name": "Generic Frozen Hat",
      "color": "yellow",
      "department": "Grocery",
      "price": "585.00",
      "adjective": "Fantastic",
      "material": "Wooden",
      "product": "Chips"
    },
    {
      "id": 87,
      "name": "Tasty Cotton Sausages",
      "color": "pink",
      "department": "Home",
      "price": "144.00",
      "adjective": "Fantastic",
      "material": "Soft",
      "product": "Chips"
    },
    {
      "id": 88,
      "name": "Handmade Rubber Chips",
      "color": "purple",
      "department": "Beauty",
      "price": "89.00",
      "adjective": "Rustic",
      "material": "Plastic",
      "product": "Sausages"
    },
    {
      "id": 89,
      "name": "Licensed Cotton Tuna",
      "color": "blue",
      "department": "Books",
      "price": "511.00",
      "adjective": "Unbranded",
      "material": "Fresh",
      "product": "Salad"
    },
    {
      "id": 90,
      "name": "Ergonomic Frozen Ball",
      "color": "violet",
      "department": "Outdoors",
      "price": "907.00",
      "adjective": "Tasty",
      "material": "Rubber",
      "product": "Chair"
    },
    {
      "id": 91,
      "name": "Gorgeous Cotton Fish",
      "color": "lime",
      "department": "Music",
      "price": "535.00",
      "adjective": "Handcrafted",
      "material": "Frozen",
      "product": "Mouse"
    },
    {
      "id": 92,
      "name": "Intelligent Granite Pizza",
      "color": "turquoise",
      "department": "Games",
      "price": "425.00",
      "adjective": "Unbranded",
      "material": "Soft",
      "product": "Gloves"
    },
    {
      "id": 93,
      "name": "Rustic Fresh Salad",
      "color": "mint green",
      "department": "Health",
      "price": "783.00",
      "adjective": "Small",
      "material": "Concrete",
      "product": "Chicken"
    },
    {
      "id": 94,
      "name": "Handmade Plastic Pizza",
      "color": "gold",
      "department": "Electronics",
      "price": "860.00",
      "adjective": "Handcrafted",
      "material": "Soft",
      "product": "Pizza"
    },
    {
      "id": 95,
      "name": "Unbranded Granite Salad",
      "color": "black",
      "department": "Jewelery",
      "price": "102.00",
      "adjective": "Awesome",
      "material": "Wooden",
      "product": "Hat"
    },
    {
      "id": 96,
      "name": "Gorgeous Rubber Table",
      "color": "black",
      "department": "Games",
      "price": "771.00",
      "adjective": "Rustic",
      "material": "Metal",
      "product": "Keyboard"
    },
    {
      "id": 97,
      "name": "Generic Rubber Towels",
      "color": "magenta",
      "department": "Home",
      "price": "255.00",
      "adjective": "Awesome",
      "material": "Rubber",
      "product": "Keyboard"
    },
    {
      "id": 98,
      "name": "Small Rubber Shoes",
      "color": "magenta",
      "department": "Outdoors",
      "price": "33.00",
      "adjective": "Handmade",
      "material": "Concrete",
      "product": "Shoes"
    },
    {
      "id": 99,
      "name": "Practical Frozen Fish",
      "color": "yellow",
      "department": "Grocery",
      "price": "338.00",
      "adjective": "Generic",
      "material": "Plastic",
      "product": "Salad"
    },
    {
      "id": 100,
      "name": "Incredible Plastic Table",
      "color": "purple",
      "department": "Kids",
      "price": "226.00",
      "adjective": "Unbranded",
      "material": "Soft",
      "product": "Soap"
    }
  ];

export default products