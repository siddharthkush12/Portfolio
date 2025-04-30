import React from "react";

function ButtonRotatingBackgroundGradient({buttontext,setDialogOpen}) {
  return (
    <button className="relative cursor-pointer inline-flex h-9 md:h-12 overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50" onClick={()=>setDialogOpen(true)}>
      <span className="absolute inset-[-1000%]  animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full  items-center justify-center rounded-full px-3 md:px-8 md:py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl`}>
        {buttontext}
      </span>
    </button>
  );
}

export default ButtonRotatingBackgroundGradient;
