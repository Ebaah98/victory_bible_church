import React from "react";
import AppConstant from '@/app'
interface TestimonyType {
  title: string;
  text: string;
  img: string;
}
function Testimony() {
 
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AppConstant.testimonies.map(({title, text, img}, index) => (
            <TestimonyCard title={title} text={text} img={img} key={index}/>
     ))}
        </div>
      </div>
    </section>
  );
}

export default Testimony;

function TestimonyCard({title, text, img}:TestimonyType) {
  return (
    <div className="bg-gray-100 p-6 rounded-2xl shadow">
      <p className="text-gray-700 italic">
        {text}
      </p>
      <div className="mt-4 flex items-center gap-4">
        <img
          src={img}
          alt="Person 2"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900">{title }</p>
          {/* <p className="text-xs text-gray-500">Youth Volunteer</p> */}
        </div>
      </div>
    </div>
  );
}
