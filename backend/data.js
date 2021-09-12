import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Sadi",
      email: "sadiuchiha@gmail.com",
      password: bcrypt.hashSync("qwerty", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "John@gmail.com",
      password: bcrypt.hashSync("qwerty", 8),
      isAdmin: false,
    },
  ],

  products: [
    {

      name: "Nokia Laptop",
      category: "Electronics",
      image: "/images/product-1.jpg",
      price: 450,
      brand: "Nokia",
      rating: 5,
      numReviews: 10,
      description: "High Quality product",
      countInStock: 10,
    },

    {
      name: "HP Laptop",
      category: "Electronics",
      image: "/images/product-2.jpg",
      price: 400,
      brand: "HP",
      rating: 3.0,
      numReviews: 1,
      description: "High Quality product from Hp",
      countInStock: 5,
    },

    {
      name: "Mac Air Laptop",
      category: "Electronics",
      image: "/images/product-3.jpg",
      price: 780,
      brand: "Apple",
      rating: 4.2,
      numReviews: 5,
      description: "Top Quality product from Apple",
      countInStock: 2,
    },

    {
      name: "Zero Laptop",
      category: "Electronics",
      image: "/images/product-4.jpg",
      price: 550,
      brand: "Zero",
      rating: 4.7,
      numReviews: 15,
      description: "High Quality product",
      countInStock: 0,
    },

    {
      name: "Asus Laptop",
      category: "Electronics",
      image: "/images/product-5.jpg",
      price: 470,
      brand: "Nokia",
      rating: 3.5,
      numReviews: 10,
      description: "High Quality product",
      countInStock: 20,
    },
  ],
};

export default data;
