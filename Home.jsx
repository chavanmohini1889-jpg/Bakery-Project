import React from 'react'
import 'flowbite';
function Home() {
    const slides = [
  {
    id: 1,
     img:"https://png.pngtree.com/background/20250130/original/pngtree-assorted-bakery-products-and-grains-on-pastel-background-fresh-picture-image_16238986.jpg",
    alt: "Slide 1",
  },
  {
    id: 2,
    img:"https://png.pngtree.com/background/20250130/original/pngtree-assorted-bakery-products-and-grains-on-pastel-background-fresh-picture-image_16238986.jpg",
    alt: "Slide 2",
  },
  {
    id: 3,
    alt: "Slide 3",
    img:"https://c8.alamy.com/comp/2X12X2R/bread-background-vintage-bakery-banner-with-bagels-croissants-baguette-traditional-food-assortment-crusty-baked-nutrition-concept-vector-2X12X2R.jpg",

  },
];
  return (
    <>
         <div id="default-carousel" className="relative w-full mt-15" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-48 overflow-hidden rounded-lg sm:h-64 md:h-96 lg:h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${index === 0 ? "block" : "hidden"} w-full h-full duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
    </>
  )
}

export default Home