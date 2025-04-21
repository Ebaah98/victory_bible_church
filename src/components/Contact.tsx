import React from "react";
import AppConstant from "@/app";

export default function Contact() {
  return <ChurchFlyer />;
}

function ChurchFlyer() {
  return (
    <div
      className="flex items-center bg-[#3d0c2f] justify-center text-white font-sans p-[5%] md:p-[10%] border-4 shadow-4xl"
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
            <p className="text-yellow-300">{AppConstant.churchServiceTime.Sunday.time}</p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-bold text-white">Tuesdays</h4>
            <p className="text-yellow-300">{AppConstant.churchServiceTime.Tuesday.time}</p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-bold text-white">Fridays</h4>
            <p className="text-yellow-300">{AppConstant.churchServiceTime.Friday.time}</p>
          </div>

          {/* Prayer Line */}
          <div className="mt-6 border-t border-pink-400/20 pt-4 space-y-2">
            <h4 className="text-xl font-bold text-white">Prayer Line</h4>
            <p className="text-yellow-300"><strong>Monday to Thursday</strong>: 12:00 pm – 1:00 pm EST (via Zoom)</p>
            <p className="text-yellow-300"><strong>Tuesday (AVENOR PARK Prayer)</strong>: 6:00 pm – 7:30 pm EST (In-person or Zoom)</p>
            <p className="text-yellow-300"><strong>Friday (AIJALON HOUR)</strong>: 7:00 pm – 8:30 pm EST (via Zoom)</p>
            <p className="text-yellow-300">
              <strong>Join via Zoom</strong>:{" "}
              <a
                href="https://us02web.zoom.us/j/3202413847?pwd=iLzW1Gkoybk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white hover:text-yellow-400"
              >
                Click here to join
              </a>
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="text-center mt-6">
          <p className="font-bold text-white">IN PERSON @ CHURCH</p>
          <p className="text-sm text-gray-300">{AppConstant.churchAddress}</p>
        </div>

        {/* Footer with icons */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <div className="bg-red-600 p-1 rounded">
            <span className="text-white text-sm font-bold">LIVE</span>
          </div>
          <p className="text-sm">VBCI Yonkers</p>
        </div>

        {/* Social Links */}
        <p className="text-sm text-center flex mt-4 gap-2 justify-center items-center">
          <span>Watch Us Live At</span>
          <span>
            <a href={AppConstant.YOUTUBE_LINK} className="hover:opacity-80 transition-all" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#FF3D00" d="M43.2,33.9..."></path>
                <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
              </svg>
            </a>
          </span>
          <span>
            <a href={AppConstant.FACEBOOK_LINK} className="hover:opacity-80 transition-all" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43..."></path>
                <path fill="#fff" d="M26.572,29.036h4.917..."></path>
              </svg>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
