import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Bem-vindo à Home</h1>
      <Button asChild className="mt-5 px-6 py-2 text-lg">
        <Link href="/login">Login</Link>
      </Button>
    </main>
  );
}
