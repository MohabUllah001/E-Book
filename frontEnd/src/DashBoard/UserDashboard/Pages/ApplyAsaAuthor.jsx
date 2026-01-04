import React from "react";
import image from "../../../../Pictures/AdobeStock_295454197_bw_cropped_blue_v_narrow.png";

const ApplyAsaAuthor = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 min-w-full">
      
      {/* Full width container */}
      <div className="bg-white shadow-lg rounded-xl max-w-2xl mx-auto p-8">
        
        {/* Header Image */}
        <div className="flex justify-center mb-8">
          <img
            src={image}
            alt="Author"
            className="w-36 h-36 object-cover rounded-full ring-4 ring-indigo-500"
          />
        </div>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              value="Mr. David"
              disabled
              className="w-full px-4 py-3 rounded-lg border bg-gray-100 text-gray-700 cursor-not-allowed focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="text"
              value="david@gmail.com"
              disabled
              className="w-full px-4 py-3 rounded-lg border bg-gray-100 text-gray-700 cursor-not-allowed focus:outline-none"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Role
            </label>
            <input
              type="text"
              value="Author"
              disabled
              className="w-full px-4 py-3 rounded-lg border bg-gray-100 text-gray-700 cursor-not-allowed focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Apply as Author
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyAsaAuthor;
