export default function CreateSK() {
  const SkeletonInput = ({ width = "w-full" }) => (
    <div className={`${width} h-10 bg-white/20 rounded-lg mb-3 animate-pulse backdrop-blur-md`} />
  );

  const SkeletonLine = ({ width = "w-1/2" }) => (
    <div className={`${width} h-4 bg-white/20 rounded mb-2 animate-pulse backdrop-blur-md`} />
  );

  const SkeletonSection = ({ titleLines = 1, inputCount = 3 }) => (
    <div className="mb-10">
      {Array(titleLines)
        .fill()
        .map((_, i) => (
          <SkeletonLine key={i} width="w-1/3" />
        ))}
      <div className="space-y-2 mt-4">
        {Array(inputCount)
          .fill()
          .map((_, i) => (
            <SkeletonInput key={i} />
          ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="w-full max-w-4xl mx-auto mt-20">
        {/* Resource Name */}
        <div className="mb-8">
          <SkeletonLine width="w-1/4" />
          <SkeletonLine width="w-2/3" />
          <SkeletonInput />
        </div>

        {/* Schema Section */}
        <div className="mb-12">
          <SkeletonLine width="w-1/4" />
          <SkeletonLine width="w-2/3" />
          <div className="space-y-3 mt-4">
            {Array(4)
              .fill()
              .map((_, i) => (
                <div key={i} className="flex gap-3">
                  <SkeletonInput width="w-40" />
                  <div className="flex-1 flex gap-2">
                    <SkeletonInput width="w-1/2" />
                    <SkeletonInput width="w-1/2" />
                  </div>
                </div>
              ))}
          </div>
          <div className="w-10 h-10 bg-blue-600/40 rounded-full mt-5 animate-pulse backdrop-blur-md" />
        </div>

        {/* Object Template */}
        <SkeletonSection titleLines={2} inputCount={1} />
        <div className="bg-[#29292948] border border-[#383838] rounded-lg p-6 mb-10 animate-pulse backdrop-blur-md">
          <div className="h-40 bg-white/10 rounded-lg" />
        </div>

        {/* Endpoints */}
        <SkeletonLine width="w-1/4" />
        <SkeletonLine width="w-2/3" />
        <div className="space-y-3 my-7">
          {Array(5)
            .fill()
            .map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-12 h-10 rounded bg-white/20 animate-pulse backdrop-blur-md" />
                <SkeletonInput />
              </div>
            ))}
        </div>

        {/* Example JSON */}
        <div className="bg-[#29292948] border border-[#383838] rounded-lg p-6 animate-pulse backdrop-blur-md">
          <div className="h-32 bg-white/10 rounded-lg" />
        </div>

        {/* Button */}
        <div className="mt-10 w-48 h-14 rounded-md bg-blue-600/40 animate-pulse backdrop-blur-md mx-auto" />
      </div>
    </div>
  );
}
