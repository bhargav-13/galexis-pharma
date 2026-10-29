import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function NotFound() {
  return (
    <div>
      <PageHero title="Page Not Found" subtitle="The page you are looking for doesn't exist or has moved." />
      <section className="section">
        <div className="container text-center">
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </section>
    </div>
  )
}
