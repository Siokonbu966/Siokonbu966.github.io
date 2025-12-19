export default function ProfileSection() {
  return (
    <>
      <div className="pt-[3rem]">
        <img className="w-[12rem] sm:w-[14rem] md:w-[16rem] lg:w-[18rem]" src="siokonbu02_icon.jpg" />
        <h1 className="pt-[2rem] text-3xl font-bold">Siokonbu</h1>
        <div className="mt-1 border-t border-white/20"></div>

        <div className="pt-[1rem]">
          <h2 className="text-xl font-bold">About</h2>
          <div className="mt-[1rem]">
            <p>
              一般エンジニア志望学生<br />
              今はWebとかを勉強していて、<br />
              セキュリティやネットワークについても学びたい。
            </p>
          </div>
        </div>

        <div className="pt-[1rem]">
          <h3 className="text-xl font-bold">Profile</h3>
          <div className="mt-[1rem]">
            <ul>
              <li>名前: Siokonbu</li>
              <li>所在地: 日本</li>
            </ul>
          </div>
        </div>
      </div>
  </>
  );
}