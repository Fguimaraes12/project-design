import CatalogSK from "./skeleton/catalogSK"
import { useState, useEffect } from "react";


import { 
  Users, 
  FileText, 
  MessageCircle, 
  CheckSquare,
  ShoppingCart,
  Leaf,
  Share2,
  Briefcase,
  DollarSign,
  Bitcoin,
  Book,
  Utensils,
  Heart,
  Dumbbell,
  Code,
  Atom,
  Sparkles,
  Building
} from "lucide-react";

function Catalog() {


    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return <CatalogSK />;
  }

const commonResources = [
    { id: 1, name: "/usuarios", count: "20 usuários", description: "Perfis de usuário com informações pessoais", icon: Users, color: "bg-blue-500" },
    { id: 2, name: "/posts", count: "50 posts", description: "Publicações e artigos de blog", icon: FileText, color: "bg-green-500" },
    { id: 3, name: "/comentarios", count: "56 comentários", description: "Comentários em publicações", icon: MessageCircle, color: "bg-orange-500" },
    { id: 4, name: "/tarefas", count: "50 tarefas", description: "Itens de tarefas e a fazer", icon: CheckSquare, color: "bg-purple-500" }
  ];

  const apiCategories = [
    { id: 1, name: "/produtos", count: "20 produtos", description: "Dados de produtos de e-commerce", icon: ShoppingCart, color: "bg-blue-500" },
    { id: 2, name: "/animais", count: "20 animais", description: "Fatos e informações sobre animais", icon: Leaf, color: "bg-green-500" },
    { id: 3, name: "/posts-sociais", count: "40 posts", description: "Publicações no estilo de mídia social", icon: Share2, color: "bg-pink-500" },
    { id: 4, name: "/negocios", count: "20 empresas", description: "Dados de negócios e empresas", icon: Briefcase, color: "bg-orange-500" },
    { id: 5, name: "/financas", count: "20 registros", description: "Dados e relatórios financeiros", icon: DollarSign, color: "bg-yellow-500" },
    { id: 6, name: "/cripto", count: "20 moedas", description: "Dados do mercado de criptomoedas", icon: Bitcoin, color: "bg-purple-500" },
    { id: 7, name: "/blogs", count: "20 blogs", description: "Publicações e artigos de blog", icon: Book, color: "bg-cyan-500" },
    { id: 8, name: "/comida", count: "20 receitas", description: "Dados de alimentos e bebidas", icon: Utensils, color: "bg-red-500" },
    { id: 9, name: "/saude", count: "25 registros", description: "Informações de saúde", icon: Heart, color: "bg-pink-500" },
    { id: 10, name: "/empregos", count: "20 empregos", description: "Vagas de emprego e posições", icon: Building, color: "bg-green-500" },
    { id: 11, name: "/fitness", count: "20 treinos", description: "Exercícios e rotinas de fitness", icon: Dumbbell, color: "bg-blue-500" },
    { id: 12, name: "/programacao", count: "20 exemplos", description: "Snippets e dados de programação", icon: Code, color: "bg-gray-500" },
    { id: 13, name: "/ciencia-matematica", count: "20 datasets", description: "Datasets de ciência e matemática", icon: Atom, color: "bg-teal-500" },
    { id: 14, name: "/mais", count: "50+ categorias de api", description: "Mais Categorias de API em breve", icon: Sparkles, color: "bg-violet-500" }
  ];
  const Section = ({ title, items }) => (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-8 text-gray-300">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] p-6 cursor-pointer hover:scale-[1.02] transition-transform"
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{item.count}</p>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="text-6xl font-bold mb-4">Recursos Disponíveis</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Clique em qualquer cartão para ver seu endpoint de API e dados JSON, depois copie a URL e use em seu projeto.
          </p>
        </div>

        <Section title="Recursos Comuns" items={commonResources} />
        <Section title="Categorias API" items={apiCategories} />
      </div>
    </div>
  );
}

export default Catalog;
