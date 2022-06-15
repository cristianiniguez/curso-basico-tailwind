import Home from './sections/Home';

function App() {
  return (
    <>
      <nav></nav>
      <div id='tab-bar'></div>
      <main>
        <Home />
        <section id='recommended'></section>
        <section id='trending-stays'></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
