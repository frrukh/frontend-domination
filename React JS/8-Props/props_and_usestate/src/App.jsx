import React, { useState } from "react";
import Card from "./Components/Card";
function App() {
  const raw = [
    {name: "Fiha", author: "Iqrar", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29uZ3xlbnwwfDB8MHx8fDA%3D", is_fav: false},
    {name: "Moye Moye", author: "Wilson", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29uZ3xlbnwwfDB8MHx8fDA%3D", is_fav: false},
    {name: "Song", author: "Smith", image: "https://images.unsplash.com/photo-1604936809881-d8113b290d47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvbmd8ZW58MHwwfDB8fHww", is_fav: false},
    {name: "Dummy Naam", author: "John", image: "https://images.unsplash.com/photo-1493246886675-0042d822e0db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHNvbmd8ZW58MHwwfDB8fHww", is_fav: false},
    {name: "Coca Cola", author: "Rocky", image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG11c2ljfGVufDB8MHwwfHx8MA%3D%3D", is_fav: false},
    {name: "Believer", author: "Hursh", image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG11c2ljfGVufDB8MHwwfHx8MA%3D%3D", is_fav: false},
  ];

  const [data, setData] = useState(raw);

  const toggleFavourite = (index)=>{
    setData(prev=>{
      return prev.map((elem, ind)=>{
        if(ind===index) return {...elem, is_fav: !elem.is_fav};
        return elem;
      })
    })
  }

  

  return (
    <div className="h-screen w-full bg-zinc-300">
      <nav className="px-10 py-4 flex items-center justify-between">
        <a className="font-extrabold text-2xl text-orange-600" href="#">Orange</a>
        <button className="px-3 py-2 bg-orange-600 font-semibold text-white rounded-2xl shadow-lg shadow-[#838383]">Favourites <span className="rounded-full bg-[#00000021] px-2 py-[2px]">{ data.filter((item)=> item.is_fav).length }</span></button>
      </nav>
      <div className="min-h-[90%] w-full flex items-center justify-center content-center bg-zinc-200 flex-wrap gap-10">

        {data.map((value, index)=><Card info={value} index={index} key={index} func={toggleFavourite} />)}
        
      </div>
    </div>
  );
}

export default App;
