import Home from './components/sections/Home';
import Recommended from './components/sections/Recommended';
import TrendingStays from './components/sections/TrendingStays';
import FAQs from './components/sections/FAQs';
import Footer from './components/Footer';
import TabBar from './components/TabBar';

function App() {
  return (
    <>
      <nav></nav>
      <main>
        <Home />
        <Recommended />
        <TrendingStays />
        <FAQs />
      </main>
      <Footer />
      <TabBar />
    </>
  );
}

export default App;
