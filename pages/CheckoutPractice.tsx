
import React, { useState } from 'react';

const CheckoutPractice: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    card: '',
    expiry: '',
    cvv: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto bg-white p-12 rounded-2xl shadow-xl text-center space-y-4 animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-3xl font-bold text-slate-900" id="confirmation-header">Order Placed!</h2>
        <p className="text-slate-500">Your practice order has been successfully completed.</p>
        <p className="text-xs font-mono bg-slate-100 p-2 rounded text-slate-400">Transaction ID: CONF-778899X</p>
        <button 
          onClick={() => window.location.hash = 'scenarios'}
          className="mt-6 text-indigo-600 font-bold hover:underline"
        >
          Return to Scenarios
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold">Checkout Workflow</h2>
        <div className="flex items-center gap-2">
            {[1, 2, 3].map(s => (
                <div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step === s ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                    {s}
                </div>
            ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 space-y-6">
        {step === 1 && (
          <div className="space-y-4 animate-in slide-in-from-right duration-300">
            <h3 className="text-lg font-bold">Shipping Information</h3>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input type="text" name="name" id="shipping-name" required value={formData.name} onChange={handleInputChange} className="w-full border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm border p-2" placeholder="John Doe" />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input type="email" name="email" id="shipping-email" required value={formData.email} onChange={handleInputChange} className="w-full border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm border p-2" placeholder="john@example.com" />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                    <input type="text" name="address" required value={formData.address} onChange={handleInputChange} className="w-full border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm border p-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                    <input type="text" name="city" required value={formData.city} onChange={handleInputChange} className="w-full border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm border p-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">ZIP Code</label>
                    <input type="text" name="zip" required value={formData.zip} onChange={handleInputChange} className="w-full border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm border p-2" />
                </div>
            </div>
            <button type="button" onClick={nextStep} className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors">Continue to Payment</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-in slide-in-from-right duration-300">
            <h3 className="text-lg font-bold">Payment Details</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
                    <input type="text" name="card" id="card-number" required value={formData.card} onChange={handleInputChange} className="w-full border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm border p-2" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Expiry</label>
                        <input type="text" name="expiry" required value={formData.expiry} onChange={handleInputChange} className="w-full border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm border p-2" placeholder="MM/YY" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">CVV</label>
                        <input type="password" name="cvv" id="card-cvv" required value={formData.cvv} onChange={handleInputChange} className="w-full border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm border p-2" placeholder="***" />
                    </div>
                </div>
            </div>
            <div className="flex gap-4">
                <button type="button" onClick={prevStep} className="w-1/3 bg-slate-100 text-slate-600 font-bold py-3 rounded-lg hover:bg-slate-200">Back</button>
                <button type="button" onClick={nextStep} className="w-2/3 bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700">Review Order</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-in slide-in-from-right duration-300">
            <h3 className="text-lg font-bold">Review Your Order</h3>
            <div className="bg-slate-50 p-4 rounded-lg space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-slate-500">Shipping to:</span>
                    <span className="font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-slate-500">Payment:</span>
                    <span className="font-medium">Ending in {formData.card.slice(-4)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-indigo-600">$149.00</span>
                </div>
            </div>
            <div className="flex gap-4">
                <button type="button" onClick={prevStep} disabled={isSubmitting} className="w-1/3 bg-slate-100 text-slate-600 font-bold py-3 rounded-lg hover:bg-slate-200 disabled:opacity-50">Back</button>
                <button 
                  type="submit" 
                  id="submit-order"
                  disabled={isSubmitting}
                  className="w-2/3 bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Processing...
                    </>
                  ) : 'Complete Purchase'}
                </button>
            </div>
          </div>
        )}
      </form>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-blue-700 text-sm">
        <p className="font-bold">QA Engineer Notes:</p>
        <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Step 1 & 2 have standard <code>input</code> fields with <code>name</code> attributes.</li>
            <li>The "Complete Purchase" button has an <code>id="submit-order"</code>.</li>
            <li>There's a 2-second mock delay on final submission (test your explicit waits!).</li>
        </ul>
      </div>
    </div>
  );
};

export default CheckoutPractice;
