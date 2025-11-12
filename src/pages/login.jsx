import { useContext, useState } from "react";
import PricingSection from "./pricingCard";
import { LoginContext } from "../context/loginContext";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  const {showModal, setShowModal} = useContext(LoginContext)
  
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-[#181818ee] backdrop-blur-md flex items-center justify-center z-50">
                    <button 
                        onClick={() => setShowModal(false)}
                        className="absolute top-6 left-6 cursor-pointer text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2 text-2xl z-50"
                        aria-label="Voltar"
                    >
                        <ArrowLeft className="w-7 h-7"/>
                        Voltar
                    </button>
    
    <div className=" rounded-lg text-white p-8 w-[400px] relative"> 
        
        <h2 className="text-4xl font-bold mb-2 text-white text-center -tracking-tight">E aí, bem-vindo(a) de volta!</h2>
        <p className=" text-[#949494] text-center mb-20">sua primeira vez aqui ? <span className="text-white cursor-pointer">crie sua conta</span></p>
        
        <input
            type="text"
            placeholder="Usuário"
            className="w-full mb-3 p-3 border bg-[#141414] border-[#3d3d3d] text-white rounded-2xl placeholder-gray-400 "
        />
        <input
            type="password"
            placeholder="Senha"
            className="w-full mb-3 p-3 border bg-[#141414] border-[#3d3d3d]  text-white rounded-2xl placeholder-gray-400 "
        />
        
        <div className="space-y-4"> 
            
            <button className="w-full bg-[#ffff] text-black font-semibold py-3 rounded-2xl cursor-pointer hover:bg-[#eee]">
                Entrar
            </button>
            
            <p className="text-sm text-center text-white cursor-pointer hover:underline ">
                Esqueceu sua senha ?
            </p>

            <div className="flex items-center space-x-4 my-6">   
                <div className="flex-grow border-t border-gray-700"></div> 
                <span className="text-sm text-gray-500">ou</span>
                <div className="flex-grow border-t border-gray-700"></div>
            </div>

            <button className="w-full bg-[#141414] border -tracking-[-1px] border-[#3d3d3d] text-white font-semibold py-3 rounded-lg hover:bg-[#1f1f1f] transition">
                Entrar pelo GitHub
            </button>

            <p className="text-xs text-center text-gray-400 pt-2">
                Você reconhece que leu e concorda com nossos <a href="#" className="underline hover:text-white">Termos de Serviço</a> e nossa <a href="#" className="underline hover:text-white">Política de Privacidade</a>.
            </p>
        </div>
    </div>
</div>
      )}

      {/* Seção de planos */}
    </>
  );
}
