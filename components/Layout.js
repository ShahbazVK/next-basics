import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'

const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout