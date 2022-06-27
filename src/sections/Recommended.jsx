const recommendedPlaces = [
  { bg: 'bg-norway', name: 'Norway', description: 'Beautiful landscapes' },
  { bg: 'bg-newYork', name: 'New York', description: 'Concrete jungle' },
];

const RecommendedCard = ({ i, bg, name, description }) => {
  const isOdd = i % 2 === 0;
  return (
    <div className='card'>
      <div className={`h-3/5 ${bg} bg-cover`} />
      <div
        className={`h-2/5 ${isOdd ? 'bg-secondary' : 'bg-white'} ${
          isOdd ? 'text-white' : 'text-tertiary'
        } p-4`}
      >
        <p className='font-bold text-xl'>{name}</p>
        <p className='text-md'>{description}</p>
      </div>
    </div>
  );
};

const Recommended = () => {
  console.log(recommendedPlaces);
  return (
    <div className='p-6' id='recommended'>
      <p className='text-3xl font-semibold text-primary'>Recomendados</p>
      <div className='w-auto h-72 flex items-center space-x-4 mt-6 overflow-x-auto overscroll-x-contain'>
        {recommendedPlaces.map((place, i) => (
          <RecommendedCard key={`recommended-place-${i}`} i={i} {...place} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
