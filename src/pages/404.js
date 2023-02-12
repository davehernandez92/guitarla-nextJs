import Layout from '@/components/layout'
import Link from 'next/link'

export default function Page404() {
  return (
    <Layout
        title='Page not found'
    >
        <div className='contenedor'>
            <p className='error'>
                Looks like this page was not found 
            </p>
            <Link className='error-enlace' href='/'>
                Click here to return home!
            </Link>
        </div>
    </Layout>
  )
}
