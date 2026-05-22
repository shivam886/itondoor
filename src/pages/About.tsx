import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Shield, Clock, Users, ThumbsUp, CheckCircle2 } from 'lucide-react';

const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group p-8 rounded-3xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300"
        >
            <div className="w-14 h-14 rounded-2xl bg-brand-electricBlue/10 flex items-center justify-center mb-6 group-hover:bg-brand-electricBlue group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-brand-electricBlue group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                {feature.desc}
            </p>
        </motion.div>
    );
};

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
              <FeatureCard key={i} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#0B1120]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div {...fadeIn} className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-electricBlue/30 to-blue-400/20 blur-3xl rounded-full opacity-60 dark:opacity-20"></div>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop" 
                  alt="Technician repairing" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                 <div className="w-12 h-12 bg-brand-electricBlue/10 rounded-full flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-brand-electricBlue" />
                 </div>
                 <div>
                    <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">10+ Years</div>
                    <div className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">Of Trusted Service</div>
                 </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-electricBlue/10 text-brand-electricBlue text-sm font-bold tracking-widest mb-4">
                OUR STORY
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white">
                Expertise you can <span className="text-brand-electricBlue">trust.</span>
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
                <p>
                  ITonDoor was founded with a simple mission: to eliminate the hassle of carrying heavy desktops and fragile laptops to repair shops, only to wait for days.
                </p>
                <p>
                  Over the past decade, we've grown from a small team of passionate technicians to Delhi NCR's most trusted doorstep IT support brand. We've successfully serviced over 10,000 devices for homes, students, professionals, and businesses.
                </p>
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['10+ Years Experience', '10,000+ Devices Serviced', 'Transparent Pricing', 'Certified Technicians'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                      <div className="w-10 h-10 rounded-full bg-brand-electricBlue/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-brand-electricBlue" />
                      </div>
                      <span className="font-bold text-sm text-gray-900 dark:text-white">{item}</span>
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
