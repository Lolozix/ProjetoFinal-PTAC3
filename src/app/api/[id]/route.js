import { NextResponse } from "next/server";
import { listaDeJogosPS5 } from "../route";

export async function GET(req) {
   
    const url = new URL(req.url);
    const id = parseInt(url.pathname.split('/api/')[1], 10);

  
    const objeto = listaDeJogosPS5.find((obj) => obj.id === id);

    if (!objeto) {
        return NextResponse.json({ message: "Item não encontrado" }, { status: 404 });
    }

 
    return NextResponse.json(objeto);
}
