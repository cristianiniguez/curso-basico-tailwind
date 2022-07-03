const questions = [
  {
    question: 'Payment Methods',
    answer: 'We accept VISA, MasterCard, American Express, Paypal and Binance',
  },
  {
    question: 'Cancellation Policy',
    answer: 'We accept VISA, MasterCard, American Express, Paypal and Binance',
  },
  {
    question: 'Long Stays',
    answer: 'We accept VISA, MasterCard, American Express, Paypal and Binance',
  },
];

const FAQs = () => {
  return (
    <section className='p-4 flex flex-col space-y-4' id='faqs'>
      <p className='text-3xl text-primary font-semibold mt-6'>FAQs</p>
      {questions.map(({ question, answer }, i) => (
        <div key={`question-${i}`}>
          <p className='text-xl font-medium text-primary'>{question}</p>
          <p className='text-md pt-2'>{answer}</p>
        </div>
      ))}
    </section>
  );
};

export default FAQs;
