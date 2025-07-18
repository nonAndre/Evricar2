import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import carsLogo from "../../data/logos";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-blue-900">
      <Header />
      <div className="flex flex-col w-full h-5/6 justify-between relative pb-6">
        <img
          src="https://static-x.jamesedition.com/assets/category_banner/cars_desktop-af2ea25aa8e069da3d3411834fa7b06a679a566f81461a9baf7a6e2b40739024.jpg"
          className="flex w-full h-auto"
        />

        <div className="flex flex-col w-full h-2/5  absolute inset-0 pt-10  gap-2 px-4">
          <p className="flex font-bold text-5xl text-white max-sm:text-3xl">
            Evri-day
          </p>
          <p className="flex font-bold text-5xl text-white  max-sm:text-3xl">
            Evri-where
          </p>
          <p className="flex font-bold text-5xl text-white  max-sm:text-3xl">
            Evricar
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full bg-blue-900 gap-4 px-4 py-5">
        <p className="text-white text-2xl md:text-4xl font-bold">
          Popular Brands
        </p>

        <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {carsLogo.map((item, index) => (
            <button
              key={index}
              className="flex-shrink-0 flex flex-col items-center w-36 sm:w-40 md:w-44 lg:w-48 xl:w-56 bg-white rounded-2xl hover:bg-gray-300 transition duration-200"
              onClick={() =>
                navigate("/catalog", { state: { name: item.name } })
              }
            >
              <img
                src={item.logoPath}
                alt={item.name}
                className="w-20 h-20 object-contain mt-3"
              />
              <p className="text-sm sm:text-base font-medium py-2">
                {item.name}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full h-full px-4 py-10 bg-blue-900">
        <h1 className="text-green-400 font-bold text-3xl">
          Evricar: Where Luxury Meets Performance
        </h1>
        <p className=" text-xl pt-3 text-white">
          At Evricar, we don’t just sell cars — we deliver automotive
          excellence. As a premier luxury car dealer, we specialize in high-end
          vehicles that combine cutting-edge technology with timeless design.
          From the iconic elegance of Mercedes-Benz to the raw power of
          Lamborghini, our curated collection features the most prestigious
          brands in the world. Our mission is to redefine the driving experience
          for those who demand more. Whether you're seeking refinement, speed,
          or innovation, Evricar offers a vehicle that aligns with your
          lifestyle. Every car in our showroom is hand-selected for its
          condition, pedigree, and performance. With personalized concierge
          service, bespoke financing options, and nationwide delivery, Evricar
          ensures a seamless, first-class experience from inquiry to ignition.
          Step into a world where luxury isn't just a feature — it
        </p>
      </div>
    </div>
  );
}
