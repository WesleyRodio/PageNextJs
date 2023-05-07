import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Sigmar } from "next/font/google";
const sigmar = Sigmar({ weight: "400", subsets: ["latin"] });

import Heart from "../assets/heart.svg";

import BaseListBox from "../assets/listbox/listbox";

export default function Divertir() {
  const options1 = [
    { id: "0", name: "Famintos" },
    { id: "1", name: "Entediados" },
    { id: "3", name: "Animados" },
  ];
  const options2 = [
    { id: "0", name: "Pretende melhorar" },
    { id: "1", name: "Indo tranquila" },
    { id: "2", name: "Um lixo" },
    { id: "3", name: "Não tem como piorar" },
  ];
  const options3 = [
    { id: "0", name: "-19:00h" },
    { id: "1", name: "20:00h" },
    { id: "2", name: "21:00h" },
    { id: "3", name: "22:00h" },
    { id: "4", name: "+23:00h" },
  ];
  const options4 = [
    { id: "0", name: "Sim" },
    { id: "1", name: "Não" },
  ];

  const [selectedOption1, setSelectedOption1] = useState(options1[0]);
  const [selectedOption2, setSelectedOption2] = useState(options2[0]);
  const [selectedOption3, setSelectedOption3] = useState(options3[0]);
  const [selectedOption4, setSelectedOption4] = useState(options4[0]);

  function createUrl(id1, nome1, id2, nome2, id3, nome3, id4, nome4) {
    const url =
      "/response_sortear?id1=" +
      id1 +
      "&nome1=" +
      nome4 +
      "&id2=" +
      id2 +
      "&nome2=" +
      nome2 +
      "&id3=" +
      id3 +
      "&nome3=" +
      nome3 +
      "&id4=" +
      id4 +
      "&nome4=" +
      nome4;
    return url;
  }

  const url = createUrl(
    selectedOption1.id,
    selectedOption1.name,
    selectedOption2.id,
    selectedOption2.name,
    selectedOption3.id,
    selectedOption3.name,
    selectedOption4.id,
    selectedOption4.name
  );

  return (
    <main className="">
      <header className="text-black text-center bg-white border border-black-300 rounded-md shadow-sm flex flex-row justify-center items-center max-w-full h-20 drop-shadow-md mb-4">
        <div className="menu w-full flex justify-evenly">
          <span className={`${sigmar.className} text-2xl`}>L ❤️ Y</span>
        </div>
      </header>
      <section className=" w-full h-full">
        <div className="center">
          <div className="texto-sobre h-[74vh] flex flex-row">
            <form className="w-full">
              <div className="inputs container mx-auto flex flex-col items-center justify-center mb-9">
                <div className="flex flex-col justify-around max-w-full w-full items-center">
                  <div className="w-3/6">
                    <h1 className="text-center mb-1">Como vocês estão?</h1>
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
                    <button
                      className={` tracking-widest bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full w-32 h-16`}
                    >
                      <Link href={`${url}`}>Sortear</Link>
                      {/* Sortear */}
                    </button>
                  </div>
                </div>
                <Image
                  className="z-[-1] absolute top-[16vw] w-[90vw] animate-[balancar_1s_ease-in-out_infinite]"
                  src={`${Heart.src}`}
                  width={500}
                  height={500}
                  alt="LV"
                />
              </div>
            </form>
            <div className="env container w-auto bg-neutral-800 z-index-1"></div>
          </div>
        </div>
      </section>
      <footer>
        <div>
          <span className={`${sigmar.className} text-2xl flex justify-center`}>We'll never be alone</span>
        </div>
      </footer>
      <input
        type="hidden"
        className="text-black text-center bg-white border border-black-300 rounded-md w-[100%] py-1 pr-3 mb-2 shadow-sm"
      />
      <input
        type="hidden"
        className="text-black text-center bg-dark w-52 py-1 pr-3 hover:bg-rose-700 hover:text-white"
      />
      <input
        type="hidden"
        className="absolute overflow-auto z-10 rounded-md scroll-m-0 bg-white"
      />
    </main>
  );
}
