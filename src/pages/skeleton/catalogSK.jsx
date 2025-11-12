


export default function CatalogSK() {
  const SkeletonCard = () => (
    <div className="relative overflow-hidden rounded-xl border-2 border-[#383838] bg-[#29292948] backdrop-blur-md p-6 animate-pulse">
      <div className="w-12 h-12 rounded-lg mb-4 bg-white/20" />
      <div className="h-4 bg-white/30 rounded w-1/2 mb-2" />
      <div className="h-3 bg-white/20 rounded w-1/3 mb-3" />
      <div className="h-3 bg-white/10 rounded w-3/4" />
    </div>
  );

  const SectionSkeleton = ({ title }) => (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-8 text-gray-500">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array(4).fill().map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="h-10 bg-white/30 rounded w-2/3 mb-4 animate-pulse" />
          <div className="h-4 bg-white/20 rounded w-1/2 animate-pulse" />
        </div>

        <SectionSkeleton title="Common Resources" />
        <SectionSkeleton title="API Categories" />
      </div>
    </div>
  );
}



/* 


function CatalogSK(){

   const Section = ({ title = "aaa", items = "aaaa" }) => (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-8 text-gray-300">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => {
          const Icon = item;
          return (
            <div
              key={item}
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#2e2e2e] to-[#000000fb] border-2 border-[#383838] bg-[#29292948] p-6 cursor-pointer hover:scale-[1.02] transition-transform"
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 ${item} rounded-lg flex items-center justify-center mb-4`}>
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
  return(
    <div>

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
    </div>
  )
}

export default CatalogSK */