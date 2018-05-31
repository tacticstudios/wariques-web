import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'Wariques' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Wariques</a></Link>
      </nav>
    </header>

    { children }

    <footer>
      {'Soy el pinchi futer'}
    </footer>
  </div>
)