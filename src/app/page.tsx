import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <header>
      <p>This is header</p>
     </header>
     <main>
      <p>This is main</p>
      <Button variant={"destructive"} size={"lg"} className="rounded-full">
        Click Here <ArrowDown />
      </Button>
     </main>
     <footer>
      <p>This is footer</p>
     </footer>
    </div>
  );
}
