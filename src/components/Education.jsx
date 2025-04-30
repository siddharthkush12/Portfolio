import React from "react";

function Education() {
  return (
    <div className="flex flex-col items-cente justify-center md:my-19">
      <h2 className="text-center text-xl md:text-4xl bg-gradient-to-r from-[#E2CBFF] to-[#393BB2] bg-clip-text text-transparent relative z-10 mb-5">
        EDUCATION
      </h2>
      <div className="w-full p-1">
        <div className="flex items-center">
          <img src="/lpulogo.png" alt="log not found" className="w-28 md:w-45" />
          <div className="flex flex-col">
            <h3 className="text-stone-800 md:text-2xl">
              Lovely Professional University, Phagwara Punjab
            </h3>
            <p className="text-stone-500">B-Tech Computer Science & Engineering 2026</p>
          </div>
        </div>
        <div className="flex items-center mt-6 md:mt-0">
          <img src="/schoollogo.png" alt="log not found" className="w-18 mx-5 md:w-27 md:mx-9" />
          <div className="flex flex-col">
            <h3 className="text-stone-800 md:text-2xl">
              Vidyawati Nigam Memorial Public School, Banda UttarPradesh
            </h3>
            <p className="text-stone-500">B-Tech Computer Science & Engineering 2026</p>
            <p className="text-stone-500">Class-12 (2020), Percentage: 86.2</p>
          </div>
        </div>
        <div className="flex items-center mt-7">
          <img src="/schoollogo.png" alt="log not found" className="w-18 mx-5 md:w-27 md:mx-9" />
          <div className="flex flex-col">
            <h3 className="text-stone-800 md:text-2xl">
              Vidyawati Nigam Memorial Public School, Banda UttarPradesh
            </h3>
            <p className="text-stone-500">B-Tech Computer Science & Engineering 2026</p>
            <p className="text-stone-500">Class-10 (2018), Percentage: 81</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
