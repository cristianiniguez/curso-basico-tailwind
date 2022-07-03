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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
