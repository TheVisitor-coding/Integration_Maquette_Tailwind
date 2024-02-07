function Footer() {
  return (
    <section className="w-full rounded-t-[10rem] bg-secondary h-full relative">
      <button className="bg-white p-3 rounded-xl absolute right-36 -top-4 transition-all hover:-translate-y-2">
        <img src="./images/arrow-up.png" className="w-4 h-4" />
      </button>
      <div className="flex lg:flex-row flex-col pt-16 px-12 items-center gap-10 lg:gap-0 justify-evenly">

        <div className="w-72 lg:w-96 flex flex-col gap-2 lg:items-start items-center">
          <h4 className="font-bold text-left">Hipcamp is everywhere you want to camp</h4>
          <p className="text-sm">Discover unique experiences on ranches, nature preserves, farms, vineyars and public campground across the U.S books. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, tiny houses, RV camping, galmping tents and more</p>
        </div>

        <div className="flex flex-row gap-12 flex-wrap">
          <div>
            <h4 className="font-bold">Get To Know Us</h4>
            <span className="flex flex-col text-sm mt-4">
              <a>About Us</a>
              <a>Rules & reservations Polices</a>
              <a>Accessiblity</a>
              <a>Media Center</a>
              <a>Site Map</a>
            </span>
          </div>

          <div>
            <h4 className="font-bold">Plan With Us</h4>
            <span className="flex flex-col text-sm mt-4">
              <a>Find Trip Inspiration</a>
              <a>Buold a Trip</a>
              <a>Buy a Pass</a>
              <a>Enter a lottery</a>
            </span>
          </div>

          <div>
            <h4 className="font-bold">Let Us help You</h4>
            <span className="flex flex-col text-sm mt-4">
              <a>Your Account</a>
              <a>Your Reservations</a>
              <a>Contact Us</a>
              <a>Help Center</a>
              <a>Submit Feedback</a>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-10 pb-4">
        <p>2020. All rights reserved</p>
      </div>
    </section>
  );
}

export default Footer;