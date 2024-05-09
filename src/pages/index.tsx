'use client'
import { useState } from "react";
import { calcularMedia } from "@/functions/calcularMedia";
import Teste from "@/components/Teste";
import Link from "next/link";
import rota from "./rota";


export default function Home() {

  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [media, setMedia] = useState(0);
  const [exibirMedia, setExibirMedia] = useState(false);

  const calculoMedia = () => {
    const resultadoMedia = calcularMedia(nota1, nota2, nota3);
    setMedia(resultadoMedia);
    setExibirMedia(true);
  }


  return (
    <main className="w-full h-screen flex flex-col justify-start items-center justify-items-center p-4">

        <div className="flex flex-col w-3/4 items-center gap-2">
          <input type="text" className="border border-blue-500 focus:outline-none rounded" 
          
          onChange={(e)=>setNota1(parseFloat(e.target.value))}/>

          <input type="text" className="border border-blue-500 focus:outline-none rounded" onChange={(e)=>setNota2(parseFloat(e.target.value))}/>

          <input type="text" className="border border-blue-500 focus:outline-none rounded" onChange={(e)=>setNota3(parseFloat(e.target.value))}/>

          <button onClick={calculoMedia}
          className="bg-laranja hover:bg-laranja-hover rounded p-2 text-white">Calcular nota</button>
        </div>


        
        {exibirMedia ? <Teste media={media}/>:null}

      <Link href={"rota"}>
        <button className="bg-laranja hover:bg-laranja-hover rounded p-2 text-white mt-2">Vamos para outra página!</button>
      </Link>
    </main>
  );
}
