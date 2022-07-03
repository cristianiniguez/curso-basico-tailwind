import FAQs from './sections/FAQs';
import Home from './sections/Home';
import Recommended from './sections/Recommended';
import TrendingStays from './sections/TrendingStays';

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
      <footer></footer>
    </>
  );
}

export default App;
