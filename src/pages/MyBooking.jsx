import React, { useEffect, useState } from "react";
import ShowBox from "../components/ShowBox";
import { getDoctor, removeCart } from "../utils";
import { Link } from "react-router";
import Chart from "../components/Chart";

const MyBooking = () => {
  const [displayBox, setDisplayBox] = useState([]);

  useEffect(() => {
    setDisplayBox(getDoctor());
  }, []);

  const handleDelete = (id) => {
    removeCart(id);
    setDisplayBox(getDoctor());
  };
  console.log(displayBox);

  return (
    <div className="pt-16">
      <div className={`mb-7 ${displayBox.length == 0 ? "hidden" : ""}`}>
        <Chart
          displayBox={displayBox}
            
        />
      </div>
      <div
        className={`flex flex-col items-center justify-center mt-16 ${
          displayBox.length == 0 ? "" : "hidden"
        }`}
      >
        <p className="text-3xl font-bold text-center">
          You have not booked any appointment yet
        </p>
        <p className="text-[12px] text-[#00000087] text-center mt-4 px-2">
          Our platform connects you with verified and experienced doctors across
          various specialties --all at your convenience
        </p>
        <Link to="/">
          <button className="btn bg-[#176AE5] text-white rounded-xl mt-6 ">
            View all doctors
          </button>
        </Link>
      </div>
      <div className={displayBox.length == 0 ? "hidden" : ""}>
        <p className="text-center text-3xl font-bold mt">
          My Total Appointment
        </p>
        <p className="text-center text-[12px] text-[#0000007e] mt-3">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
        <div className="md:px-20 px-3">
          {displayBox.map((doctor) => (
            <ShowBox
              handleDelete={handleDelete}
              key={doctor.id}
              doctor={doctor}
            ></ShowBox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
