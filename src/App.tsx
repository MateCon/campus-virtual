import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Banner />
        <Gallery />
      </div>
      <Footer />
    </>
  );
}

export default App;
