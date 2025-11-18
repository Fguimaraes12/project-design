import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import LooperBg from "../assets/img/sombra-projetada.png";
import CreateSK from "./skeleton/createSK";

function Create() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return <CreateSK />;
  }

  return (
    <div
      className="min-h-screen p-6 text-white"
      style={{
        backgroundImage: `url(${LooperBg})`,
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 300px",
      }}
    >
      <div className="w-full max-w-4xl mx-auto mt-20 py-15">
        {/* Resource Name Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-semibold mb-2">Nome do recurso</h2>
          <p className="text-gray-400 text-sm mb-3">
            Insira um nome de recurso significativo, ele será usado para gerar endpoints de API.
          </p>
          <input
            type="text"
            placeholder="Example: users, comments, articles..."
            className="w-full text-gray-300 px-4 py-3 bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] rounded-lg focus:outline-none focus:border-white transition-colors"
          />
        </div>

        {/* Schema Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-semibold mb-2">Schema</h2>
          <p className="text-gray-400 text-sm mb-4">
            Defina o esquema de Recurso, ele será usado para gerar dados simulados.
          </p>

          <div className="space-y-3 mb-4">
            <div className="flex gap-3">
              <input
                type="text"
                value="id"
                readOnly
                className="w-40 bg-[#1a1a1a] text-gray-300 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] "
              />
              <input
                type="text"
                value="Object ID"
                readOnly
                className="flex-1 bg-[#1a1a1a] text-gray-400 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838]"
              />
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                value="createdAt"
                readOnly
                className="w-40 bg-[#1a1a1a] text-gray-300 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] "
              />
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  value="Faker.js"
                  readOnly
                  className="flex-1 bg-[#2a2a2a] text-gray-400 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838]"
                />
                <input
                  type="text"
                  value="date.recent"
                  readOnly
                  className="flex-1 bg-[#2a2a2a] text-gray-400 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838]"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                value="name"
                readOnly
                className="w-40 bg-[#1a1a1a] text-gray-300 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] "
              />
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  value="Faker.js"
                  readOnly
                  className="flex-1 bg-[#2a2a2a] text-gray-400 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838]"
                />
                <input
                  type="text"
                  value="name.fullName"
                  readOnly
                  className="flex-1 bg-[#2a2a2a] text-gray-400 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838]"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                value="avatar"
                readOnly
                className="w-40 bg-[#1a1a1a] text-gray-300 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] "
              />
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  value="Faker.js"
                  readOnly
                  className="flex-1 bg-[#2a2a2a] text-gray-400 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838]"
                />
                <input
                  type="text"
                  value="image.avatar"
                  readOnly
                  className="flex-1 bg-[#2a2a2a] text-gray-400 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838]"
                />
              </div>
            </div>
          </div>

          <button className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors cursor-pointer">
            <Plus size={20} />
          </button>
        </div>

        {/* Object Template Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-4xl font-semibold">Modelo de Objeto</h2>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Para definir uma estrutura mais complexa para seus dados,
             use um template JSON. Você pode referenciar a função do Faker.js usando{" "}
            <span className="text-blue-400">$function_name</span>.
          </p>

          <div className="relative bg-[#1a1a1a] rounded-lg bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] p-4">
            <span className="absolute top-4 right-4 text-xs text-gray-500">
              EXEMPLO
            </span>
            <pre className="text-sm font-mono text-gray-300 ">
              <code>{`{
  "username": "$internet.userName",
  "knownIps": ["$internet.ip", "$internet.ipv6"],
  "profile": {
    "firstName": "$name.firstName",
    "lastName": "$name.lastName",
    "staticData": [100, 200, 300]
  }
}`}</code>
            </pre>
          </div>
        </div>

        {/* Endpoints Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-4xl font-semibold">Endpoints</h2>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Ativar/desativar endpoints e personalizar a resposta JSON.
          </p>
          <p className="text-gray-400 text-sm mb-4">
           Por padrão, o Mockapi retornará uma lista de itens ou um único item, 
           dependendo da solicitação. Para definir respostas mais complexas, forneça um modelo
            personalizado. Você pode fazer referência aos métodos do Faker.js usando{" "}
            <span className="text-blue-400">$function_name</span>.
          </p>

          {/* Endpoints List */}
          <div className="space-y-3 my-7">
            <div className="flex items-center gap-3 ">
              <span className="flex items-center justify-center w-12 h-10 bg-green-600 text-white text-xs font-semibold rounded">
                GET
              </span>
              <span className="text-gray-400"></span>
              <input
                placeholder="$mockData"
                className="flex-1 rounded-sm bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] px-4 py-2 text-gray-500 text-sm"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-12 h-10 bg-green-600 text-white text-xs font-semibold rounded">
                GET
              </span>
              <span className="text-gray-400"></span>
              <input
                placeholder="$mockData"
                className="flex-1 rounded-sm bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] px-4 py-2 text-gray-500 text-sm"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-12 h-10 bg-blue-600 text-white text-xs font-semibold rounded">
                POST
              </span>
              <span className="text-gray-400"></span>
              <input
                placeholder="$mockData"
                className="flex-1 rounded-sm bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] px-4 py-2 text-gray-500 text-sm"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-12 h-10 bg-orange-600 text-white text-xs font-semibold rounded">
                PUT
              </span>
              <span className="text-gray-400"></span>
              <input
                placeholder="$mockData"
                className="flex-1 rounded-sm bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] px-4 py-2 text-gray-500 text-sm"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-12 h-10 bg-red-600 text-white text-xs font-semibold rounded">
                DELETE
              </span>
              <span className="text-gray-400"></span>
              <input
                placeholder="$mockData"
                className="flex-1 rounded-sm bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] px-4 py-2 text-gray-500 text-sm"
              />
            </div>
          </div>

          <div className="rounded-sm bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] p-4 mb-4">
            <div className="mb-3">
              <span className="text-sm font-semibold text-gray-300">
                $mockData
              </span>
              <span className="text-xs text-gray-500 ml-2">
                - dados armazenados no banco de dados.
              </span>
            </div>
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-300">
                $count
              </span>
              <span className="text-xs text-gray-500 ml-2">
                - número de registros armazenados no banco de dados.
              </span>
            </div>

            <div className="mb-3">
              <h3 className="text-sm font-semibold mb-2">$mockData</h3>
              <div className="relative bg-[#0a0a0a] rounded-lg p-4 border border-[#383838] ">
                <span className="absolute top-3 right-3 text-xs text-gray-600">
                  EXEMPLO
                </span>
                <pre className="text-sm font-mono text-gray-300">
                  <code>{`{
  "requestId": "$datatype.uuid",
  "items": "$mockData",
  "count": "$count",
  "anyKey": "anyValue"
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <button className="group relative mt-2 px-12 py-4 rounded-[.30rem] overflow-hidden transition-all duration-300 cursor-pointer hover:scale-103 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <span className="relative text-white text-2xl font-medium tracking-wide">
            Criar
          </span>
        </button>
      </div>
    </div>
  );
}

export default Create;
