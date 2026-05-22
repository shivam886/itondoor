import { motion } from 'framer-motion';
import { Smartphone, MonitorUp, Wifi, Database, Download, ShieldAlert, Printer, HardDrive, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'laptop-repair',
      icon: Smartphone,
      title: 'Laptop Repair',
      desc: 'Complete laptop diagnosis and repair at your doorstep.',
      features: ['Screen Replacement', 'Keyboard Replacement', 'Battery Issues', 'Motherboard Repair', 'Overheating Fixes']
    },
    {
      id: 'desktop-repair',
      icon: MonitorUp,
      title: 'Desktop Repair',
      desc: 'Expert troubleshooting for all desktop PC brands and custom builds.',
      features: ['Hardware Upgrades', 'Power Supply Issues', 'Custom PC Building', 'Component Replacement']
    },
    {
      id: 'networking',
      icon: Wifi,
      title: 'Networking Solutions',
      desc: 'Reliable network setup for homes and small businesses.',
      features: ['Router Configuration', 'WiFi Dead Zone Fixing', 'LAN Setup', 'Network Security']
    },
    {
      id: 'data-recovery',
      icon: Database,
      title: 'Data Recovery',
      desc: 'Secure recovery of deleted files and damaged hard drives.',
      features: ['Accidental Deletion', 'Corrupted Drives', 'Format Recovery', 'Backup Setup']
    },
    {
      id: 'software',
      icon: Download,
      title: 'Software Installation',
      desc: 'Hassle-free installation and configuration of essential software.',
      features: ['OS Installation (Windows/Mac)', 'Office Suites', 'Driver Updates', 'System Optimization']
    },
    {
      id: 'virus-removal',
      icon: ShieldAlert,
      title: 'Virus Removal',
      desc: 'Thorough malware scanning and removal to secure your system.',
      features: ['Malware Removal', 'Ransomware Protection', 'Antivirus Setup', 'System Cleaning']
    },
    {
      id: 'printer',
      icon: Printer,
      title: 'Printer Support',
      desc: 'Fixing printer jams, connection issues, and driver setups.',
      features: ['Network Printer Setup', 'Driver Installation', 'Paper Jam Fixes', 'Scanner Configuration']
    },
    {
      id: 'cctv',
      icon: HardDrive,
      title: 'CCTV Setup',
      desc: 'Professional installation and maintenance of security cameras.',
      features: ['Camera Installation', 'DVR/NVR Configuration', 'Mobile Viewing Setup', 'Maintenance']
    }
  ];

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
            Our <span className="text-brand-electricBlue">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium"
          >
            Professional doorstep tech support for all your IT needs.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={service.id} 
                className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-electricBlue/10 flex items-center justify-center mb-6 group-hover:bg-brand-electricBlue group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-brand-electricBlue group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-brand-electricBlue transition-colors">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed font-medium">{service.desc}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium group/item">
                      <ChevronRight className="w-4 h-4 text-brand-electricBlue shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/book" 
                  className="mt-auto w-full py-3 px-4 bg-gray-50 dark:bg-gray-700/50 text-brand-electricBlue hover:bg-brand-electricBlue hover:text-white dark:text-gray-300 dark:hover:bg-brand-electricBlue text-center rounded-xl font-bold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-electricBlue/20 border border-transparent group-hover:border-brand-electricBlue/20"
                >
                  Book Service
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#0B1120]">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="text-left space-y-6">
             {[
               { q: 'Do you charge a visiting fee?', a: 'We charge a nominal diagnosis fee which is waived off if you proceed with the repair.' },
               { q: 'How long does a repair take?', a: 'Most software and minor hardware issues are resolved within 1-2 hours on-site. Complex motherboard repairs may take 2-3 days at our lab.' },
               { q: 'Do you provide a warranty on repairs?', a: 'Yes, we provide up to 90 days warranty on spare parts and our service.' }
             ].map((faq, i) => (
                <div key={i} className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                 <h4 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-brand-electricBlue transition-colors">{faq.q}</h4>
                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{faq.a}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
