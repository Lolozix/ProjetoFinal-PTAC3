import Link from 'next/link';
import Image from 'next/image';
import styles from "./rodape.module.css";

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <h1 className={styles.paragrafo}>dmscn store</h1>
            <Image
                className={styles.img}
                width={150}
                height={150}
                src="https://i.pinimg.com/736x/6e/2a/a4/6e2aa483f5da8dbce9c6263fb2298a41.jpg"
                alt="Logo da dmscn store"
            />
            <div className={styles.box}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link className={styles.link} href="/suporte">
                            Suporte
                        </Link>
                    </li>
                </ul>

                <h2 className={styles.dmscn}>Sobre nós</h2>
                <p className={styles.paragrafo}>
                    Aqui na dmscn store, nos dedicamos a oferecer o melhor serviço e produtos de qualidade. Se você tiver alguma dúvida, não hesite em entrar em contato com nosso suporte.
                </p>
            </div>
        </footer>
    );
}
