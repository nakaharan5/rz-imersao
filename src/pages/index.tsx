'use client'
import { useState } from "react";
import { calcularMedia } from "@/functions/calcularMedia";


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
    <>
      <div>
        <div>
          <input type="number" className="border border-blue-500" 
          
          onChange={(e)=>setNota1(parseFloat(e.target.value))}/>

          <input type="number" className="border border-blue-500" onChange={(e)=>setNota2(parseFloat(e.target.value))}/>

          <input type="number" className="border border-pretro" onChange={(e)=>setNota3(parseFloat(e.target.value))}/>

          <button onClick={calculoMedia}>Calcular nota</button>
        </div>
        
        {exibirMedia ? <p>A média é: {media}</p> : <p>Apareceu nada</p>}
      </div>
    </>
  );
}
