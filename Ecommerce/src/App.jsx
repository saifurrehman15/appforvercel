import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const cards = [
    {
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description: `"Slim-fitting style, contrast raglan long sleeve, three-button henley placket.`,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: `great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.`,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description: `great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.`,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      price:  64,
      description: `USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted.`,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
  ];

  return (
    <div>
      {cards.map((elem, index) => (
        <div id="row">
          <div id="codepen" key={index}>
            <div class="w-[300px] shadow-lg rounded-lg bg-neutral-50 p-4">
              <img
                src={elem.image}
                alt="Product Image"
                class="w-full h-[200px] object-cover rounded-md"
              />
              <div class="mt-4">
                <h2 class="font-title text-lg font-semibold">{elem.title}</h2>
                <p class="mt-2 text-sm text-neutral-700">{elem.description}</p>
              </div>
              <div class="mt-4 flex justify-between items-center">
                <span class="text-lg font-semibold">${elem.price}</span>
                <button class="bg-primary rounded-md text-white py-2 px-4">
                  Add to Cart
                </button>
              </div>
              <div class="mt-4 flex justify-between items-center">
                <button class="bg-primary rounded-full text-white w-[40px] h-[40px] flex justify-center items-center">
                  <span class="material-symbols-outlined">favorite</span>
                </button>
                <button class="bg-primary rounded-full text-white w-[40px] h-[40px] flex justify-center items-center">
                  <span class="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
