type ProjectPanelProps = {
    name: string;
    link: string;
    description: string;
  };
  
  export default function ProjectPanel({ name, link, description }: ProjectPanelProps) {
    return (
      <div className="w-full max-w-130 h-full p-3 rounded-md transition border-2 border-solid border-white">
        <a href={link}>
          <p className="text-3xl font-mono font-bold truncate">{name}</p>
        </a>
        <p className="text-l font-mono font-bold text-zinc-400">{description}</p>
      </div>
    );
  }