import { IoIosSend } from "react-icons/io";

function Mail() {
  return (
    <>
      <section className="w-full flex justify-center mt-32 mb-32">
        <div className="bg-mail bg-no-repeat bg-center bg-cover lg:gap-0 gap-4 w-4/6 lg:h-72 h-full lg:py-0 py-10 flex flex-col-reverse items-center lg:flex-row lg:justify-between px-6 lg:px-32">
          <div className="flex flex-col justify-center gap-4">
            <h3 className="text-3xl font-bold text-center lg:text-left font-archivo-bold leading-8">Let's Stay in Touch</h3>
            <p className="text-[11px] font-medium lg:max-w-96 lg:text-left text-center">Get Travel planning ideas, helpful tips, and stories from our visitors delivered right to your inbox</p>
            <div className=" relative">
              <input type="text" placeholder="Email Address" className="w-full py-3 rounded-lg placeholder:text-[10px] placeholder:pl-10" />
              <img src="./images/letter.png" className="w-4 h-3 absolute left-4 top-5" />
              <button className="bg-primary text-white p-[6px] rounded-lg absolute right-3 top-2 shadow-lg shadow-primary">
                <IoIosSend className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <img src="./images/camp.png " alt="camp" className="md:w-64 md:h-52 w-56 h-42" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Mail;