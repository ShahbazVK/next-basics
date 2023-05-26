import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Layout from '../components/Layout'


const SingleUser = ({ user }) => {
    const router = useRouter()
    console.log(user)
    return (
        <Layout>
            <div>
                <p>{user.name}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
            </div>
            <button onClick={() => router.push("/Ssr")}>Go back</button>
        </Layout>
    )
}
export default SingleUser

export async function getServerSideProps(context) {
    try {
        let { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
        return {
            props: {
                user: data,
            }
        }
    }
    catch (error) {
        console.log(error)
    }
}