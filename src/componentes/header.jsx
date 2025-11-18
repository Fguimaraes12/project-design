import { Link } from 'react-router-dom'
import { LoginContext } from "../context/loginContext";
import { useContext } from 'react';

function Header(){
const { setShowModal} = useContext(LoginContext)

  return(
<div className="
        w-full 
        fixed 
        top-0 
        left-0 
        z-50 
        flex 
        justify-center 
        pt-8 
        pb-4
      ">

      {/* 2. Container interno: Onde o efeito de Glassmorphism é aplicado. */}
      <div className="
          text-white 
          flex 
          justify-between 
          items-center 
          gap-8 
          md:gap-12 
          lg:gap-20 
          p-4 
          px-6
          md:px-10
          
          /* Efeito de Vidro (Glassmorphism) */
          bg-white/0             
          backdrop-blur-[11px]         
          rounded-2xl              
          shadow-2xl                
            
        ">
        
        {/* Logo/Título */}
        <h1 className="text-[1.3rem] font-bold whitespace-nowrap">Serendale</h1>
        
        {/* Links de Navegação (Escondidos em telas pequenas) */}
        <ul className="flex gap-6 text-[1.3rem] font-[ClashGrotesk-Light] hidden lg:flex">
          <Link to={"/"} className="hover:text-gray-300 transition-colors">Home</Link>
          <Link to={"/catalog"} className="hover:text-gray-300 transition-colors">Catalog API</Link>
          <Link to={"/create"} className="hover:text-gray-300 transition-colors">Create API</Link>
          <Link to={"/pricing"} className="hover:text-gray-300 transition-colors">Pricing</Link>
        </ul>

        {/* Links de Login/Cadastro */}
        <div className="flex gap-4 justify-center items-center">
          <span onClick={() => setShowModal(true)} className="flex cursor-pointer hover:text-gray-300 transition-colors">Entrar</span>
          <span onClick={() => setShowModal(true)} className="
            bg-white 
            text-black 
            rounded-[8px]
            px-4 
            py-2 
            text-[1rem] 
            font-medium
            whitespace-nowrap 
            transition-all 
            duration-300 
            hover:bg-gray-200 
            cursor-pointer
          ">
            Cadastre-se
          </span>
        </div>
      </div>
    </div>
  )
}



export default Header;