import React from "react";

function Card({info, func, index}) {
    var {name, author, image, is_fav} = info;  

  return (
    <div className="relative h-32 w-80 bg-white shadow-md rounded-xl px-3 py-6">
      <div className="flex gap-10 h-full w-full">
        <div className="h-[90%] w-[30%] bg-zinc-300 rounded-lg overflow-hidden">
            <img className="h-full w-full object-cover" src={image} alt="" />
        </div>
        <div className="mt-2">
          <h1 className="font-bold">{name}</h1>
          <h2 className="font-semibold">{author}</h2>
        </div>
      </div>
      <button onClick={()=>func(index)} className={`px-3 py-2 ${is_fav ? "bg-green-700" : "bg-orange-600"} text-white font-bold rounded-full absolute bottom-[-10%] left-[50%] -translate-x-[50%]`}>{is_fav ? "Favourite" : "Add to Favourites"}</button>
    </div>
  );
}

export default Card;
