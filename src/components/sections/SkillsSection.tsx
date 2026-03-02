export default function SkillsSection() {
  return (
    <>
      <div className="pt-[1rem]">
        <div>
          <h3 className="text-xl font-bold">Skills</h3>
          <div className="mt-4 w-3xl border-t border-white/10">
            <dl className="divide-y divide-white/10">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-semibold text-gray-100">
                  OS
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-300 sm:col-span-2 sm:mt-0">
                  Windows, Ubuntu, MacOS
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-semibold text-gray-100">
                  Engine, Frameworks
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-300 sm:col-span-2 sm:mt-0">
                  Node.js, React
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-semibold text-gray-100">
                  Qualification
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-300 sm:col-span-2 sm:mt-0">
                  ITパスポート
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}