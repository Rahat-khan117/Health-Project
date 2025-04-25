import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="px-16 h-[100vh] w-[100vw] bg-[#EFEFEF] pt-16">
      <div className="flex justify-center items-center w-full">
        <div className="h-[250px] flex items-center justify-center bg-white rounded-3xl w-[80%]">
          <div>
            <p className="text-3xl font-bold text-center">No Doctor Found !!</p>
            <p className="text-[#0000007f] text-center mt-3">
              No doctor Found in this id.
            </p>
            <div className="flex justify-center mt-3">
              <Link to="/">
                <button className="btn bg-[#176AE5] text-white rounded-xl ">
                  View all doctors
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
