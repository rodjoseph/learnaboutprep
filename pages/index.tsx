import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn about PrEP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h2 className={styles.title}>
          What is PrEP?
        </h2>

      <div className="container">

      <iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/1_eo17YahCo" title="YouTube video player" className='center' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      <p className={styles.description}>PrEP (or pre-exposure prophylaxis) is the use of medications to prevent HIV-negative people from becoming infected with HIV. PrEP medications are FDA approved and have undergone clinical trials to show that they are safe and effective in preventing patients from becoming infected with HIV.

      Even though PrEP has been around for a decade now, there is still a gap in awareness and education about these medications. So we’ve created a website to provide the basics and some additional resources for learning more
      </p>


      <h2 className={styles.title}>
          Who is PrEP for? When should I take PrEP?
        </h2>

        <p className={styles.description}>PrEP can be used by nearly all adults, but it is recommended for people who are considered to be at-risk for new HIV infections. Though identifying specific groups arguably contributes to stigma, groups such as men who have sex with men, transgender women, intravenous drug users, and anyone having sexual contact with the aforementioned groups is typically identified as being of interest.
       </p>

       <h2 className={styles.title}>What are the side effects?</h2>
       <p className={styles.description}>PrEP medications are FDA approved and have been deemed to be safe. Common side effects, such as nausea, may occur, but they typically subside after the first weeks of use. These side effects occur in less than 10% of patients. Additionally, PrEP patients are screened regualrly to make sure adverse side effects or long term illness do not occur.</p>
       <h2 className={styles.title}>How can I get PrEP?</h2>
       <p className={styles.description}>You can get access to PrEP care medication through your healthcare provider, free clinics, telehealth services, PrEP research studies, and online pharmacies.</p>
       </div>
       <h2 className={styles.title}>Can I take PrEP when on hormones?</h2>
       <p className={styles.description}>Yes.</p>
       <h2 className={styles.title}>Can I drink on PrEP?</h2>
       <p className={styles.description}>Yes.</p>
       <h2 className={styles.title}>What is the difference between Truvada and Descovy?</h2>
       <p className={styles.description}>Descovy has a lower risk of side effects overall and is safer for the kidneys. However, it has not been tested sufficiently in cisgender women. Both medications are highly effective and have few side effects.</p>
       <h2 className={styles.title}>Where can I learn more?</h2>
       <p className={styles.description}>From the <a color='blue' href="https://www.cdc.gov/hiv/basics/prep.html">CDC website</a>. You can also use this website to find a provider and find other HIV prevention services.</p>

      </main>
      <footer className={styles.footer}>
        This website was created by Rod Joseph for the 2022 NY Awards Ball and is determined to be informational, but does not constitute medical advice of any kind. The content and views expressed in this video are those of the author and do not necessarily represent the views, opinions or positions of and should not be attributed to Gilead Sciences or any other person or organization.
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a><br/>
        <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><Image alt="Creative Commons License" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>.
      </footer>
    </div>
  )
}

export default Home
