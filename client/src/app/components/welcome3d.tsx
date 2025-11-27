import Image from "next/image";
export default function Welcome() {
  return (
    <section className="w-1/2 min-h-screen flex flex-col items-start justify-center p-8 pl-70">
      <Image
        src="/bg-3d.png"
        alt="3D Background"
        width={1800}
        height={1800}
        className="absolute top-0 -right-0 -z-10"
      />
    </section>
  );
}
