import Link from 'next/link';
import Image from 'next/image';
import styles from './cabecalho.module.css';

export default function Cabecalho() {
    return (
        <header className={styles.menu}>
            <Link href="/">
                <a>
                    <Image
                        width={100}
                        height={100}
                        src="/logo.png"
                        alt="Logo da dmscn store"
                        className={styles.logo}
                    />
                </a>
            </Link>

            <nav>
                <h1 className={styles.titulo}>dmscn store</h1>
                <ul className={styles.listas}>
                    <li className={styles.lista}>
                        <Link href="/carrinho">
                            <Image
                                width={45}
                                height={45}
                                src="/carrinho-icon.png"
                                alt="Carrinho"
                                className={styles.icon}
                            />
                        </Link>
                    </li>
                    <li className={styles.lista}>
                        <Link href="/contato">
                            <Image
                                width={45}
                                height={45}
                                src="/contato-icon.png"
                                alt="Contato"
                                className={styles.icon}
                            />
                        </Link>
                    </li>
                </ul>
                <input className={styles.input} type="text" placeholder="Pesquisar..." />
                <button className={styles.botao}>Adicionar um novo jogo</button>
            </nav>
        </header>
    );
}
