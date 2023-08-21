import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout/Index'
import { AppContext } from "../AppContext";
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [text, setText] = useState<string>("");
  return <AppContext.Provider value={''}><Layout><Component {...pageProps} /></Layout></AppContext.Provider>
}
