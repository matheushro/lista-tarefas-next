import { useSession, signIn, signOut } from 'next-auth/react'
import styles from "./styles.module.css"
import Link from "next/link"

export function Header(){
    const {data: session, status} = useSession()
    return(
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <h1 className={styles.logo}>Tarefas+</h1>
                    </Link>

                    {session?.user && (
                        <Link href="/dashboard" className={styles.Link}>
                            meu Painel
                        </Link>
                    )}
                </nav>
                {status === 'loading' ? (
                    <></>
                ) : session ?(
                    <button className={styles.loginButton} onClick={() => signOut()}>Olá {session?.user?.name}</button>
                ) : (
                    <button className={styles.loginButton} onClick={() => signIn("google")}>Acessar</button>
                )}
            </section>
        </header>
    )
}