import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";
import { Sigmar } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import ImageLY from "./assets/LY.png";
import Heart from "./assets/heart.svg";

import BaseListBox from "./assets/listbox/listbox";

const sigmar = Sigmar({
  weight: "400",
  subsets: ["latin"],
});

export default function Divertir() {
  const options1 = [
    { id: "0", name: "Fome" },
    { id: "1", name: "Tédio" },
    { id: "3", name: "Animados" },
  ];
  const options2 = [
    { id: "0", name: "Melhorou agora" },
    { id: "1", name: "Tudo bem" },
    { id: "2", name: "Horrível" },
    { id: "3", name: "Chata" },
  ];
  const options3 = [
    { id: "4", name: "-19:00h" },
    { id: "5", name: "20:00h" },
    { id: "6", name: "21:00h" },
    { id: "7", name: "22:00h" },
    { id: "8", name: "+23:00h" },
  ];
  const options4 = [
    { id: "0", name: "Sim" },
    { id: "1", name: "Não" },
  ];

  const [selectedOption1, setSelectedOption1] = useState(options1[0]);
  const [selectedOption2, setSelectedOption2] = useState(options2[0]);
  const [selectedOption3, setSelectedOption3] = useState(options3[0]);
  const [selectedOption4, setSelectedOption4] = useState(options4[0]);

  return (
    <main className="overflow-x-hidden overflow-y-hidden">
      <header className="flex flex-row justify-center items-center max-w-full h-20 drop-shadow-md">
        <div className="menu w-full flex justify-evenly">
          <a href="/divertir">Dançar</a>
          <a href="/divertir">Passear</a>
          <a href="/divertir">Caminhar</a>
        </div>
      </header>
      <section className=" w-full h-full">
        <div className="center">
          <div className="texto-sobre h-[80vh] flex flex-row">
            <div className="inputs container mx-auto flex flex-col items-center justify-center">
              <div className="flex flex-col justify-around max-w-full w-full items-center">
                <div className="w-3/6">
                  <h1 className="text-center mb-1">Como você estão?</h1>
                  <BaseListBox
                    options={options1}
                    selectedValue={selectedOption1}
                    setSelectedValue={setSelectedOption1}
                  />
                </div>
                <div className="w-3/6">
                  <h1 className="text-center mb-1">Como está a semana?</h1>
                  <BaseListBox
                    options={options2}
                    selectedValue={selectedOption2}
                    setSelectedValue={setSelectedOption2}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-around max-w-full w-full items-center">
                <div className="w-3/6">
                  <h1 className="text-center mb-1">Que horas são?</h1>
                  <BaseListBox
                    options={options3}
                    selectedValue={selectedOption3}
                    setSelectedValue={setSelectedOption3}
                  />
                </div>
                <div className="w-3/6">
                  <h1 className="text-center mb-1">Tem dinheiro?</h1>
                  <div className="rounded-md">
                    <BaseListBox
                      options={options4}
                      selectedValue={selectedOption4}
                      setSelectedValue={setSelectedOption4}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-around mt-14">
                <div>
                  <button className={` tracking-widest bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full w-32 h-16 ${sigmar.className}`}>
                    Sortear
                  </button>
                </div>
              </div>
              <Image
                className="z-[-1] absolute top-[30vw] w-[100vw] animate-[balancar_1s_ease-in-out_infinite]"
                src={`${Heart.src}`}
                width={500}
                height={500}
              />
            </div>
            <div className="env container w-auto bg-neutral-800 z-index-1"></div>
          </div>
        </div>
      </section>
      <footer>
        <div >
    <span className={` text-4xl ${sigmar.className} flex justify-center`}> I and You</span>
        </div>
      </footer>
      <style></style>
    </main>
  );
}
