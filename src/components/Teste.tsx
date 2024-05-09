export default function Teste({media}:any){
    return(
        <div className="bg-laranja flex flex-col m-2 p-4 w-3/4 rounded items-center">
            <h1>Sua nota foi calculada com sucesso!</h1>
            <p className="font-bold text-white">{media.toFixed(2)}</p>
        </div>
    );
}