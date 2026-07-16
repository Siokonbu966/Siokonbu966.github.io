export default function ProfileSection() {
  return (
    <section className="px-6 pt-16 sm:pt-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <img
            className="w-48 rounded-lg shadow-lg sm:w-56 md:w-[16rem] lg:w-[18rem]"
            src="siokonbu02_icon.jpg"
            alt="Siokonbu"
          />
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Siokonbu
          </h1>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-blue-600" />
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
