import { regions } from "../data/regionsData.js";
export default function PageHeader({onGet}){
	return (
    <div>
      <div className="p-4 flex justify-around gap-3 bg-[#2779f3]">
        {regions.map((region, index) => (
          <div key={index} className="relative w-full">
            <h3 className="text-xl  text-white peer">{region.name}</h3>
            <ul className="w-full text-md absolute hidden flex-col peer-hover:flex hover:flex bg-[#2779f3] text-white z-10">
              {region.prefectures.map((pref, index) => (
                <li key={index} className="p-1.5">
                  <a
                    className="cursor-pointer"
                    onClick={() => {
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