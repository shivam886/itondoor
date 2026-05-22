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
      <section className="relative py-24 bg-brand-darkBg text-white text-center overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-brand-electricBlue/20 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Contact <span className="text-brand-electricBlue">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium"
          >
            Get a Free Quote & Fast Service. Reach out to us for any tech support needs.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800/80 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            
            {/* Contact Info */}
            <div className="lg:w-2/5 bg-gradient-to-br from-brand-electricBlue to-blue-700 text-white p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-3xl font-extrabold mb-4">Contact Information</h3>
                <p className="text-blue-100 mb-12 text-lg font-medium">Fill up the form and our team will get back to you within 24 hours.</p>
                
                <div className="space-y-10 flex-grow">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md">
                        <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-1">Phone</h4>
                      <p className="text-blue-100">+91 98765 43210</p>
                      <p className="text-blue-100">+91 11 2345 6789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md">
                        <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-1">Email</h4>
                      <p className="text-blue-100">support@itondoor.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-1">Office Address</h4>
                      <p className="text-blue-100">123 Tech Park, Sector 62,<br/>Noida, Delhi NCR 201309</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5 p-8 md:p-12 bg-white dark:bg-gray-800/50">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-extrabold dark:text-white">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Thank you for reaching out. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-brand-electricBlue font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white">Send us a Message</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Your Name</label>
                      <input required type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Email Address</label>
                      <input required type="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Subject</label>
                    <input required type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue focus:border-transparent outline-none transition-all" placeholder="How can we help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Message</label>
                    <textarea required rows={5} className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-electricBlue focus:border-transparent outline-none transition-all resize-none" placeholder="Describe your requirement..."></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 mt-4 bg-brand-electricBlue hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-electricBlue/30 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
      <section className="h-[450px] w-full relative border-t border-gray-200 dark:border-gray-800">
         <iframe 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            loading="lazy" 
            allowFullScreen 
            src="https://maps.google.com/maps?q=Sector%2062,%20Noida&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700 dark:invert-[0.9] dark:hue-rotate-180 dark:contrast-75"
         ></iframe>
      </section>
    </div>
  );
}
