import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title={"Home"}>
      {/* <Header /> */}
      <h1>Welcome!</h1>
      <Link style={{ textDecoration: 'underline', color: 'blue' }} href="http://localhost:3000/Ssr">Check details of all users</Link>
      {/* <Footer /> */}
    </Layout>
  )
}
