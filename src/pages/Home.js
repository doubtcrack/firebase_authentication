import React from "react";
import app from "../utils/base.js";

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="py-6 px-3 text-right">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-md uppercase font-bold px-8 py-2 rounded-md sm:mr-2 mb-1 ease-linear transition-all duration-150"
            onClick={() => app.auth().signOut()}
          >
            Log out
          </button>
        </div>
        <div className="w-full flex justify-center">
          <img
            src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1664642479/992490_sskqn3.png"
            alt="userProfile"
            className="rounded-full h-40 w-40"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
