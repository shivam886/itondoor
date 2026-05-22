import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

// We'll just use a standard controlled form for simplicity right now since useForm with Zod needs extra setup
// and I want to ensure it works smoothly out of the box.

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-brand-darkBg">
      {/* Hero */}
      <section className="py-24 bg-brand-darkBg text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Contact <span className="text-brand-electricBlue">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Get a Free Quote & Fast Service. Reach out to us for any tech support needs.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row neumorphic-card overflow-hidden">
            
            {/* Contact Info */}
            <div className="lg:w-2/5 bg-brand-darkBlue text-white p-6 md:p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-electricBlue/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <p className="text-blue-100 mb-12">Fill up the form and our team will get back to you within 24 hours.</p>
                
                <div className="space-y-8 flex-grow">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-brand-electricBlue shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Phone</h4>
                      <p className="text-blue-100">+91 98765 43210</p>
                      <p className="text-blue-100">+91 11 2345 6789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-brand-electricBlue shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <p className="text-blue-100">support@itondoor.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-brand-electricBlue shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Office Address</h4>
                      <p className="text-blue-100">123 Tech Park, Sector 62,<br/>Noida, Delhi NCR 201309</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5 p-6 md:p-10 lg:p-14">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold dark:text-white">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-brand-electricBlue font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6 dark:text-white">Send us a Message</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue focus:border-transparent outline-none transition-all" placeholder="How can we help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                    <textarea required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue focus:border-transparent outline-none transition-all resize-none" placeholder="Describe your requirement..."></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-electricBlue hover:bg-brand-darkBlue text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-brand-electricBlue/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                    ) : (
                      <>Send Message <Send className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 dark:bg-gray-800 relative">
         <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
           [Google Maps Embed]
         </div>
      </section>
    </div>
  );
}
