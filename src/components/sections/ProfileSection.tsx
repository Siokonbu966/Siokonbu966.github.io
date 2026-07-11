export default function ProfileSection() {
  return (
    <>
      <div className="pt-12">
        <img className="w-48 sm:w-56 md:w-[16rem] lg:w-[18rem]" src="siokonbu02_icon.jpg" />
        <h1 className="pt-8 text-3xl font-bold">Siokonbu</h1>
        <div className="mt-1 border-t border-white/20"></div>

        <div className="pt-4">
          <h2 className="text-xl font-bold">About</h2>
          <div className="mt-4">
            <p>
              一般エンジニア志望学生<br />
              Webとかをふわふわと触っています。<br />
              最近はNixにどハマりしてます。
            </p>
          </div>
        </div>
      </div>
  </>
  );
}
