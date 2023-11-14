import './globals.css'
import Layout from '../../components/Layout'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    className='h-full bg-neutral-950 text-base antialiased text-neutral-100'>
      <body className='flex min-h-full flex-col'>
        <Layout>
        {children}
        </Layout>
        </body>
    </html>
  )
}
