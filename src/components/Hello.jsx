import { useState } from "react";

function Hello() {

	const [open,setOpen] =useState(false);
  const handleClick = () =>{ setOpen(!open)};
  return (
    <div>
      <button className="border-1 border-red-500" onClick={handleClick}>ここをクリック</button>
			{open && <div>表示OK</div>}
    </div>
  );
}

export default Hello;
