import LooperBg from "../assets/img/sombra-projetada.png";

function Pagamento() {

  return (
    // Adicionamos 'w-full' para garantir 100% da largura, junto com min-h-screen
    <div className="
        w-full             /* Garante 100% da largura */
        bg-black 
        py-42             
        pb-32             
        min-h-screen      
      "
      style={{
        backgroundImage: `url(${LooperBg})`,
        backgroundColor: "black",
        backgroundSize: "cover", // Garante que o BG cubra a área toda (height e width)
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 300px",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> 
        {/* ... (O restante do seu conteúdo traduzido permanece aqui) ... */}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12">
          
          {/* Coluna 1: Formulários */}
          <div className="lg:col-span-2">
            <form>
              
              {/* Seção: Detalhes de Envio */}
              <div>
                <h2 className="text-5xl text-white font-semibold mb-12">Detalhes de Envio</h2>
                <div className="grid lg:grid-cols-2 gap-y-6 gap-x-4">
                  {/* Nome */}
                  <div>
                    <label className="text-xl sm:text-2xl text-white font-medium block mb-2">Primeiro Nome</label>
                    <input type="text" placeholder="Insira o Primeiro Nome"
                      className="px-4 py-3.5 text-gray-300 bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] w-full text-base rounded-md focus:outline-none focus:border-blue-600" />
                  </div>
                  {/* Sobrenome */}
                  <div>
                    <label className="text-xl sm:text-2xl text-white font-medium block mb-2">Sobrenome</label>
                    <input type="text" placeholder="Insira o Sobrenome"
                      className="px-4 py-3.5 text-gray-300 bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] w-full text-base rounded-md focus:outline-none focus:border-blue-600" />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="text-xl sm:text-2xl text-white font-medium block mb-2">E-mail</label>
                    <input type="email" placeholder="Insira o E-mail"
                      className="px-4 py-3.5 text-gray-300 bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] w-full text-base rounded-md focus:outline-none focus:border-blue-600" />
                  </div>
                  {/* Telefone */}
                  <div>
                    <label className="text-xl sm:text-2xl text-white font-medium block mb-2">Telefone</label>
                    <input type="number" placeholder="Insira o Telefone"
                      className="px-4 py-3.5 text-gray-300 bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] w-full text-base rounded-md focus:outline-none focus:border-blue-600" />
                  </div>
                  {/* Endereço */}
                  <div>
                    <label className="text-xl sm:text-2xl text-white font-medium block mb-2">Endereço (Rua, Número)</label>
                    <input type="text" placeholder="Insira o Endereço"
                      className="px-4 py-3.5 text-gray-300 bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] w-full text-base rounded-md focus:outline-none focus:border-blue-600" />
                  </div>
                  {/* Cidade */}
                  <div>
                    <label className="text-xl sm:text-2xl text-white font-medium block mb-2">Cidade</label>
                    <input type="text" placeholder="Insira a Cidade"
                      className="px-4 py-3.5 text-gray-300 bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] w-full text-base rounded-md focus:outline-none focus:border-blue-600" />
                  </div>
                  {/* Estado */}
                  <div>
                    <label className="text-xl sm:text-2xl text-white font-medium block mb-2">Estado</label>
                    <input type="text" placeholder="Insira o Estado"
                      className="px-4 py-3.5 text-gray-300 bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] w-full text-base rounded-md focus:outline-none focus:border-blue-600" />
                  </div>
                  {/* CEP */}
                  <div>
                    <label className="text-xl sm:text-2xl text-white font-medium block mb-2">CEP</label>
                    <input type="text" placeholder="Insira o CEP"
                      className="px-4 py-3.5 text-gray-300 bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] w-full text-base rounded-md focus:outline-none focus:border-blue-600" />
                  </div>
                </div>
              </div>

              {/* Seção: Pagamento */}
              <div className="mt-12">
                <h2 className="text-4xl text-white font-semibold mt-12 mb-6">Método de Pagamento</h2>
                <div className="grid gap-4 lg:grid-cols-2">
                  {/* Cartão de Crédito/Débito */}
                  <div className="p-4 rounded-md bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] max-w-sm">
                    <div>
                      <div className="flex items-center">
                        <input type="radio" name="method" className="w-5 h-5 cursor-pointer accent-blue-600" id="card" defaultChecked />
                        <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                          <img src="https://readymadeui.com/images/visa.webp" className="w-12" alt="Visa" />
                          <img src="https://readymadeui.com/images/american-express.webp" className="w-12" alt="American Express" />
                          <img src="https://readymadeui.com/images/master.webp" className="w-12" alt="MasterCard" />
                        </label>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-white font-medium">Pague com seu cartão de débito ou crédito</p>
                  </div>
                  {/* PayPal */}
                  <div className="p-4 rounded-md bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] max-w-sm">
                    <div>
                      <div className="flex items-center">
                        <input type="radio" name="method" className="w-5 h-5 cursor-pointer accent-blue-600" id="paypal" />
                        <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
                          <img src="https://readymadeui.com/images/paypal.webp" className="w-20" alt="PayPal" />
                        </label>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-white font-medium">Pague com sua conta PayPal</p>
                  </div>
                </div>
              </div>

              {/* Seção: Código Promocional */}
              <div className="mt-12 max-w-md">
                <p className="text-white text-sm font-medium mb-2">Você tem um código promocional?</p>
                <div className="flex gap-4">
                  <input type="text" placeholder="Código Promocional"
                    className="px-4 py-3.5 bg-gradient-to-br text-gray-300 from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] w-full text-base rounded-md focus:outline-none focus:border-blue-600" />
                  <button type='button' className="flex items-center justify-center font-medium tracking-wide bg-blue-600 hover:bg-blue-700 px-4 py-3.5 rounded-md text-sm text-white whitespace-nowrap cursor-pointer">
                    Aplicar
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Coluna 2: Resumo do Pedido */}
          <div className="relative">
            <h2 className="text-4xl text-white font-semibold mb-6">Resumo do Pedido</h2>
            <div className="p-6 rounded-lg bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838]">
                <ul className="text-white font-medium space-y-4">
                    <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-semibold text-white">$72.00</span></li>
                    <li className="flex flex-wrap gap-4 text-sm">Desconto <span className="ml-auto font-semibold text-white">$0.00</span></li>
                    <li className="flex flex-wrap gap-4 text-sm">Frete <span className="ml-auto font-semibold text-white">$6.00</span></li>
                    <li className="flex flex-wrap gap-4 text-sm">Impostos <span className="ml-auto font-semibold text-white">$5.00</span></li>
                    <hr className="border-gray-500 my-4" />
                    <li className="flex flex-wrap gap-4 text-[18px] font-bold text-white">Total <span className="ml-auto">$83.00</span></li>
                </ul>
                <div className="space-y-4 mt-8">
                    <button type="button" className="rounded-md px-4 py-3.5 w-full text-lg font-medium tracking-wide bg-blue-600 hover:bg-blue-700 text-white transition duration-200 cursor-pointer">Finalizar Compra</button>
                    <button type="button" className="rounded-md px-4 py-3.5 w-full text-lg font-medium tracking-wide bg-transparent hover:bg-gray-700 border border-gray-500 text-white transition duration-200 cursor-pointer">Continuar Comprando</button>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Pagamento;