import Activities from "./Activities";
import "./App.css";
import Card from "./Card";
import Footer from "./Footer";
import Mail from "./Mail";
import { FiMenu } from "react-icons/fi";

function App() {
  return (
    <>
      <header className="bg-hero bg-cover h-dvh w-full rounded-b-[12rem] bg-center flex flex-col gap-12 sm:gap-32 px-10 xl:px-32 pt-10">
        {/* Menu Classique */}
        <div className="lg:flex flex-row hidden justify-between">
          <div className="flex flex-row items-center gap-10 ">
            <img
              src={"../public/images/logo.png"}
              alt="logo"
              className="w-10 h-10"
            />
            <a className="text-gray-300 hover:text-white cursor-pointer relative group">
              Home
              <span className="absolute h-0.5 w-12 bg-primary bottom-1 left-1 transform scale-x-0 rotate-45 -translate-y-6 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a className="text-gray-300 hover:text-white cursor-pointer relative group">
              Destination
              <span className="absolute h-0.5 w-12 bg-primary bottom-1 left-1/4 transform scale-x-0 rotate-45 -translate-y-6 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a className="text-gray-300 hover:text-white cursor-pointer relative group">
              Near Me
              <span className="absolute h-0.5 w-12 bg-primary bottom-1 left-1/4 transform scale-x-0 rotate-45 -translate-y-6 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a className="text-gray-300 hover:text-white cursor-pointer relative group">
              Events
              <span className="absolute h-0.5 w-12 bg-primary bottom-1 left-1 transform scale-x-0 rotate-45 -translate-y-6 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a className="text-gray-300 hover:text-white cursor-pointer relative group">
              Blog
              <span className="absolute h-0.5 w-12 bg-primary bottom-1 left-0 transform scale-x-0 rotate-45 -translate-y-6 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a className="text-gray-300 hover:text-white cursor-pointer relative group">
              Gallery
              <span className="absolute h-0.5 w-12 bg-primary bottom-1 left-2 transform scale-x-0 rotate-45 -translate-y-6 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a className="text-gray-300 hover:text-white cursor-pointer relative group">
              About
              <span className="absolute h-0.5 w-12 bg-primary bottom-1 left-2 transform scale-x-0 rotate-45 -translate-y-6 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a className="text-gray-300 hover:text-white cursor-pointer relative group">
              Contact Us
              <span className="absolute h-0.5 w-12 bg-primary bottom-1 left-1/4 transform scale-x-0 rotate-45 -translate-y-6 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </div>
          <div className="flex flex-row items-center gap-10 text-white">
            <button className="p-1 hover:-translate-y-2 transition-transform">
              Sign up
            </button>
            <button className="border-2 p-2 px-6 rounded-full hover:-translate-y-2 transition-transform">
              Sign In
            </button>
          </div>
        </div>

        {/* Menu Burger */}
        <div className="lg:hidden flex flex-row justify-between items-center">
          <img src={"./images/logo.png"} alt="logo" className="w-12 h-12" />
          <button className="bg-white p-2 rounded-2xl">
            <FiMenu className="w-7 h-7 " style={{ color: "#e76f51" }} />
          </button>
        </div>

        <div className="flex flex-col items-center md:gap-12 text-white">
          <h1 className=" text-[3.4rem] max-w-sm text-center leading-tight font-bold">
            Find Yourself Outside.
          </h1>
          <span className="flex flex-col items-center gap-5">
            <p className="text-grey-100 text-center max-w-lg">
              Book unique camping experiences on over 300,000 campsites, cabins,
              RV parks, public parks and more
            </p>
            <button className=" bg-primary py-2 px-10 rounded-3xl">
              Discover
            </button>
          </span>
        </div>
      </header>

      <Card />
      <Activities />
      <Mail />
      <Footer />
    </>
  );
}

export default App;
