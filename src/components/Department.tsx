import React from "react";
import AppConstant from "@/app";

const Departments = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-md mt-10 mb-10" id="department">
      <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
        Departments & Ministries
      </h2>
      <p className="mb-6 text-gray-700 text-center">
        At Victory Bible Church - Solid Rock Sanctuary, we are a vibrant family
        made up of several ministries and departments designed to meet the
        spiritual and practical needs of our congregation. Here are some of the
        key departments:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {AppConstant.departments.map((dept, idx) => (
          <div
            key={idx}
            className="bg-purple-100 px-6 py-4 rounded-lg shadow-md hover:bg-purple-200 transition transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-purple-700">{dept}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Departments;
