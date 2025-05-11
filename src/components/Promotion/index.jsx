/* const Promotion = ()=>{
    return <script>
        <h1>Hello</h1>
    </script>
}

export default Promotion*/

import React from "react";
import trendingCollections from "../../data/levis.json";
import bestSellers from "../../data/bestsellers.json";
import backpacks from "../../data/backpackss.json";

const isANZ = false;

const Promotion = () => {
  return (
    <div className="w-screen">
      <div className="bg-blue-100 text-center py-1 px-2">
        <p className="text-[10px] md:text-xs uppercase tracking-wide text-gray-500 mb-1">
          10-15 AUG
        </p>
        <p className="text-xs uppercase tracking-widest text-gray-700">
          AWESOME AUGUST
        </p>
        <h2 className="text-2xl font-bold mt-2">FREE SHIPPING SITEWIDE</h2>
        <p className="mt-1 text-sm text-gray-600">No min. spend required</p>
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 mt-6">
  <button className="w-40 h-10 border border-black text-black text-sm font-semibold bg-blue-100 transition hover:bg-gray-100">
    SHOP MEN
  </button>
  <button className="w-40 h-10 border border-black text-black text-sm font-semibold transition hover:bg-gray-100">
    SHOP WOMEN
  </button>
  <button className="w-40 h-10 border border-black text-black text-sm font-semibold transition hover:bg-gray-100">
    SHOP ALL
  </button>
</div>

        <p className="text-xs text-gray-500 mt-4">
          *Valid on all orders. Discount auto-applied at checkout.
        </p>
      </div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('/Background.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative text-center px-4">
          {/* Levi's Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="./download.png" // Replace with actual Levi's logo
              alt="Levi's Logo"
              className="h-10"
            />
          </div>

          {/* Hero Text */}
          <h1 className="text-3xl md:text-5xl font-bold">HERE’S TO THE ORIGINAL</h1>
          <p className="text-sm md:text-lg mt-2 max-w-xl mx-auto">
            This 501® Day, celebrate 150 years of the Levi’s® 501®. The Greatest Story Ever Worn.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 mt-6">
  <button className="w-48 h-14 bg-white text-black text-xs md:text-sm font-semibold border border-white hover:bg-gray-200 transition">
    SHOP WOMEN'S 501®
  </button>
  <button className="w-48 h-14 bg-white text-black text-xs md:text-sm font-semibold border border-white hover:bg-gray-200 transition">
    SHOP MEN'S 501®
  </button>
  <button className="w-48 h-14 bg-white text-black text-xs md:text-sm font-semibold border border-white hover:bg-gray-200 transition">
    EXPLORE 501® STORIES
  </button>
</div>

        </div>
      </div>

      {/* Trending Collections */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-6">TRENDING COLLECTIONS</h2>
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-4">
          <button className="border w-40 h-10border-gray-800 px-4 py-2 text-sm hover:bg-gray-100 transition">
            HOODIES & SWEATSHIRTS
          </button>
          <button className="border w-40 h-10border-gray-800 px-4 py-2 text-sm hover:bg-gray-100 transition">
            JEANS
          </button>
          <button className="border w-40 h-10 border-gray-800 px-4 py-2 text-sm hover:bg-gray-100 transition">
            BACKPACKS
          </button>
          <button className="border w-40 h-20 border-gray-800 px-4 py-2 text-sm hover:bg-gray-100 transition">
            TRUCKERS & SHERPAS
          </button>
        </div>
      </div>
      <div className="text-center py-12 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {trendingCollections.map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-[386x] h-[300px] object-cover"
              />
              <p className="mt-2 font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="text-center py-12 md:px-20">
        <h2 className="text-2xl font-bold mb-6">BEST SELLERS</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-6 px-4">
            {bestSellers.map((product, index) => (
              <div key={index} className="min-w-[150px] text-left">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[150px] h-[200px] object-cover"
                />
                <p className="text-sm mt-2 truncate">{product.name}</p>
                <p className="text-sm font-semibold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Arrows (for future carousel functionality) */}
        <div className="flex justify-center mt-4">
          <button className="mx-2 text-xl font-bold hover:opacity-70">←</button>
          <button className="mx-2 text-xl font-bold hover:opacity-70">→</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:px-20">
        <div className="flex flex-col justify-center">
          <img
            src="/Image16.png" // Replace with actual image
            alt="Plant-Based Jeans"
            className="h-10 w-50 justify-center"
          />
          <h1 className="text-3xl font-bold mt-2">LIVE NOW: <br />PLANT-BASED 501® ORIGINAL JEANS</h1>
          <p className="text-gray-600 mt-4">
            Our plant-based 501® Originals are made from 97% bio-based content. These jeans are made with
            organically grown cotton, plant-based indigo dye, ink made from wood waste, and even a bio-based
            back patch that contains no petrochemicals or plastics.
          </p>
          <p className="text-gray-600 mt-2">Available online and in-store only at Levi’s® ION Orchard.</p>
          <div className="mt-4 flex flex-col md:flex-row md:justify-center items-center gap-4">
            <button className="bg-black text-white px-6 py-2 font-semibold">SHOP NOW</button>
            <button className=" w-40 h-18 border border-black px-6 py-2 font-semibold">STORE LOCATOR</button>
          </div>
        </div>
        <div>
          <img
            src="/Image12.png" // Replace with actual image
            alt="Plant-Based Jeans"
            className="w-[550px] h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Backpacks Section (Hidden for ANZ) */}
      {!isANZ && (
        <div className="bg-[#D17B7B80] py-12">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-700">BACKPACKS</h2>
            <button className="mt-2 px-4 py-2 text-sm border border-black text-black hover:bg-black hover:text-white transition">
              SHOP NOW
            </button>
          </div>

          <div className="flex justify-center gap-6 mt-6 px-4 overflow-x-auto">
            {backpacks.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={item.name}
                className="w-[150px] h-[200px] object-cover"
              />
            ))}
          </div>
        </div>
      )}

      <div className="text-center py-12 md:px-20">
        <h2 className="text-2xl font-bold mb-6">BEST SELLERS</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-6 px-4">
            {bestSellers.map((product, index) => (
              <div key={index} className="min-w-[150px] text-left">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[150px] h-[200px] object-cover"
                />
                <p className="text-sm mt-2 truncate">{product.name}</p>
                <p className="text-sm font-semibold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Arrows (for future carousel functionality) */}
        <div className="flex justify-center mt-4">
          <button className="mx-2 text-xl font-bold hover:opacity-70">←</button>
          <button className="mx-2 text-xl font-bold hover:opacity-70">→</button>
        </div>
      </div>
      <div className="bg-beige p-6">
        <h2 className="text-xl font-bold mb-6 text-center">NEED TO SEE MORE?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 justify-items-center">
          {/* Men */}
          <div className="text-center">
            <img
              src="/Image13.png"
              alt="Men"
              className="w-full max-w-[300px] h-auto object-cover sm:w-[280px] sm:h-[200px] md:w-[340px] md:h-[372px]"
            />
            <p className="mt-2 font-bold">
              <a href="/shop/men" className="underline">Shop</a> / Men
            </p>
          </div>

          {/* Women */}
          <div className="text-center">
            <img
              src="/Image14.png"
              alt="Women"
              className="w-full max-w-[300px] h-auto object-cover sm:w-[280px] sm:h-[200px] md:w-[340px] md:h-[372px]"
            />
            <p className="mt-2 font-bold">
              <a href="/shop/women" className="underline">Shop</a> / Women
            </p>
          </div>

          {/* Accessories */}
          <div className="text-center">
            <img
              src="/Image15.png"
              alt="Accessories"
              className="w-full max-w-[300px] h-auto object-cover sm:w-[280px] sm:h-[200px] md:w-[340px] md:h-[372px]"
            />
            <p className="mt-2 font-bold">
              <a href="/shop/accessories" className="underline">Shop</a> / Accessories
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Promotion;
