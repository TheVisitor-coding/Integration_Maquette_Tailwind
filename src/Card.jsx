
function Card() {
  return (
    <>
      <section className='flex flex-col items-center gap-10 pb-32'>
        <div className='flex flex-row flex-wrap justify-center gap-6 items-center text-center -translate-y-32 md:-translate-y-16'>
          <div className='w-64 p-10 rounded-xl flex flex-col items-center bg-white gap-4'>
            <img src='./images/bonfire.png' className="w-14 h-14" />
            <span className="flex flex-col gap-2">
              <h4 className="font-bold">Camping & Day Use</h4>
              <p className="text-sm">Return to your favorite spot or discover a new one that's right for you</p>
            </span>
          </div>

          <div className='w-64 p-10 rounded-xl flex flex-col items-center bg-white gap-4'>
            <img src='./images/tickets.png' className="w-14 h-14" />
            <span className="flex flex-col gap-2">
              <h4 className="font-bold">Camping & Day Use</h4>
              <p className="text-sm">Return to your favorite spot or discover a new one that's right for you</p>
            </span>
          </div>

          <div className='w-64 p-10 rounded-xl flex flex-col items-center bg-white gap-4'>
            <img src='./images/filled_outline.png' className="w-14 h-14" />
            <span className="flex flex-col gap-2">
              <h4 className="font-bold">Camping & Day Use</h4>
              <p className="text-sm">Return to your favorite spot or discover a new one that's right for you</p>
            </span>
          </div>

          <div className='w-64 p-10 rounded-xl flex flex-col items-center bg-white gap-4'>
            <img src='./images/fishing.png' className="w-14 h-14" />
            <span className="flex flex-col gap-2">
              <h4 className="font-bold">Camping & Day Use</h4>
              <p className="text-sm">Return to your favorite spot or discover a new one that's right for you</p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;