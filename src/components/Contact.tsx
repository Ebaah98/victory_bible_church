import React from 'react'

type Props = {}

export default function Contact(){
  return (
 
     
      <ChurchFlyer/>
  )
}



function ChurchFlyer() {
    return (
<div className="min-h-screen flex items-center bg-[#3d0c2f] justify-center  text-white font-sans p-4 border-4 shadow-4xl">
<div className="relative bg-gradient-to-b from-[#3d0c2f] to-[#2d0c1e] rounded-2xl shadow-lg max-w-xl w-full p-6 border border-pink-500/30">
       {/* Title */}
<div className="text-center mb-6">
<h2 className="text-lg uppercase tracking-wide text-gray-300">Victory Bible Church International</h2>
<h3 className="text-sm text-gray-400 font-medium">Solid Rock Sanctuary (Yonkers)</h3>
<p className="italic text-yellow-400 mt-2">You are welcome</p>
</div>
       {/* Service Times */}
<div className="bg-[#4a1030] rounded-xl p-6">
<div className="mb-4">
<h4 className="text-xl font-bold text-white">Sundays</h4>
<p className="text-yellow-300">10am - 12:30pm</p>
</div>
<div className="mb-4">
<h4 className="text-xl font-bold text-white">Tuesdays</h4>
<p className="text-yellow-300">6pm - 7:30pm</p>
</div>
<div>
<h4 className="text-xl font-bold text-white">Fridays</h4>
<p className="text-yellow-300">7pm - 8:30pm</p>
</div>
</div>
       {/* Address */}
<div className="text-center mt-6">
<p className="font-bold text-white">IN PERSON @ CHURCH</p>
<p className="text-sm text-gray-300">1 Tuckahoe Road, Yonkers, NY 10710</p>
</div>
       {/* Footer with icon */}
<div className="flex justify-center items-center gap-2 mt-4">
<div className="bg-red-600 p-1 rounded">
<span className="text-white text-sm font-bold">LIVE</span>
</div>
<p className="text-sm">VBCI Yonkers</p>
</div>
</div>
</div>
 )

}