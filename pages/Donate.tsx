
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const Donate: React.FC = () => {
  const { language, text } = useLanguage();
  const [donationType, setDonationType] = useState<'one-time' | 'recurring'>('one-time');
  const [amount, setAmount] = useState<number | string>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const presetAmounts = [500, 1000, 5000];

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value && !isNaN(Number(value))) {
        setAmount(Number(value));
    } else if (value === '') {
        setAmount('');
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a payment gateway
    console.log({
        donationType,
        amount,
        //...other form data
    });
    setIsSubmitted(true);
  };
  
  if (isSubmitted) {
    return (
        <div className="bg-white py-16 lg:py-24 flex items-center justify-center">
            <div className="text-center p-8 bg-slate-50 rounded-lg shadow-md max-w-lg mx-auto">
                <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-slate-800 mb-2">{text.donationSuccess}</h1>
                <p className="text-slate-600 mb-6">{text.donationSuccessMsg}</p>
                <button className="bg-brand-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-brand-blue-600 transition-colors mb-4">
                    {text.downloadReceipt}
                </button>
                <br/>
                <Link to="/" className="text-sm text-brand-blue-600 hover:underline">
                    {text.backToHome}
                </Link>
            </div>
        </div>
    );
  }

  return (
    <div className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <h1 className={`text-3xl md:text-4xl font-bold text-center text-slate-800 mb-2 ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}>
            {text.makeDonation}
          </h1>
          <p className="text-center text-slate-600 mb-8">{text.donationMessage}</p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-full mb-8">
              <button type="button" onClick={() => setDonationType('one-time')} className={`py-2 rounded-full font-semibold transition-colors ${donationType === 'one-time' ? 'bg-white shadow' : 'text-slate-600'}`}>
                {text.oneTime}
              </button>
              <button type="button" onClick={() => setDonationType('recurring')} className={`py-2 rounded-full font-semibold transition-colors ${donationType === 'recurring' ? 'bg-white shadow' : 'text-slate-600'}`}>
                {text.recurring}
              </button>
            </div>

            <div className="mb-8">
              <label className="block text-lg font-semibold text-slate-700 mb-4">{text.chooseAmount}</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {presetAmounts.map(preset => (
                  <button key={preset} type="button" onClick={() => handleAmountClick(preset)} className={`py-3 px-2 rounded-lg font-bold text-lg border-2 transition-colors ${amount === preset ? 'bg-brand-blue-500 text-white border-brand-blue-500' : 'bg-white text-slate-700 border-slate-300 hover:border-brand-blue-400'}`}>
                    ₹{preset}
                  </button>
                ))}
                 <input
                  type="number"
                  placeholder={text.customAmount}
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="py-3 px-4 col-span-2 md:col-span-4 rounded-lg font-bold text-lg border-2 border-slate-300 focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 w-full"
                />
              </div>
            </div>

            <div className="space-y-4 mb-6">
                 <h3 className="text-lg font-semibold text-slate-700">{text.personalInfo}</h3>
                <input type="text" placeholder={text.fullName} required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500"/>
                <input type="email" placeholder={text.email} required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500"/>
                <textarea placeholder={text.yourMessage} rows={3} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500"></textarea>
            </div>
            
            <div className="flex items-center mb-8">
                <input id="anonymous" type="checkbox" className="h-4 w-4 text-brand-blue-600 border-slate-300 rounded focus:ring-brand-blue-500" />
                <label htmlFor="anonymous" className="ml-2 block text-sm text-slate-800">{text.donateAnonymously}</label>
            </div>

            <button type="submit" className="w-full bg-brand-blue-500 text-white font-bold text-lg py-4 rounded-full hover:bg-brand-blue-600 transition-transform hover:scale-105 shadow-lg">
                {text.donateNow} (₹{amount || 0})
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;
