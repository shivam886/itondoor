import { motion } from 'framer-motion';
import { Shield, Clock, Users, ThumbsUp, CheckCircle2 } from 'lucide-react';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-brand-darkBg">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-darkBg text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-electricBlue/20 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About <span className="text-brand-electricBlue">ITonDoor</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            We are Delhi NCR's leading doorstep IT support service, dedicated to providing fast, reliable, and transparent tech solutions for homes and businesses.
          </motion.p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Expertise', desc: 'Certified technicians with 10+ years of experience.' },
              { icon: Clock, title: 'Reliability', desc: 'Same-day doorstep service you can count on.' },
              { icon: ThumbsUp, title: 'Transparency', desc: 'Upfront pricing with no hidden charges.' },
              { icon: Users, title: 'Customer First', desc: '10,000+ satisfied customers and counting.' }
            ].map((feature, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                key={i} 
                className="neumorphic-card p-6 text-center"
              >
                <div className="neumorphic-icon w-14 h-14 mx-auto mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#0B1120]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div {...fadeIn} className="lg:w-1/2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3" 
                  alt="Team working together" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Our Story</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  ITonDoor was founded with a simple mission: to eliminate the hassle of carrying heavy desktops and fragile laptops to repair shops, only to wait for days.
                </p>
                <p>
                  Over the past decade, we've grown from a small team of passionate technicians to Delhi NCR's most trusted doorstep IT support brand. We've successfully serviced over 10,000 devices for homes, students, professionals, and businesses.
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['10+ Years Experience', '10,000+ Devices Serviced', 'Transparent Pricing', 'Certified Technicians'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-electricBlue" />
                      <span className="font-medium dark:text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
