import { AppLink } from "@/components/AppLink";
import { Title } from "@/components/Title";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">Hello World</h1>
      <div className="p-10 bg-black">
        <Title label="Hello World" />
      </div>
    </div>
  );
}
