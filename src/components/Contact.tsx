import React from "react";
import AppConstant from "@/app";

export default function Contact() {
  return <ChurchFlyer />;
}

function ChurchFlyer() {
  return (
    <div
      className="flex items-center bg-[#3d0c2f] justify-center  text-white font-sans p-[5%] md:p-[10%] border-4 shadow-4xl"
      id="contact"
    >
      <div className="relative bg-gradient-to-b from-[#3d0c2f] to-[#2d0c1e] rounded-2xl shadow-lg max-w-xl w-full p-6 border border-pink-500/30">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-lg uppercase tracking-wide text-gray-300">
            Victory Bible Church International
          </h2>
          <h3 className="text-sm text-gray-400 font-medium">
            {AppConstant.churchName} (Yonkers)
          </h3>
          <p className="italic text-yellow-400 mt-2">You are welcome</p>
        </div>
        {/* Service Times */}
        <div className="bg-[#4a1030] rounded-xl p-6">
          <div className="mb-4">
            <h4 className="text-xl font-bold text-white">Sundays</h4>
            <p className="text-yellow-300">{`${AppConstant.churchServiceTime.Sunday.time}`}</p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-bold text-white">Tuesdays</h4>
            <p className="text-yellow-300">{`${AppConstant.churchServiceTime.Tuesday.time}`}</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">Fridays</h4>
            <p className="text-yellow-300">{`${AppConstant.churchServiceTime.Friday.time}`}</p>
          </div>
        </div>
        {/* Address */}
        <div className="text-center mt-6">
          <p className="font-bold text-white">IN PERSON @ CHURCH</p>
          <p className="text-sm text-gray-300">{AppConstant.churchAddress}</p>
        </div>
        {/* Footer with icon */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <div className="bg-red-600 p-1 rounded">
            <span className="text-white text-sm font-bold">LIVE</span>
          </div>
          <p className="text-sm">VBCI Yonkers</p> <br />
        </div>
        <p className="text-sm text-center flex mt-4 gap-2 justify-center items-center">
       <span>   Watch Us Live At</span>
          <span className="">
            <a href={AppConstant.YOUTUBE_LINK} className="hover:opacity-80 transition-all" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FF3D00"
                  d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                ></path>
                <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
              </svg>
            </a>
          </span>
          <span>
            <a href={AppConstant.FACEBOOK_LINK} className="hover:opacity-80 transition-all" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
