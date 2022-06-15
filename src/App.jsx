import Home from './sections/Home';
import Recommended from './sections/Recommended';

function App() {
  return (
    <>
      <nav></nav>
      <div id='tab-bar'></div>
      <main>
        <Home />
        <Recommended />
        <section id='trending-stays'></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
