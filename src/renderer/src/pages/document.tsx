import { Link } from 'react-router-dom'

export function Document() {
  return (
    <main className="flex-1 flex items-center justify-center text-rotion-100">
      Documento
      <Link to="/document"> Navegar para Document</Link>
    </main>
  )
}
