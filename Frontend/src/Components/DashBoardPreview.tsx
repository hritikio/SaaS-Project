const DashboardPreview = () => {
  return (
    <div className="mt-20 flex justify-center px-4">
      <div className="w-full max-w-4xl rounded-2xl bg-[#141414] p-6 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-[#1c1c1c] h-40" />

          <div className="rounded-xl bg-[#1c1c1c] h-40 flex items-center justify-center">
            <div className="h-20 w-20 rounded-full border-4 border-purple-500" />
          </div>

          <div className="rounded-xl bg-[#1c1c1c] h-40" />

          <div className="col-span-1 md:col-span-2 rounded-xl bg-[#1c1c1c] h-40" />

          <div className="rounded-xl bg-[#1c1c1c] h-40" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
