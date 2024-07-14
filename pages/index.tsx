import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter()

  return (
    <div className="w-screen h-screen  flex items-center justify-center gap-x-4">
      <Button variant={"outline"} onClick={() => router.push("/login")}>Login</Button>
      <Button variant={"outline"} onClick={() => router.push("/register")}>Register</Button>
      <Button variant={"outline"} onClick={() => router.push("/protected")}>Protected</Button>
    </div>
  );
}
