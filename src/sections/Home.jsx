const Home = () => {
  return (
    <section className='relative' id='home'>
      <img src='/img/sanFrancisco.jpg' alt='San Francisco' />
      <div className='w-full h-full flex flex-col justify-between items-center absolute top-0 py-8'>
        <input className='p-3 rounded-full shadow-sm' placeholder='San Francisco' type='search' />
        <button className='min-w-48 bg-white text-xl text-primary font-semibold p-4 rounded-full shadow-sm'>
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Home;
