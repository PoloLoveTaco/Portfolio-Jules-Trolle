type ProjectPanelProps = {
    logo: string;
    name: string;
    link: string;
    description: string;
  };
  
  export default function ProjectPanel({ logo, name, link, description }: ProjectPanelProps) {
    return (
      <div className="w-full h-full p-3 rounded-md transition">
        <img src={logo} alt={name} className="rounded mb-2" />
        <a href={link}>
            <p className="text-2xl font-mono font-bold truncate">{name}</p>
        </a>
        <p className="text-l font-mono font-bold text-zinc-400">{description}</p>
      </div>
    );
  }