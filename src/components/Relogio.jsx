import { useState, useEffect } from "react";

function Relogio(){
    const [hora, setHora] = useState(new Date().toLocaleString());
    useEffect(()=> {
        console.log("Relógio MONTADO - Intervalo ligado");

        const intervalo = setInterval(()=>{
            setHora(new Date().toLocaleString());
        },1000);

        return() => {
            console.log("Relogio DESMONTADO");
            clearInterval(intervalo);
        };
    },[]);
    return (
        <span className="font-mono text-emerald-400 text-smbg-slate-800 px-3 rounded-lg">
            {hora}
        </span>
    )
}
export default Relogio;