import Header from "../../components/Header";
import carsLogo from "../../data/logos";

export default function HomePage() {
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
        <p className="flex  text-white text-4xl font-bold">Popular Brands</p>

        <div className="flex flex-row gap-4">
          {carsLogo.map((item, index) => (
            <button
              key={index}
              className="flex flex-col items-center w-4/12 h-full cursor-pointer bg-white rounded-2xl hover:bg-gray-300"
            >
              <img src={item.logoPath} className="w-5/12 h-4/5 pt-2" />
              <p>{item.name}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full h-full px-4 py-10">
        <h1 className="text-green-400 font-bold text-3xl">
          Evricar: Where Luxury Meets Performance
        </h1>
        <p className=" text-xl pt-3">
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
