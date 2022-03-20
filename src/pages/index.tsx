import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | tvDB</title>
      </Head>
      <main className={styles.contentContainer}>
        <section>
          <div className={styles.introduction}>
            <div className={styles.introduction__container}>
              <p className={styles.introduction__container__text}>
                Para você que ama
              </p>

              <ul className={styles.introduction__container__list}>
                <li className={styles.introduction__container__list__item}>
                  drama
                </li>
                <li className={styles.introduction__container__list__item}>
                  comédia
                </li>
                <li className={styles.introduction__container__list__item}>
                  novela
                </li>
                <li className={styles.introduction__container__list__item}>
                  anime
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <span>👋🏻 Olá! Seja muito bem-vindo (a).</span>
          <p>
            Aqui no tvDB você não esquece nenhum episódio da sua série favorita!
            😉
          </p>
          <p>
            Te ajudamos a se organizar, mostrando episódios atrasados, próximos
            episódios e muito mais!
          </p>
        </section>
      </main>
    </>
  )
}

export default Home
