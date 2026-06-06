export default function Loading() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 space-y-3">
          <div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200" />
          <div className="h-5 w-96 animate-pulse rounded bg-gray-100" />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-[16/10] rounded-2xl bg-gray-200" />
              <div className="mt-4 space-y-2">
                <div className="h-4 w-20 rounded bg-gray-200" />
                <div className="h-5 w-full rounded bg-gray-200" />
                <div className="h-4 w-3/4 rounded bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
