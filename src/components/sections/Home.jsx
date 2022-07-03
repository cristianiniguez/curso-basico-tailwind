const Home = () => {
  return (
    <section
      className='bg-sanFrancisco lg:bg-sanFranciscoDesktop bg-cover bg-center h-[36rem] lg:h-[40rem] flex flex-col justify-between lg:justify-center items-center lg:items-start space-y-8 px-8 py-16'
      id='home'
    >
      <input
        className='p-3 rounded-full shadow-sm transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden'
        placeholder='San Francisco'
        type='search'
      />
      <p className='hidden lg:block text-4xl font-bold'>Find More Locations like this</p>
      <button className='min-w-48 bg-white text-lg text-primary font-semibold p-4 rounded-full shadow-sm transition duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110'>
        Explore More
      </button>
    </section>
  );
};

export default Home;
