"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./main.module.css";
import { useEffect, useState } from "react";
import Loading from "./Spinner";
import ErrorFetch from "./ErrorFetch";

export default function Main() {
const [produto, setlistaProdutos] = useState([]);
const [listComplete, setListComplet] = useState([]);
const [textSearch, setTextSearch] = useState("");
const [isError, setIsError] = useState(false);

useEffect(() => {
    const getproduto = async () => {
    try {
        const response = await fetch("http://localhost:3000/api");
        const data = await response.json();
        setlistaProdutos(data);
        setListComplet(data);
        console.log(data)
    } catch {
        setIsError(true);
    }
    };
    getproduto();
}, []);

const Az = () => {
    const listAux = [...produto].sort((a, b) => 
        a.titulo.localeCompare(b.titulo)
    );

    setlistaProdutos(listAux);
};

const Za = () => {
    const listAux = [...produto].reverse((a, b) => 
        b.titulo.localeCompare(a.titulo)
    );

    setlistaProdutos(listAux);
};

const orderPrecoMenor = () => {
    const listaPreco = [...produto].sort((a, b) => a.preco - b.preco);

    setlistaProdutos(listaPreco);
};

const orderPrecoMaior = () => {
    const listaPreco = [...produto].reverse((a, b) => b.preco - a.preco);

    setlistaProdutos(listaPreco);
};

const search = (text) => {
    setTextSearch(text); 

    if (text.trim() == ""){
        setlistaProdutos(listComplete);
        return;
    }
    const newList = produto.filter((produ) =>
    produ.titulo.toUpperCase().trim().includes(textSearch.toUpperCase().trim())
    );
    setlistaProdutos(newList);
};
if (isError == true) {
    return <ErrorFetch/>;
}

if (listComplete[0] == null) {
    return <Loading />;
}

return(
    <>
        <div className={styles.filtro}>
        <div>
        <input
            type="text"
            value={textSearch}
            placeholder="Pesquise"
            onChange={(event) => search(event.target.value)}/>

        <button onClick={Az} className={styles.botao}> A - Z</button>

        <button onClick={Za} className={styles.botao}>Z - A</button>

        <button onClick={orderPrecoMaior} className={styles.botao}>
            {" "}
            Preço Maior
        </button>
        <button onClick={orderPrecoMenor} className={styles.botao}>
            {" "}
            Preço Menor
        </button>
        </div>
    </div>

    <main className={styles.main}>
        {produto.map((listaJogos) => (
        <div className={styles.card} key={listaJogos.id}>
            <Image width={300} height={300} src={listaJogos.imagem} />
            <h3>{listaJogos.titulo}</h3>
            <h3>R${listaJogos.preco}</h3>
            <p>{listaJogos.descricao}</p>
        </div>
        ))}
    </main>
    </>
)
}