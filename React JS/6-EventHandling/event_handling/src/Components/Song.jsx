import React from "react";

function Song() {
  var data = [
    {
      name: "Tu Ullu Hai",
      disc: "Lorem Ipsum nisl, consectetur adipiscing elit dolor, sed diam nonumy eirmod tempor",
    },
    {
      name: "Morris",
      disc: "Morris tempor son tempor fringilla voluptatum eum, sed diam nonumy eirmod tempor",
    },
  ];



  let downloadOnClick = ()=>{
    alert("Clicked.")
  }

  return (
    <div className="h-screen w-full bg-zinc-500 flex flex-col items-center justify-center gap-4">
      {data.map((elem, val) => (
        <div className="song px-3 py-2 w-fit bg-zinc-100 rounded-md">
          <h1 className="font-semibold text-2xl">{elem.name}</h1>
          <h1>
            {elem.disc}
          </h1>
          <button onClick={downloadOnClick} onMouseLeave={()=>{alert('mouse out')}} className="px-4 py-2 bg-blue-500 text-white rounded mt-3 text-sm">
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Song;
