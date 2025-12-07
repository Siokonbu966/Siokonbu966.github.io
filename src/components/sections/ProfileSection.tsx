export default function ProfileSection() {
  return (
    <>
    <h1 className="text-2xl border-b-2">Siokonbu</h1>
      <img className="icon" src="siokonbu02_icon.jpg" />

      <h2 className="text-xl">About</h2>
      <p>
        一般エンジニア志望学生<br />
        今はWebとかを勉強していて、<br />
        セキュリティやネットワークについても学びたい。
      </p>

      <h3 className="lg">Profile</h3>
      <ul>
        <li>名前: Siokonbu</li>
        <li>所在地: 日本</li>
      </ul>
  </>
  );
}