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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 font-sans">
      {/* Premium Header Background */}
      <div className="bg-gradient-to-b from-brand-darkBg to-brand-darkBlue pt-32 pb-40 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white tracking-tight">
            Book Your <span className="text-brand-electricBlue">Service</span>
          </h1>
          <p className="text-blue-100 text-lg font-medium">Schedule a technician visit in minutes.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl -mt-24 relative z-10">
        {/* Form Container */}
        <div className="bg-white dark:bg-gray-800 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 p-6 md:p-14">
          
          {/* Progress Tracker */}
          {step < 4 && (
            <div className="flex justify-between mb-12 relative px-2 md:px-8">
              <div className="absolute top-5 left-10 right-10 h-1 bg-gray-100 dark:bg-gray-700 -z-10 rounded-full"></div>
              <div className="absolute top-5 left-10 h-1 bg-brand-electricBlue -z-10 rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(37,99,235,0.4)]" style={{ width: `calc(${((step - 1) / 2) * 100}% - 2.5rem)` }}></div>
              
              {['Device Info', 'Issue Details', 'Your Details'].map((label, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-3 transition-all duration-300 shadow-sm ${step > i + 1 ? 'bg-brand-electricBlue text-white scale-110 ring-4 ring-brand-electricBlue/20' : step === i + 1 ? 'bg-brand-electricBlue text-white ring-4 ring-brand-electricBlue/10 scale-110' : 'bg-gray-50 border-2 border-gray-200 text-gray-400 dark:bg-gray-800 dark:border-gray-600'}`}>
                    {step > i + 1 ? <CheckCircle2 className="w-6 h-6" /> : i + 1}
                  </div>
                  <span className={`text-sm font-bold tracking-wide ${step >= i + 1 ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>{label}</span>
                </div>
              ))}
            </div>
          )}
          {step === 4 ? (
            <div className="text-center py-12">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ type: "spring", bounce: 0.5 }}
                className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner"
              >
                <CheckCircle2 className="w-12 h-12" />
              </motion.div>
              <h2 className="text-3xl font-extrabold mb-4 dark:text-white">Booking Confirmed!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg font-medium">Your appointment request has been received. Our technician will contact you shortly to confirm the timing.</p>
              <button onClick={() => window.location.href = '/'} className="px-10 py-4 bg-brand-electricBlue text-white rounded-xl font-bold hover:bg-brand-darkBlue transition-all shadow-lg hover:-translate-y-1">
                Return to Home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Device Info */}
                {step === 1 && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">What device needs repair?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Laptop', 'Desktop', 'Printer/Scanner', 'Networking/WiFi', 'Data Recovery', 'Other'].map(type => (
                        <label key={type} className="cursor-pointer group">
                          <input type="radio" name="deviceType" value={type} className="peer sr-only" required defaultChecked={type === 'Laptop'} />
                          <div className="p-5 rounded-2xl border-2 border-gray-100 dark:border-gray-700 text-center font-bold text-gray-600 dark:text-gray-400 peer-checked:border-brand-electricBlue peer-checked:bg-blue-50 dark:peer-checked:bg-brand-electricBlue/10 peer-checked:text-brand-electricBlue transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-sm">
                            {type}
                          </div>
                        </label>
                      ))}
                    </div>
                    
                    <div className="space-y-3 mt-8">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Brand / Model (Optional)</label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl border-0 ring-1 ring-gray-200 dark:ring-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue outline-none transition-all font-medium placeholder-gray-400" placeholder="e.g. Dell Inspiron 15" />
                    </div>
                  </div>
                )}

                {/* Step 2: Issue Details */}
                {step === 2 && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Describe the issue</h3>
                    
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Problem Description</label>
                      <textarea required rows={5} className="w-full px-5 py-4 rounded-xl border-0 ring-1 ring-gray-200 dark:ring-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue outline-none transition-all font-medium placeholder-gray-400 resize-none" placeholder="Please describe the issue you're facing..."></textarea>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        <input required type="date" className="w-full pl-14 pr-5 py-4 rounded-xl border-0 ring-1 ring-gray-200 dark:ring-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue outline-none transition-all font-medium" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Details */}
                {step === 3 && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Your Contact Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Full Name</label>
                        <input required type="text" className="w-full px-5 py-4 rounded-xl border-0 ring-1 ring-gray-200 dark:ring-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue outline-none transition-all font-medium placeholder-gray-400" placeholder="John Doe" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Phone Number</label>
                        <input required type="tel" className="w-full px-5 py-4 rounded-xl border-0 ring-1 ring-gray-200 dark:ring-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue outline-none transition-all font-medium placeholder-gray-400" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Complete Address</label>
                      <textarea required rows={3} className="w-full px-5 py-4 rounded-xl border-0 ring-1 ring-gray-200 dark:ring-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue outline-none transition-all font-medium placeholder-gray-400 resize-none" placeholder="House No., Street, Area, City, Pincode"></textarea>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Navigation Buttons */}
              <div className="mt-12 flex gap-4">
                {step > 1 && (
                  <button type="button" onClick={() => setStep(step - 1)} className="px-8 py-4 rounded-xl font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    Back
                  </button>
                )}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 py-4 bg-brand-electricBlue hover:bg-brand-darkBlue text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-brand-electricBlue/30 hover:shadow-brand-electricBlue/50 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="animate-spin w-6 h-6 border-4 border-white/20 border-t-white rounded-full"></span>
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
