export default function ProfileSection() {
  return (
    <section className="px-6 pt-16 sm:pt-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-16">
          <img
            className="w-32 rounded-lg shadow-lg sm:w-40 md:w-[12rem] lg:w-[14rem]"
            src="siokonbu02_icon.jpg"
            alt="Siokonbu"
          />
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Siokonbu
            </h1>
          </div>
        </div>

        <div className="mt-12 max-w-2xl text-left">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">About</h2>
          <div className="mt-4 h-0.5 w-16 bg-blue-600" />
          <p className="mt-8 text-lg leading-relaxed text-slate-300">
            Webとかをふわふわと触っています。<br />
            最近はNixにハマってたり。 <br />
            スプラトゥーンを愛してます。<br />
            最近の弱点はqwerty配列でタイピングができないこと。
          </p>
        </div>
      </div>
    </section>
  );
}
