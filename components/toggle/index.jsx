"use client";

export const ToggleComponent = ({ toggle, setToggle }) => {
  return (
    <>
      <button
        className={`
          w-[1.5rem] h-[0.8rem] rounded-full 
          border ${toggle ? "bg-[#15b58e]" : "bg-[#b7b9ba] border-[#aaa]"} 
          transition-all ease-in-out duration-300
          cursor-pointer
          relative hover:border-[#6f6f6f]
        `}
        onClick={() => setToggle(!toggle)}
      >
        <div
          className={`
            w-[0.5rem] h-[0.5rem] bg-white rounded-full 
            absolute top-1/2 transform -translate-y-1/2 
            transition-all ease-in-out duration-300
            ${toggle ? "left-[calc(1.8rem-1rem)]" : "left-[0.188rem]"}
          `}
        ></div>
      </button>
    </>
  );
};

export const KidsToggleComponent = ({ kidsToggle, setKidsToggle }) => {
  return (
    <>
      <button
        className={`
          w-[1.5rem] h-[0.8rem] rounded-full 
          border ${kidsToggle ? "bg-[#15b58e]" : "bg-[#b7b9ba] border-[#aaa]"} 
          transition-all ease-in-out duration-300
          cursor-pointer
          relative hover:border-[#6f6f6f]
        `}
        onClick={() => setKidsToggle(!kidsToggle)}
      >
        <div
          className={`
            w-[0.5rem] h-[0.5rem] bg-white rounded-full 
            absolute top-1/2 transform -translate-y-1/2 
            transition-all ease-in-out duration-300
            ${kidsToggle ? "left-[calc(1.8rem-1rem)]" : "left-[0.188rem]"}
          `}
        ></div>
      </button>
    </>
  );
};
