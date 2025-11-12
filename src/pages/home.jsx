import {Link} from "react-router-dom"
import PricingCard from "./pricingCard"

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-25" >
      <h1 className="text-[4.6rem] mt-13 font-extrabold bg-clip-text text-transparent tracking-[.20rem]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #FF3BFF 0%, #ECBFBF 35%, #5C24FF 70%, #D94FD5 100%)",
        }}>
        Free Fake REST API
      </h1>

      <span className="text-[4.6rem] text-white"
      >
        For devs
      </span>

      <p className="max-w-[40rem] text-gray-300 text-2xl">
     Diga adeus ao Lorem Ipsum! O DummyJSON traz dados JSON reais para o seu frontend,
     permitindo que você se concentre no desenvolvimento enquanto cuidamos dos dados.
      </p>

    <div className="flex gap-6 mt-8">
      {/* Get Started Button */}
      <button className="group relative px-12 py-6 rounded-[.60rem] overflow-hidden transition-all duration-300 cursor-pointer hover:scale-103 hover:shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <Link to="/pricing" className="relative text-white text-2xl font-medium tracking-wide">
          Começar Agora
        </Link>
      </button>

      {/* Ecosystems Button */}
      <Link to="/create" className="group relative px-12 py-6 rounded-[.60rem] overflow-hidden transition-all duration-300 cursor-pointer hover:scale-103 hover:shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-purple-200 to-gray-400"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <span className="relative text-gray-900 text-2xl font-medium tracking-wide">
          Criar API
        </span>
      </Link>
    </div>


    </div>
  );
}

export default Home;