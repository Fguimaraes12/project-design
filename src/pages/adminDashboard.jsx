function AdminDashboard() {

  const Sidebar = () => (
    <div className="
        w-64 fixed h-full p-4 
        bg-white/5 backdrop-blur-md 
        border-r border-white/10 
        shadow-xl
        z-40 text-white
      ">
      
      
      <ul className="space-y-4 pt-10 text-xl">
        <li>
          <a href="#" className="flex items-center p-2 rounded-lg bg-blue-600/50 hover:bg-blue-600 transition-colors">
            <span className="ml-3">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-colors">
            <span className="ml-3">Gerenciar APIs</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-colors">
            <span className="ml-3">Usuários</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-colors">
            <span className="ml-3">Faturamento</span>
          </a>
        </li>
      </ul>
    </div>
  );

  const MetricCard = ({ title, value, change }) => (
    <div className="
        p-6 rounded-xl 
        bg-white/5 backdrop-blur-sm 
        border border-white/10 
        shadow-lg
        
      ">
      <p className="text-base font-medium text-gray-300">{title}</p>
      <p className="text-4xl font-bold text-white mt-1">{value}</p>
      <p className={`text-sm mt-2 ${change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>
        {change} desde o mês passado
      </p>
    </div>
  );

  return (
    <div className="flex bg-black min-h-screen ">
      
      <Sidebar />
      <main className="flex-1 ml-64 p-10 text-white py-40">
        
        <h1 className="text-5xl font-extrabold mb-12">Dashboard Principal</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricCard title="APIs Ativas" value="452" change="+12%" />
          <MetricCard title="Novos Usuários" value="89" change="+5%" />
          <MetricCard title="Receita (Mês)" value="R$ 15.4K" change="-2%" />
          <MetricCard title="Consultas (Dia)" value="1.2M" change="+18%" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Uso de API por Mês</h2>
            <div className="h-80 bg-black/30 rounded-lg flex items-center justify-center text-gray-500">
              [Gráfico de Linhas de Tráfego Aqui]
            </div>
          </div>
          
          <div className="lg:col-span-1 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Atividade Recente</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="p-2 rounded hover:bg-white/10 transition-colors">Usuário X criou nova chave API.</li>
              <li className="p-2 rounded hover:bg-white/10 transition-colors">Plano Premium expirou para o Cliente Y.</li>
              <li className="p-2 rounded hover:bg-white/10 transition-colors">API 'Analytics' atingiu 99% de limite de uso.</li>
              <li className="p-2 rounded hover:bg-white/10 transition-colors">Novo usuário cadastrado (felipe@...).</li>
            </ul>
          </div>

        </div>
        
      </main>
    </div>
  );
}

export default AdminDashboard;