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
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-brand-darkBg pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">Book Your <span className="text-brand-electricBlue">Service</span></h1>
          <p className="text-gray-600 dark:text-gray-400">Schedule a technician visit in minutes.</p>
        </div>

        {/* Progress Tracker */}
        {step < 4 && (
          <div className="flex justify-between mb-10 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 -z-10 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 h-1 bg-brand-electricBlue -z-10 -translate-y-1/2 transition-all duration-300" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
            
            {['Device Info', 'Issue Details', 'Your Details'].map((label, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors ${step > i + 1 ? 'bg-brand-electricBlue text-white' : step === i + 1 ? 'bg-brand-electricBlue text-white ring-4 ring-brand-electricBlue/20' : 'bg-gray-200 dark:bg-gray-800 text-gray-500'}`}>
                  {step > i + 1 ? <CheckCircle2 className="w-6 h-6" /> : i + 1}
                </div>
                <span className={`text-xs font-medium ${step >= i + 1 ? 'text-brand-electricBlue' : 'text-gray-500'}`}>{label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Form Container */}
        <div className="neumorphic-card p-8 md:p-12">
          {step === 4 ? (
            <div className="text-center py-10">
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold mb-4 dark:text-white">Booking Confirmed!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Your appointment request has been received. Our technician will contact you shortly to confirm the timing.</p>
              <button onClick={() => window.location.href = '/'} className="px-8 py-3 bg-brand-electricBlue text-white rounded-lg font-medium hover:bg-brand-darkBlue transition-colors">
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
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold dark:text-white mb-4">What device needs repair?</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {['Laptop', 'Desktop', 'Printer/Scanner', 'Networking/WiFi', 'Data Recovery', 'Other'].map(type => (
                        <label key={type} className="cursor-pointer">
                          <input type="radio" name="deviceType" value={type} className="peer sr-only" required defaultChecked={type === 'Laptop'} />
                          <div className="p-4 rounded-xl border-2 border-gray-100 dark:border-gray-800 text-center font-medium dark:text-gray-300 peer-checked:border-brand-electricBlue peer-checked:bg-brand-electricBlue/5 transition-all hover:border-brand-electricBlue/50">
                            {type}
                          </div>
                        </label>
                      ))}
                    </div>
                    
                    <div className="space-y-2 mt-6">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Brand / Model (Optional)</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue focus:border-transparent outline-none transition-all" placeholder="e.g. Dell Inspiron 15" />
                    </div>
                  </div>
                )}

                {/* Step 2: Issue Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold dark:text-white mb-4">Describe the issue</h3>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Problem Description</label>
                      <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue focus:border-transparent outline-none transition-all" placeholder="Please describe the issue you're facing..."></textarea>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input required type="date" className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue focus:border-transparent outline-none transition-all" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Details */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold dark:text-white mb-4">Your Contact Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Complete Address</label>
                      <textarea required rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue focus:border-transparent outline-none transition-all" placeholder="House No., Street, Area, City, Pincode"></textarea>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Navigation Buttons */}
              <div className="mt-10 flex gap-4">
                {step > 1 && (
                  <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-3 rounded-lg font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    Back
                  </button>
                )}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 py-3 bg-brand-electricBlue hover:bg-brand-darkBlue text-white rounded-lg font-bold transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
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
