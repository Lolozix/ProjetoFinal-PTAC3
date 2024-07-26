"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./main.module.css";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ErrorFetch from "./ErrorFetch";

export default function Main() {
    const [produtos, setProdutos] = useState([]);
    const [listaCompleta, setListaCompleta] = useState([]);
    const [textoBusca, setTextoBusca] = useState("");
    const [erro, setErro] = useState(false);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const buscarProdutos = async () => {
            try {
                const response = await fetch("http://localhost:3000/api");
                const data = await response.json();
                setProdutos(data);
                setListaCompleta(data);
            } catch {
                setErro(true);
            } finally {
                setCarregando(false);
            }
        };
        buscarProdutos();
    }, []);

    const ordenarAscendente = () => {
        const listaOrdenada = [...produtos].sort((a, b) => 
            a.title.localeCompare(b.title)
        );
        setProdutos(listaOrdenada);
    };

    const ordenarDescendente = () => {
        const listaOrdenada = [...produtos].sort((a, b) => 
            b.title.localeCompare(a.title)
        );
        setProdutos(listaOrdenada);
    };

    const ordenarPrecoMenor = () => {
        const listaOrdenada = [...produtos].sort((a, b) => a.price - b.price);
        setProdutos(listaOrdenada);
    };

    const ordenarPrecoMaior = () => {
        const listaOrdenada = [...produtos].sort((a, b) => b.price - a.price);
        setProdutos(listaOrdenada);
    };

    const buscar = (texto) => {
        setTextoBusca(texto);
        
        if (texto.trim() === "") {
            setProdutos(listaCompleta);
            return;
        }
        
        const novaLista = listaCompleta.filter((produto) =>
            produto.title.toUpperCase().includes(texto.toUpperCase())
        );
        setProdutos(novaLista);
    };

    if (erro) {
        return <ErrorFetch />;
    }

    if (carregando) {
        return <Spinner />;
    }

    return (
        <>
            <div className={styles.filtro}>
                <div>
                    <input
                        type="text"
                        value={textoBusca}
                        placeholder="Pesquise"
                        onChange={(event) => buscar(event.target.value)}
                    />

                    <button onClick={ordenarAscendente} className={styles.botao}>
                        A - Z
                    </button>

                    <button onClick={ordenarDescendente} className={styles.botao}>
                        Z - A
                    </button>

                    <button onClick={ordenarPrecoMaior} className={styles.botao}>
                        Preço Maior
                    </button>

                    <button onClick={ordenarPrecoMenor} className={styles.botao}>
                        Preço Menor
                    </button>
                </div>
            </div>

            <main className={styles.main}>
                {produtos.map((produto) => (
                    <div className={styles.card} key={produto.id}>
                        <h1>{produto.title}</h1>
                        <Image width={300} height={300} src={produto.image} alt={produto.title} />
                        <h3>{produto.price}</h3>
                        <p>{produto.description}</p>
                    </div>
                ))}
            </main>
        </>
    );
}
