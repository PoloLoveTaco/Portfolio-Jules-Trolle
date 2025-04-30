import Image from "next/image";

export default function UnderContruction() {
  return (
    <div className="m-auto">
      <Image src="/under-construction.gif" alt="me" height={500} width={500} />
    </div>
  );
}