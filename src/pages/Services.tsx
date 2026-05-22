import { motion } from 'framer-motion';
import { Smartphone, MonitorUp, Wifi, Database, Download, ShieldAlert, Printer, HardDrive, Check } from 'lucide-react';
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
      <section className="py-20 bg-brand-darkBg text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-brand-electricBlue">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
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
                className="neumorphic-card p-8 flex flex-col"
              >
                <div className="neumorphic-icon w-16 h-16 mb-6 mx-0">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{service.desc}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/book" 
                  className="mt-auto w-full py-3 px-4 bg-gray-50 dark:bg-gray-800 hover:bg-brand-electricBlue hover:text-white text-center rounded-xl font-medium transition-colors border border-gray-100 dark:border-gray-700 group-hover:border-transparent dark:text-gray-300"
                >
                  Book Service
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section Placeholder */}
      <section className="py-20 bg-white dark:bg-[#0B1120]">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 dark:text-white">Frequently Asked Questions</h2>
          <div className="text-left space-y-4">
             {[
               { q: 'Do you charge a visiting fee?', a: 'We charge a nominal diagnosis fee which is waived off if you proceed with the repair.' },
               { q: 'How long does a repair take?', a: 'Most software and minor hardware issues are resolved within 1-2 hours on-site. Complex motherboard repairs may take 2-3 days at our lab.' },
               { q: 'Do you provide a warranty on repairs?', a: 'Yes, we provide up to 90 days warranty on spare parts and our service.' }
             ].map((faq, i) => (
                <div key={i} className="neumorphic-card p-6 group">
                 <h4 className="font-bold text-lg mb-2 dark:text-white">{faq.q}</h4>
                 <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
