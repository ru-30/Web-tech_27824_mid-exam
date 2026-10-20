import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroPage from './pages/HeroPage';
import AboutPage from './pages/AboutPage';
import BooksPage from './pages/BooksPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import NewsletterPage from './pages/NewsletterPage';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroPage />
        <AboutPage />
        <BooksPage />
        <EventsPage />
        <ContactPage />
        <NewsletterPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
