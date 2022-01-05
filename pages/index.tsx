import type { NextPage } from 'next'
import useSWR from 'swr'
import axios from 'axios'

const API_URL = 'https://random-data-api.com/api/id_number/random_id_number'
const fetcher = (url: string) => axios.get(url).then(res => res.data)

const Home: NextPage = () => {
  const { data, error } = useSWR(API_URL, fetcher)
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <>
      <h1>Hello There User #{data.id}</h1>
      <h2>Have an incredibly average day</h2>
    </> 
  )

}

export default Home
