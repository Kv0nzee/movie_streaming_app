import { NextPageContext } from 'next'
import { signOut, getSession } from 'next-auth/react'

import useCurrentUser from '@/hooks/useCurrentUser';

export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if(!session){
    return {
      redirect:{
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props:{

    }
  }

}

export default function Home() {

  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="m-10">Movie Streaming APP</h1>
      <p>Logged in as: {user?.email}</p>
      <button className="w-full h-10" onClick={() => signOut()}>Logout</button>
    </>
  )
}
