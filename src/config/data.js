import {

  kolkata,
  Mumbai,
  Hyderabad,
  pune,
  silliguri,
  Delhi,
  Guhawti,
  Jaipur,
} from "../assets";



export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const productData = [
  {
    id: 1,
    imageurl: kolkata,
    name: "Kolkata",
    price: "$19.99",
    description: "Some text about the product..",
  },
  {
    id: 2,
    imageurl: Mumbai,
    name: "Mumbai",
    price: "$21.99",
    description: "Some text about the product..",
  },
  {
    id: 3,
    imageurl: Hyderabad,
    name: "Hyderabad",
    price: "$99.99",
    description: "Some text about the product..",
  },
  {
    id: 4,
    imageurl: pune,
    name: "Pune",
    price: "$14.99",
    description: "Some text about the product..",
  },
  {
    id: 5,
    imageurl: silliguri,
    name: "silliguri",
    price: "$38.99",
    description: "Some text about the product..",
  },
  {
    id: 6,
    imageurl: Delhi,
    name: "Delhi",
    price: "$149.99",
    description: "Some text about the product..",
  },
  {
    id: 7,
    imageurl: Guhawti,
    name: "Guhawti",
    price: "$38.99",
    description: "Some text about the product..",
  },
  {
    id: 8,
    imageurl:Jaipur,
    name: "Jaipur",
    price: "$49.99",
    description: "Some text about the product..",
  },
];
