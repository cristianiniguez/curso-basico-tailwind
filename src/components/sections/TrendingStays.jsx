const trendingStays = [
  {
    className: 'bg-chicago lg:col-span-full',
    title: 'Chicago',
    description: '2 rooms, bathroom and kitchen.',
  },
  {
    className: 'bg-la lg:row-span-2',
    title: 'Los Angeles',
    description: '4 rooms, 3 bathrooms, kitchen and private poll.',
  },
  {
    className: 'bg-miami',
    title: 'Miami',
    description: '3 rooms, 2 bathrooms, kitchen and amazing sea view.',
  },
  {
    className: 'bg-bali',
    title: 'Bali',
    description: '2 rooms, 2 bathrooms, kitchen and private pool.',
  },
];

const TrendingStaysCard = ({ className, title, description }) => {
  return (
    <div className={`w-full h-full ${className} bg-cover bg-center rounded-xl`}>
      <p className='card-title'>{title}</p>
      <p className='text-sm lg:text-lg pl-8 text-white mr-24'>{description}</p>
    </div>
  );
};

const TrendingStays = () => {
  return (
    <section className='p-4' id='trending-stays'>
      <p className='text-3xl text-primary font-semibold pb-4'>Trending Stays</p>
      <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 auto-rows-[24rem]'>
        {trendingStays.map((t, i) => (
          <TrendingStaysCard key={`trending-stay-${i}`} {...t} />
        ))}
      </div>
    </section>
  );
};

export default TrendingStays;
