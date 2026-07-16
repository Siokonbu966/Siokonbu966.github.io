export default function ProfileSection() {
  return (
    <section className="relative px-6 pt-16 sm:pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-blue-600/40 to-indigo-700/40 blur-lg" />
            <img
              className="relative w-48 rounded-2xl shadow-2xl sm:w-56 md:w-[16rem] lg:w-[18rem]"
              src="siokonbu02_icon.jpg"
              alt="Siokonbu"
            />
          </div>
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Siokonbu
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white">About</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            一般エンジニア志望学生<br />
            Webとかをふわふわと触っています。<br />
            最近はNixにどハマりしてます。
          </p>
        </div>
      </div>
    </section>
  );
}
