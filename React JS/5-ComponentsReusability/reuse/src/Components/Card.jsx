import React from "react";

// fragments: are used to wrap the elements without creating any parent element.
function Card() {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=2696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "amazon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quaerat eos, praesentium dicta voluptas sed ratione, odio necessitatibus ab exercitationem corporis sequi dolore.",
        in_stock: true,
    },
    {
        img: "https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "apple",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quaerat eos, praesentium dicta voluptas sed ratione.",
        in_stock: true,
    },
    {
        img: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
        name: "daily products",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quaerat eos.",
        in_stock: false,
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1682096304811-a059fab3e493?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHQlMjBzaGlydHxlbnwwfDB8MHx8fDA%3D",
        name: "shirts",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quaerat eos.",
        in_stock: false,
    },
  ];

  return (
    <div className="h-screen w-full bg-red-500 flex justify-center items-center gap-5 flex-wrap">
      {/* ADDING DYNAMIC DATA */}
      {data.map((elem, index) => (
        <div key={index} className="w-72 h-fit bg-zinc-200 rounded-md overflow-hidden">
          <div className="w-full h-44 bg-zinc-300">
            <img className="h-full w-full object-cover" src={elem.img} alt="" />
          </div>
          <div className="p-5">
            <h1 className="font-bold text-xl">{elem.name}</h1>
            <p className="mt-5 text-sm">{elem.description}</p>
            {/* USING CONDITIONALS */}
            <button className={`px-4 py-1 ${elem.in_stock?"bg-blue-500":"bg-red-500"} text-white rounded-md mt-5`}>
                {elem.in_stock ? "In Stock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
