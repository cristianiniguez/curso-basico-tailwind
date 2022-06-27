const Home = () => {
  return (
    <section className='relative' id='home'>
      <img src='/img/sanFrancisco.jpg' alt='San Francisco' />
      <div className='w-full h-full flex flex-col justify-between items-center absolute top-0 py-8'>
        <input
          className='p-3 rounded-full shadow-sm transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12'
          placeholder='San Francisco'
          type='search'
        />
        <button className='min-w-48 bg-white text-lg text-primary font-semibold p-4 rounded-full shadow-sm transition duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110'>
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Home;
