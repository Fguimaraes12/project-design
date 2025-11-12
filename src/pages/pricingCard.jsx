import { Check } from "lucide-react";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext";
import Login from "./login";

export default function PricingSection() {
  const { setShowModal} = useContext(LoginContext)
const features = [
    "Agregação de Contas",
    "Rastreamento de Despesas",
    "Ferramentas de Orçamento",
    "Insights de Transações",
    "Segurança Básica",
    "Rastreamento de Despesas",
    "Ferramentas de Orçamento",
    "Insights de Transações",
    "Segurança Básica",
  ];

  const planos = [
    {
      title: "Grátis",
      price: "$0,00",
      subtitle: "/mês",
      description: "Ótimo para experimentar o Finament e para equipes pequenas.",
      buttonText: "Começar Gratuitamente",
      buttonStyle: "bg-[#232323] hover:bg-[#2e2e2e] text-white",
      premium: false,
      business: false,
      glow: false,
    },
    {
      title: "Premium",
      price: "$45",
      subtitle: "/mês",
      description: "Perfeito para equipes em crescimento que precisam de ferramentas avançadas.",
      buttonText: "Começar",
      buttonStyle: "bg-white text-black hover:bg-gray-100",
      premium: true,
      business: false,
      glow: true,
    },
    {
      title: "Empresarial",
      price: "$99",
      subtitle: "/mês",
      description: "Para equipes estabelecidas que necessitam de flexibilidade máxima.",
      buttonText: "Começar",
      buttonStyle: "bg-[#232323] hover:bg-[#2e2e2e] text-white",
      premium: false,
      business: true,
      glow: false,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 300px",
      }}
    >
      <Login/>
      <div className="flex flex-col items-center justify-center min-h-screen text-white px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Nossos Planos Crescem</h2>
          <p className="text-gray-400 text-lg">
            Grandes planos para cada etapa do seu negócio.
          </p>
        </div>

        {/* CONTAINER DOS CARD */}
        <div className="flex flex-wrap justify-center items-center gap-12 ">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`relative w-[390px] h-[640px] rounded-[14px] p-[1px] 

      ${
         plano.premium
          ? "bg-[radial-gradient(circle_230px_at_0%_0%,_#ffffff,_#0c0d0d)]"
          : "bg-[radial-gradient(circle_230px_at_0%_0%,_#ffffff,_#0c0d0d)]"
      }


      hover:scale-105 transition-transform duration-300`}
            >
              <div
                className={`relative flex flex-col justify-start items-start w-full h-full rounded-[12px] border border-[#202222]  ${
                  plano.premium
                    ? "bg-[radial-gradient(circle_280px_at_0%_0%,_#444444,_#0c0d0d)] "
                    : "bg-[radial-gradient(circle_280px_at_0%_0%,_rgba(40,40,40,0.8),_#0a0a0a)]"
                } text-white p-8 overflow-hidden`}
              >
 

                {/* CONTEUDO DENTRO DO CARD */}
                <div className="relative z-10 flex flex-col items-start text-white">
                  <h3 className="text-2xl font-bold mb-1">{plano.title}</h3>
                  <p className="text-4xl font-extrabold mb-1">{plano.price}</p>
                  <span className="text-base text-gray-400 mb-4">
                    {plano.subtitle}
                  </span>
                  <p className="text-base text-gray-400 mb-4">
                    {plano.description}
                  </p>
                  <button
                    onClick={() => setShowModal(true)}
                    className={`w-full transition cursor-pointer rounded-md py-3 text-base font-semibold ${plano.buttonStyle}`}
                  >
                    {plano.buttonText}
                  </button>
                  <div className="mt-8 w-full">
                    <h4 className="text-sm tracking-widest text-gray-500 mb-2 flex items-center gap-2">
                      <span className="flex-1 border-t border-[#333]" />
                      FEATURES
                      <span className="flex-1 border-t border-[#333]" />
                    </h4>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-base text-gray-300"
                        >
                          <Check className="w-5 h-5 text-green-400" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
