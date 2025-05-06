export default function Home() {
  return (
    <div>
      <div className="absolute bottom-0 left-0 p-8">
        <h1 className="font-bold text-5xl">Hey, I'm Jules</h1>
        <h2 className="font-semibold text-2xl">I'm a French developper who like music</h2>
      </div>

      <div className="absolute bottom-0 right-0 text-right p-8">
        <a href="https://github.com/PoloLoveTaco">
          <p className="text-2xl font-semibold">Github</p>
        </a>
        <a href="https://fr.linkedin.com/in/jules-troll%C3%A9-537a8b232/en">
          <p className="text-2xl font-semibold">Linkedin</p>
        </a>
        <a href="https://www.instagram.com/jules.tr/">
          <p className="text-2xl font-semibold">Instagram</p>
        </a>
      </div>
    </div>
  );
}
