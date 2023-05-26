import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

const Ssr = ({ users, testApi }) => {
    // console.log(testApi)
    const router = useRouter()
    return (
        <Layout>
            <h1>Server Side Rendering</h1>
            <h4>Coming from API---{testApi.name}</h4>
            <ul>
                {
                    users.map((el, key) => {
                        return (
                            <li key={key} onClick={() => router.push(`/${el.id}`)} style={{ cursor: 'pointer' }}>
                                <p>{el.name}</p>
                                <p>{el.username}</p>
                                <p>{el.website}</p>
                                <p>{el.phone}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </Layout>
    )
}

export default Ssr

export async function getStaticProps() {
    try {
        let resp1 = await axios.get('https://jsonplaceholder.typicode.com/users')
        let resp2 = await axios.get('http://localhost:3000/api/hello')
        // console.log(resp2.data)
        return {
            props: {
                users: resp1.data,
                testApi: resp2.data,
            }
        }
    }
    catch (err) {
        console.log(err)
    }

}