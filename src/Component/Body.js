const Body = () => {
  return (
    <div className="bg-white m-auto w-9/12  ">
      <div className="flex justify-between items-center ">
        <img
          className="w-96"
          src="https://i.ibb.co/5BCcDYB/Remote2.png"
          alt="remote pic"
        />
        <div className="text-right font-bold">
          <h1 className=" text-5xl ">Download Now</h1>
          <p className=" text-4xl ">Lorem Ipsum</p>
          <button className="hover:bg-red-600 border-2 px-6 py-2 font-medium rounded-xl bg-red-700 text-white my-8 ">
            Download Now
          </button>
        </div>
      </div>

      <div className="grid place-items-center my-40">
        <img className="w-96 m-8" src="https://i.ibb.co/2M7rtLk/Remote1.png" />
        <p className="font-medium text-6xl ">Lorem Ipsum Yojo</p>
      </div>
    </div>
  );
};

export default Body;
