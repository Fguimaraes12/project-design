import { GithubIcon, Instagram, TwitterIcon } from "lucide-react";
import { Link } from 'react-router-dom'


function Header(){


  return(
  <div className="text-white flex justify-center pt-10 items-center gap-65">
    <h1 className=" text-[1.3rem]">Serendale</h1>
    
    <ul className="flex gap-6 text-[1.3rem] font-[ClashGrotesk-Light]">
      <Link to={"/"}>Home</Link>
      <Link to={"/catalog"}>Catalog API</Link>
      <Link to={"/create"}>Create API</Link>
      <Link to={"/pricing"}>Pricing</Link>
    </ul>
  
  <ul className="flex gap-1">
    <li><GithubIcon size={25}/></li>
    <li><TwitterIcon size={25}/></li>
    <li><Instagram size={25}/> </li>
  </ul>

  </div>)
}



export default Header;