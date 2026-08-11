import { regions } from "../data/regionsData.js";
import { useState } from "react";
export default function PageHeader({onGet}){
  const [open,setOpen] = useState(false);

  const regionsHandleClick =(index)=>{
    const chosedRegion = document.querySelector(`#regions-${index}`);
    chosedRegion.toggleAttribute("hidden");
  }

  const prefecturesHandleClick=()=>{
    const prefecturesList = document.querySelectorAll(".hide-all");
    prefecturesList.forEach((element) => {
    element.hidden = true;
  });}
	return (
    <div>
      <div className="p-4 flex justify-around gap-3 bg-[#2779f3]">
        {regions.map((region, index) => (
          <div key={index} className="relative w-full">
            <h3
              className="text-xl  text-white cursor-pointer"
              onClick={() => regionsHandleClick(index)}
            >
              {region.name}
            </h3>
            <ul
              id={`regions-${index}`}
              className="w-full text-md absolute   bg-[#2779f3] text-white z-10 hide-all" hidden
            >
              {region.prefectures.map((pref, index) => (
                <li key={index} className="p-1.5">
                  <a
                    className="cursor-pointer"
                    onClick={() => {
                      prefecturesHandleClick();
                      onGet(pref.code, pref.name);
                    }}
                  >
                    {pref.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}