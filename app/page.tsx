import Image from "next/image";
import TypingInfo from "@/components/TypingInfo";
import UserTyping from "@/components/UserTyping";
import N5 from "./lib/data/N5"

const demoWord = N5[Math.floor(Math.random() * 10)];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-5 bg-dbackground">
      <h3 id="romanji" className="text-base font-light mb-1">{demoWord.romaji}</h3>
      <h1 id="word" className="text-6xl font-bold mb-1">{demoWord.word}</h1>
      <h1 id="meaning" className="text-xl mb-10">{demoWord.meaning}</h1>

      <div id="type_box" className="relative">
        <h1 id="furigana_word" className="text-6xl mb-2">{demoWord.furigana || demoWord.word}</h1>
        <UserTyping userInput="チ" className="absolute inset-0" />

      </div>


      <div className="h-[150px]" />
      <TypingInfo />
    </main>
  );
}
