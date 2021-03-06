const recommendedPlaces = [
  { bg: 'bg-norway', name: 'Norway', description: 'Beautiful landscapes' },
  { bg: 'bg-newYork', name: 'New York', description: 'Concrete jungle' },
  { bg: 'bg-yosemite', name: 'Yosemite', description: 'A break from the world' },
  { bg: 'bg-seattle', name: 'Seattle', description: 'Big City' },
  { bg: 'bg-switzerland', name: 'Switzerland', description: 'Big City' },
];

const RecommendedCard = ({ bg, name, description }) => {
  return (
    <div className='card'>
      <div className={`h-3/5 ${bg} bg-cover`} />
      <div className='h-2/5 p-4'>
        <p className='font-bold text-xl'>{name}</p>
        <p className='text-md'>{description}</p>
      </div>
    </div>
  );
};

const Recommended = () => {
  return (
    <section className='p-6' id='recommended'>
      <p className='section-title'>Recommended</p>
      <div className='w-auto h-72 flex items-center space-x-4 mt-6 overflow-x-auto overscroll-x-contain overflow-y-hidden'>
        {recommendedPlaces.map((place, i) => (
          <RecommendedCard key={`recommended-place-${i}`} {...place} />
        ))}
      </div>
    </section>
  );
};

export default Recommended;
