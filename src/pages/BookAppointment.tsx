import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar } from 'lucide-react';

export default function BookAppointment() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(4); // Success step
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-brand-darkBg pt-24 pb-20 font-sans">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
            Book <span className="text-brand-electricBlue">Service</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium">Schedule a technician visit in minutes.</p>
        </div>

        {/* Minimalist Progress Tracker */}
        {step < 4 && (
          <div className="flex justify-between items-center mb-12 relative px-4">
            <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-gray-100 -z-10 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-8 h-[2px] bg-brand-electricBlue -z-10 -translate-y-1/2 transition-all duration-500 ease-out" style={{ width: `calc(${((step - 1) / 2) * 100}% - 4rem)` }}></div>
            
            {['Device Info', 'Issue Details', 'Your Details'].map((label, i) => (
              <div key={i} className="flex flex-col items-center gap-3 bg-white dark:bg-brand-darkBg px-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${step > i + 1 ? 'bg-brand-electricBlue text-white' : step === i + 1 ? 'border-2 border-brand-electricBlue text-brand-electricBlue' : 'border-2 border-gray-200 text-gray-400'}`}>
                  {step > i + 1 ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${step >= i + 1 ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>{label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Minimalist Form Container */}
        <div>
          {step === 4 ? (
            <div className="text-center py-16 px-8 border border-gray-100 rounded-3xl">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ type: "spring", bounce: 0.5 }}
                className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-10 h-10" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Booking Confirmed</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-10 font-medium">Your appointment request has been received. Our technician will contact you shortly to confirm the timing.</p>
              <button onClick={() => window.location.href = '/'} className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all">
                Return to Home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Device Info */}
                {step === 1 && (
                  <div className="space-y-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">What device needs repair?</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {['Laptop', 'Desktop', 'Printer/Scanner', 'Networking/WiFi', 'Data Recovery', 'Other'].map(type => (
                        <label key={type} className="cursor-pointer group">
                          <input type="radio" name="deviceType" value={type} className="peer sr-only" required defaultChecked={type === 'Laptop'} />
                          <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center font-bold text-gray-500 dark:text-gray-400 peer-checked:border-brand-electricBlue peer-checked:text-brand-electricBlue transition-all duration-300 hover:border-gray-300">
                            {type}
                          </div>
                        </label>
                      ))}
                    </div>
                    
                    <div className="space-y-2 mt-8">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Brand / Model (Optional)</label>
                      <input type="text" className="w-full px-0 py-3 border-b-2 border-gray-200 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white focus:border-brand-electricBlue outline-none transition-all font-medium placeholder-gray-300" placeholder="e.g. Dell Inspiron 15" />
                    </div>
                  </div>
                )}

                {/* Step 2: Issue Details */}
                {step === 2 && (
                  <div className="space-y-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Describe the issue</h3>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Problem Description</label>
                      <textarea required rows={4} className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white focus:border-brand-electricBlue outline-none transition-all font-medium placeholder-gray-300 resize-none" placeholder="Please describe the issue you're facing..."></textarea>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        <input required type="date" className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white focus:border-brand-electricBlue outline-none transition-all font-medium" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Details */}
                {step === 3 && (
                  <div className="space-y-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Your Contact Details</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Full Name</label>
                        <input required type="text" className="w-full px-0 py-3 border-b-2 border-gray-200 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white focus:border-brand-electricBlue outline-none transition-all font-medium placeholder-gray-300" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Phone Number</label>
                        <input required type="tel" className="w-full px-0 py-3 border-b-2 border-gray-200 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white focus:border-brand-electricBlue outline-none transition-all font-medium placeholder-gray-300" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Complete Address</label>
                      <textarea required rows={2} className="w-full px-0 py-3 border-b-2 border-gray-200 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white focus:border-brand-electricBlue outline-none transition-all font-medium placeholder-gray-300 resize-none" placeholder="House No., Street, Area, City, Pincode"></textarea>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Navigation Buttons */}
              <div className="mt-12 flex gap-4 pt-8 border-t border-gray-100">
                {step > 1 && (
                  <button type="button" onClick={() => setStep(step - 1)} className="px-8 py-4 rounded-full font-bold text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                    Back
                  </button>
                )}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 py-4 bg-brand-electricBlue hover:bg-blue-700 text-white rounded-full font-bold transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="animate-spin w-5 h-5 border-2 border-white/20 border-t-white rounded-full"></span>
                  ) : (
                    step === 3 ? 'Confirm Booking' : 'Next Step'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
