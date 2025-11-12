import { Check } from "lucide-react";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext";
import Login from "./login";

export default function PricingSection() {
  const { setShowModal} = useContext(LoginContext)
  const features = [
    "Account Aggregation",
    "Expense Tracking",
    "Budgeting Tools",
    "Transaction Insights",
    "Basic Security",
    "Expense Tracking",
    "Budgeting Tools",
    "Transaction Insights",
    "Basic Security",
  ];

  const plans = [
    {
      title: "Free",
      price: "$0,00",
      subtitle: "/month",
      description: "Great for trying out Finament and for tiny teams.",
      buttonText: "Start for Free",
      buttonStyle: "bg-[#232323] hover:bg-[#2e2e2e] text-white",
      premium: false,
      business: false,
      glow: false,
    },
    {
      title: "Premium",
      price: "$45",
      subtitle: "/month",
      description: "Perfect for growing teams that need advanced tools.",
      buttonText: "Get Started",
      buttonStyle: "bg-white text-black hover:bg-gray-100",
      premium: true,
      business: false,
      glow: true,
    },
    {
      title: "Business",
      price: "$99",
      subtitle: "/month",
      description: "For established teams needing maximum flexibility.",
      buttonText: "Get Started",
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

        {/* Container dos cards */}
        <div className="flex flex-wrap justify-center items-center gap-12 ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative w-[390px] h-[640px] rounded-[14px] p-[1px] 

      ${
         plan.premium
          ? "bg-[radial-gradient(circle_230px_at_0%_0%,_#ffffff,_#0c0d0d)]"
          : "bg-[radial-gradient(circle_230px_at_0%_0%,_#ffffff,_#0c0d0d)]"
      }


      hover:scale-105 transition-transform duration-300`}
            >
              <div
                className={`relative flex flex-col justify-start items-start w-full h-full rounded-[12px] border border-[#202222]  ${
                  plan.premium
                    ? "bg-[radial-gradient(circle_280px_at_0%_0%,_#444444,_#0c0d0d)] "
                    : "bg-[radial-gradient(circle_280px_at_0%_0%,_rgba(40,40,40,0.8),_#0a0a0a)]"
                } text-white p-8 overflow-hidden`}
              >
                {/* Linhas e raio de luz só no Premium */}
 

                {/* Conteúdo */}
                <div className="relative z-10 flex flex-col items-start text-white">
                  <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
                  <p className="text-4xl font-extrabold mb-1">{plan.price}</p>
                  <span className="text-base text-gray-400 mb-4">
                    {plan.subtitle}
                  </span>
                  <p className="text-base text-gray-400 mb-4">
                    {plan.description}
                  </p>
                  <button
                    onClick={() => setShowModal(true)}
                    className={`w-full transition cursor-pointer rounded-md py-3 text-base font-semibold ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                  <div className="mt-8 w-full">
                    <h4 className="text-sm tracking-widest text-gray-500 mb-2 flex items-center gap-2">
                      <span className="flex-1 border-t border-[#333]" />
                      FEATURES
                      <span className="flex-1 border-t border-[#333]" />
                    </h4>
                    <ul className="space-y-2">
                      {features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-base text-gray-300"
                        >
                          <Check className="w-5 h-5 text-green-400" /> {f}
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
