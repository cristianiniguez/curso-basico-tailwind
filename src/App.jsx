import Home from './components/sections/Home';
import Recommended from './components/sections/Recommended';
import TrendingStays from './components/sections/TrendingStays';
import FAQs from './components/sections/FAQs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <nav></nav>
      <div id='tab-bar'></div>
      <main>
        <Home />
        <Recommended />
        <TrendingStays />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}

export default App;
