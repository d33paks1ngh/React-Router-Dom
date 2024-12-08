const Header = () => {
  return (
    <div className="w-full sticky shadow top-0 mb-20 ">
      <div className=" flex justify-between items-start w-10/12 m-auto bg-white border-b-slate-400 px-4 py-4">
        <img
          className="w-32 rounded-xl "
          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
        />
        <div>
          <ul className="flex  gap-6 font-medium text-orange-400 ">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">About</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
            <li className="hover:text-red-500 cursor-pointer">User</li>
            <li className="hover:text-red-500 cursor-pointer">GitHub</li>
          </ul>
        </div>
        <div className=" flex gap-6 items-center ">
          <button className="border-2 font-medium p-2 border-transparent hover:bg-slate-50 rounded-xl overflow-hidden">
            Log in
          </button>
          <button className="hover:bg-red-800 border-2 font-medium rounded-xl bg-red-700 text-white px-4 py-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
