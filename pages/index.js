import Head from 'next/head';
import PasswordGenerator from '../src/PasswordGenerator';

export default function Home() {
  return (
    <>
      <Head>
        <title>0Hundred | Password Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PasswordGenerator />
    </>
  )
}
