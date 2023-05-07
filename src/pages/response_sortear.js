import Image from "next/image";
import Heart from "../assets/heart.svg";
import { useRouter } from "next/router";
import BaseDisc from "../assets/disclosure/disclosure";

import { Sigmar } from "next/font/google";

const sigmar = Sigmar({
  weight: "400",
  subsets: ["latin"],
});

export default function Sorteio() {
  const router = useRouter();

  const { id1, id2, id3, id4 } = router.query;
  var result = [];

  if (id1 == 0) {
    result[0] = "Opção 1: Vamos comer ou";
  } else if (id1 == 1) {
    result[0] = [
      "Que tal assistir algum filme,",
      "ir tomar sorvete ou",
      "vamos atrás de um ponto de ônibus",
    ];
  } else {
    result[0] = [
      "Vamos passear pela cidade",
      "ficar conversando ou",
      "tomar alguma bebida",
    ];
  }

  if (id2 == 0) {
    result[1] = "escutar música juntos talvez.";
  } else if (id2 == 1) {
    result[1] = "conversar sobre como está indo a semana.";
  } else if (id2 == 2) {
    result[1] = "consolar o companheiro ❤️.";
  } else {
    result[1] = "presentear o companheiro ❤️.";
  }

  if (id3 == 0) {
    result[2] = "vamos ir em alguma loja ou aos supermercados.";
  } else if (id3 == 1) {
    result[2] = ["podemos ir só a algumas lojas ou", "ao supermercado."];
  } else if (id3 == 2) {
    result[2] = "vamos ao supermercado.";
  } else if (id3 == 3) {
    result[2] = "perdemos a hora de ir ao supermercado.";
  } else {
    result[2] = "esquece ir aos mercados.";
  }

  if (id4 == 0) {
    result[3] = "Opção 2: Está liberado as compras,";
  } else {
    result[3] = "Que tal economizar um pouco esse mês?";
  }

  function createArrayOfObjects(titles, description) {
    var arrayOfObjects = [];
    var totalDesc = "";
    for (var i = 0; i < description.length; i++) {
      if (!Array.isArray(description[i])) {
        if (totalDesc != "") {
          totalDesc = totalDesc + "\n" + description[i];
        } else {
          totalDesc = description[i];
        }
      } else {
        for (var j = 0; j < description[i].length; j++) {
          if (totalDesc != "") {
            totalDesc = totalDesc + "\n" + description[i][j];
          } else {
            totalDesc = description[i][j];
          }
        }
      }
    }
    var obj = {
      id: titles,
      name: totalDesc,
    };
    arrayOfObjects.push(obj);
    return arrayOfObjects;
  }

  function Fazeres(prop) {
    return (
      <div className="mt-2">
        <BaseDisc name={prop.id} value={prop.name} />
      </div>
    );
  }
  var description = "";
  if (result[3] == "Opção 2: Está liberado as compras,") {
    description = [result[0], result[1], result[3], result[2]];
  } else {
    description = [result[0], result[1], result[2]];
  }

  const tables = createArrayOfObjects("Sugestões", description);
  
  return (
    <>
      <main className="overflow-hidden h-screen">
        <header className="text-black text-center bg-white border border-black-300 rounded-md shadow-sm flex flex-row justify-center items-center max-w-full h-20 drop-shadow-md">
          <div className="menu w-full flex justify-evenly">
            <a href="/" className={`${sigmar.className} text-2xl`}>
              Start Screen
            </a>
          </div>
        </header>
        <section className="flex flex-col items-center w-full h-full">
          <div className="flex justify-center flex-col items-center w-full h-3/6">
            <div
              className={`result w-3/4 flex justify-center mb-4 text-rose-200 ${sigmar.className}`}
            >
              <span className="">O que fazer?</span>
            </div>
            <div className="result w-3/4">
              <div className="w-full px-4">
                <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                  {tables.map((val, index) => (
                    <Fazeres key={index} {...val} />
                  ))}
                </div>
              </div>
            </div>
            <Image
              className="z-[-1] absolute w-[90vw] animate-[balancar_1s_ease-in-out_infinite]"
              src={`${Heart.src}`}
              width={500}
              height={500}
              alt="LV"
            />
          </div>
          <div>
            <span
              className={`${sigmar.className} text-2xl flex justify-center`}
            >
              We'll never be alone
            </span>
          </div>
        </section>
      </main>
      <input
        type="hidden"
        className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 
      h-5 w-5 text-rose-500 rotate-180 transform
      flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75
      flex w-full justify-between rounded-lg bg-rose-100 px-4 py-2 text-left text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75
      px-4 pt-4 pb-2 text-sm text-gray-500
      "
      />
    </>
  );
}
