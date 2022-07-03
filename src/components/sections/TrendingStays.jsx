const TrendingStaysCard = () => {
  return (
    <div className='h-96 bg-chicago bg-cover rounded-xl'>
      <p className='card-title'>Chicago</p>
      <p className='text-sm pl-8 text-black mr-24'>2 bedrooms, bathroom and kitchen</p>
    </div>
  );
};

const TrendingStays = () => {
  return (
    <section className='p-4' id='trending-stays'>
      <p className='text-3xl text-primary font-semibold pb-4'>Trending Stays</p>
      <div className='flex flex-col space-y-4 items-center justify-center'>
        <TrendingStaysCard />
        <TrendingStaysCard />
      </div>
    </section>
  );
};

export default TrendingStays;
