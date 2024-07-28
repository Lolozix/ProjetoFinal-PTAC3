
import Image from "next/image";
import styles from "./jogos.module.css";
export default async function Produto({params}){
    
    const response = await fetch("http://localhost:3000/api/" + params.id);
   
    const data = await response.json();
    return(
        <>
        <div className={styles.card} key={data.id}>
            <Image width={300} height={300} src={data.imagem} />
            <h3>{data.titulo}</h3>
            <h3>R${data.preco}</h3>
            <p>{data.descricao}</p>
        </div>
        </>
    );
}