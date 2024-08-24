import Image from "next/image";
import TypingInfo from "@/components/TypingInfo";
import N5 from "./lib/data/N5"

const demoWord = N5[Math.floor(Math.random() * 10)];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h3 className="text-base font-light mb-1">{demoWord.romaji}</h3>
      <h1 className="text-6xl font-bold mb-1">{demoWord.word}</h1>
      <h1 className="text-xl mb-10">{demoWord.meaning}</h1>

      <h1 className="text-6xl mb-2">{demoWord.furigana || demoWord.word}</h1>

      
      <div className="h-[150px]"/>
      <TypingInfo />
    </main>
  );
}
