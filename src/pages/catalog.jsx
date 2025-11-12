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
    { id: 1, name: "/users", count: "20 users", description: "User profiles with personal information", icon: Users, color: "bg-blue-500" },
    { id: 2, name: "/posts", count: "50 posts", description: "Blog posts and articles", icon: FileText, color: "bg-green-500" },
    { id: 3, name: "/comments", count: "56 comments", description: "Comments on posts", icon: MessageCircle, color: "bg-orange-500" },
    { id: 4, name: "/todos", count: "50 todos", description: "Task and todo items", icon: CheckSquare, color: "bg-purple-500" }
  ];

  const apiCategories = [
    { id: 1, name: "/products", count: "20 products", description: "E-commerce product data", icon: ShoppingCart, color: "bg-blue-500" },
    { id: 2, name: "/animals", count: "20 animals", description: "Animal facts and info", icon: Leaf, color: "bg-green-500" },
    { id: 3, name: "/social-posts", count: "40 posts", description: "Social media style posts", icon: Share2, color: "bg-pink-500" },
    { id: 4, name: "/business", count: "20 companies", description: "Business and company data", icon: Briefcase, color: "bg-orange-500" },
    { id: 5, name: "/finance", count: "20 records", description: "Financial data & reports", icon: DollarSign, color: "bg-yellow-500" },
    { id: 6, name: "/crypto", count: "20 coins", description: "Cryptocurrency market data", icon: Bitcoin, color: "bg-purple-500" },
    { id: 7, name: "/blogs", count: "20 blogs", description: "Blog posts and articles", icon: Book, color: "bg-cyan-500" },
    { id: 8, name: "/food", count: "20 recipes", description: "Food & drinks data", icon: Utensils, color: "bg-red-500" },
    { id: 9, name: "/health", count: "25 records", description: "Healthcare information", icon: Heart, color: "bg-pink-500" },
    { id: 10, name: "/jobs", count: "20 jobs", description: "Job listings and positions", icon: Building, color: "bg-green-500" },
    { id: 11, name: "/fitness", count: "20 workouts", description: "Fitness exercises & routines", icon: Dumbbell, color: "bg-blue-500" },
    { id: 12, name: "/programming", count: "20 examples", description: "Programming snippets & data", icon: Code, color: "bg-gray-500" },
    { id: 13, name: "/science-math", count: "20 datasets", description: "Science & math datasets", icon: Atom, color: "bg-teal-500" },
    { id: 14, name: "/more", count: "50+ api categories", description: "More API Categories Coming soon", icon: Sparkles, color: "bg-violet-500" }
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
          <h1 className="text-6xl font-bold mb-4">Available Resources</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Click any card to view its API endpoint & JSON Data, then copy the URL and use it in your project.
          </p>
        </div>

        <Section title="Common Resources" items={commonResources} />
        <Section title="API Categories" items={apiCategories} />
      </div>
    </div>
  );
}

export default Catalog;
