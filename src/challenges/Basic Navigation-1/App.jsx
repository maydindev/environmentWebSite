import { BrowserRouter, Link } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>

      <main>{/* TODO: URL'ye göre doğru bileşeni oluştur */}</main>
    </BrowserRouter>
  )
}

/* <Link /> bileşenini henüz öğrenmedik, bu yüzden bu görevde sizin için sağlanmıştır.
İşte yapmanız gerekenler:
React Router kullanarak, kullanıcı ana sayfadayken (URL /'dir) <Home /> bileşenini ve kullanıcı /contact adresine gittiğinde <Contact /> bileşenini render edin.
Bu bileşenler <main></main> elementinin içinde render edilmelidir. */
