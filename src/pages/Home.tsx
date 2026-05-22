
import { motion } from 'framer-motion';
import { ArrowRight, Star, Calendar, PenTool, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

import amexLogo from '../assets/brandlogo/amex-1.webp';
import atLogo from '../assets/brandlogo/athenian-tech.webp';
import deloitteLogo from '../assets/brandlogo/deloitte.webp';
import hclLogo from '../assets/brandlogo/hcl-scaled.webp';
import infobahnLogo from '../assets/brandlogo/itinfrastructuresolution_logo-removebg-preview.webp';
import nestleLogo from '../assets/brandlogo/nestle.webp';
import protivitiLogo from '../assets/brandlogo/protiviti-1.webp';
import wiproLogo from '../assets/brandlogo/wipro.webp';
import ceoPhoto from '../assets/ceo photo/Casual-photo_ITonDoor-scaled-e1763317442961.webp';

import { ImagesSlider } from '../components/ui/ImagesSlider';
import heroImg1 from '../assets/hero section images/close-up-man-repairing-computer-chips.webp';
import heroImg2 from '../assets/hero section images/front-view-electronic-handyman.webp';
import heroImg3 from '../assets/hero section images/man-repairing-circuit-board-laptop.webp';
import heroImg4 from '../assets/hero section images/laptop-repair-lab.webp';
import heroImg5 from '../assets/hero section images/people-repairing-computer-chips.webp';
import heroImg6 from '../assets/hero section images/technician-repairing-computer-computer-hardware-repairing-upgrade-technology.webp';

import afterHeroImg from '../assets/after herosection/male-technician-repairing-computer-motherboard-wooden-desk.webp';

import { ServicesShowcase } from '../components/ServicesShowcase';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const images = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden transition-all duration-500 ease-in-out">
        <ImagesSlider className="h-full" images={images}>


        {/* Hero Content */}
        <div className="relative z-50 flex flex-col items-center justify-center w-full text-center px-4 md:px-6 pt-16 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full backdrop-blur-md border border-white/20 bg-white/10 shadow-2xl">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-white font-semibold text-sm tracking-wide">Available Now</span>
              </div>
              <span className="w-px h-4 bg-white/30"></span>
              <span className="text-gray-200 font-medium text-sm tracking-wide">Doorstep IT Support in Delhi NCR</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-4xl md:text-5xl lg:text-[76px] font-extrabold leading-[1.1] tracking-tight mt-8 max-w-4xl drop-shadow-2xl"
          >
            Expert IT support,
            <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-electricBlue filter drop-shadow-lg">
              right at your doorstep.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-medium text-lg md:text-2xl text-gray-200 mt-6 max-w-3xl leading-relaxed drop-shadow-md"
          >
            Fast, reliable, and hassle-free laptop repairs, networking, and complete IT solutions for your home or business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10"
          >
            <Link
              to="/book"
              className="px-8 py-4 rounded-full bg-brand-electricBlue text-white font-medium text-base hover:bg-brand-darkBlue transition-all shadow-lg shadow-brand-electricBlue/25 flex items-center gap-2"
            >
              Book Appointment <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919876543210"
              className="px-8 py-4 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 font-medium text-base hover:bg-white/20 transition-all flex items-center gap-2"
            >
              Call Now
            </a>
          </motion.div>
        </div>
        </ImagesSlider>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-brand-darkBg relative z-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-center relative">
            {/* Image Side */}
            <div className="w-full lg:w-[45%] relative z-10 flex justify-end">
              <img 
                src={afterHeroImg} 
                alt="Expert Computer Repair" 
                loading="lazy"
                className="w-full max-w-[500px] aspect-[4/5] object-cover shadow-sm"
              />
            </div>
            
            {/* Overlapping Content Card */}
            <div className="w-full lg:w-[55%] flex items-center lg:-ml-[8%] mt-8 lg:mt-0 relative z-20 max-w-[600px]">
              <div className="bg-white dark:bg-gray-900 p-8 sm:p-12 shadow-[0_10px_50px_rgba(0,0,0,0.08)] w-full">
                <h2 className="text-[26px] md:text-[34px] font-bold text-gray-900 dark:text-white leading-[1.3] mb-5">
                  A Trusted Name To Customers Over <span className="text-brand-electricBlue">10+ Years</span> For Quality Computer Repair Service.
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-8 leading-[1.8] font-normal">
                  We have been in the repair and service business for over a decade. We have an experienced service department ready to handle all of your repair tasks. Our team will get your device working with a guarantee.
                </p>
                <Link to="/about" className="inline-block bg-brand-electricBlue hover:bg-brand-darkBlue text-white font-bold px-8 py-3.5 transition-colors tracking-[1px] text-[13px] uppercase shadow-lg shadow-brand-electricBlue/25">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Clients Section */}
      <section className="py-8 bg-white dark:bg-brand-darkBg overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center mb-6">
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest">Trusted by Premium Brands</p>
        </div>
        
        <div className="flex flex-col gap-4 md:gap-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Top Scroller */}
          <div className="group flex overflow-hidden py-1 [--gap:4rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row items-center"
                  key={`top-${i}`}
                >
                  <div className="flex items-center justify-center w-40 h-16">
                    <img src={deloitteLogo} alt="Deloitte" className="max-h-8 max-w-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-40 h-16">
                    <img src={amexLogo} alt="American Express" className="max-h-10 max-w-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-40 h-16">
                    <img src={nestleLogo} alt="Nestle" className="max-h-10 max-w-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-40 h-16">
                    <img src={protivitiLogo} alt="Protiviti" className="max-h-8 max-w-full object-contain" />
                  </div>
                </div>
              ))}
          </div>

          {/* Bottom Scroller (Reverse) */}
          <div className="group flex overflow-hidden py-1 [--gap:4rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row items-center"
                  key={`bottom-${i}`}
                >
                  <div className="flex items-center justify-center w-40 h-16">
                    <img src={wiproLogo} alt="Wipro" className="max-h-12 max-w-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-40 h-16">
                    <img src={hclLogo} alt="HCLTech" className="max-h-8 max-w-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-40 h-16">
                    <img src={infobahnLogo} alt="Infobahn" className="max-h-12 max-w-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-40 h-16">
                    <img src={atLogo} alt="AT" className="max-h-12 max-w-full object-contain" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section - Animated Showcase */}
      <div className="bg-white dark:bg-brand-darkBg">
        <ServicesShowcase />
      </div>

      {/* Repair Brands Slider */}
      <section className="py-16 bg-gray-50 dark:bg-[#0b0e14] overflow-hidden border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold dark:text-white">Brands We Repair</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Expert service for all major computer and laptop brands</p>
        </div>
        
        <div className="flex flex-col gap-4 max-w-[1200px] mx-auto transition-all duration-500">
          <div className="group flex overflow-hidden py-4 [--gap:3rem] md:[--gap:4rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row items-center"
                  key={`brand-top-${i}`}
                >
                  {[
                    { name: 'Apple', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
                    { name: 'HP', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
                    { name: 'Dell', url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' },
                    { name: 'Asus', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg' },
                    { name: 'Lenovo', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg' },
                    { name: 'Acer', url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Acer_2011.svg' },
                    { name: 'Samsung', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg' },
                    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' }
                  ].map((brand, idx) => (
                    <div key={idx} className="flex items-center justify-center w-28 h-20 md:w-32 md:h-24 bg-white dark:bg-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-gray-700 rounded-2xl p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
                      <img 
                        src={brand.url} 
                        alt={brand.name} 
                        loading="lazy"
                        className="max-h-full max-w-full object-contain" 
                        onError={(e) => { 
                          e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><text x="50%" y="50%" font-family="sans-serif" font-size="16" font-weight="bold" fill="%23888" text-anchor="middle" dominant-baseline="middle">${brand.name}</text></svg>`; 
                        }} 
                      />
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#0B1120]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400">Get your devices fixed in 3 simple steps.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 max-w-6xl mx-auto">
            {[
              { step: 'Step 1', title: 'Book Appointment', desc: 'Schedule a visit online or call us directly.', icon: Calendar },
              { step: 'Step 2', title: 'Technician Visit', desc: 'Our expert arrives at your doorstep to diagnose.', icon: PenTool },
              { step: 'Step 3', title: 'Receive & Pay', desc: 'Device fixed on-site. Pay only when satisfied.', icon: CreditCard }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                key={i} 
                className="neumorphic-card p-10 text-left group"
              >
                {/* Neumorphic Icon Circle with enhanced hover effects */}
                <div className="mb-8 flex justify-center relative z-10">
                  <div className="relative group-hover:animate-pulse">
                    <div className="neumorphic-icon h-28 w-28 text-brand-electricBlue">
                      <item.icon className="h-10 w-10 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    {/* Glowing ring on hover */}
                    <div className="absolute inset-0 rounded-full border-2 border-brand-electricBlue/40 dark:border-brand-electricBlue/50 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                  </div>
                </div>

                {/* Card Info with slide-up animation */}
                <div className="text-center relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="inline-block rounded-full bg-gray-50 dark:bg-gray-700 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-electricBlue mb-4 shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.8)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.2),-2px_-2px_4px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:scale-105 group-hover:shadow-[0_0_10px_rgba(37,99,235,0.2)]">
                    {item.step}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-brand-electricBlue dark:group-hover:text-blue-400 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-3xl border border-blue-200 dark:border-blue-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / On-Door Banner */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-brand-darkBlue to-brand-electricBlue text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Transparent Pricing at Your Doorstep</h2>
              <p className="text-blue-100 mb-8 text-lg font-medium">No hidden fees, no surprise charges. Get upfront estimates before any work begins.</p>
              <Link to="/book" className="inline-block bg-white text-brand-electricBlue px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg">Get a Free Quote</Link>
            </div>
            
            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { item: 'Screen Replacement', price: '₹2499' },
                { item: 'Keyboard Replacement', price: '₹499' },
                { item: 'Battery Replacement', price: '₹1999' }
              ].map((price, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center hover:bg-white/20 transition-all hover:-translate-y-1 shadow-sm">
                  <h4 className="text-sm font-medium text-blue-100 mb-2">Starting at</h4>
                  <div className="text-3xl font-extrabold mb-2">{price.price}</div>
                  <p className="text-sm text-white/90 font-medium">{price.item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-[#0B1120]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-400">Trusted by thousands of satisfied customers across Delhi NCR.</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn} className="neumorphic-card p-10">
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-6 h-6 fill-brand-orange text-brand-orange" />)}
              </div>
              <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-8 italic">
                "Amazing speedy and quality work! My laptop issue was resolved quickly and professionally. The technician was extremely knowledgeable and transparent about the pricing."
              </p>
              <div>
                <h4 className="font-bold dark:text-white">Rajat Sharma</h4>
                <p className="text-sm text-gray-500">Startup Founder, Noida</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder / Vision Section */}
      <section className="py-24 bg-white dark:bg-brand-darkBg border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <motion.div {...fadeIn} className="w-full md:w-1/3">
              <div className="aspect-square rounded-3xl bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                <img src={ceoPhoto} alt="Founder, ITonDoor" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Our Vision</h2>
              <blockquote className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                "Our mission is to become Delhi NCR's most trusted doorstep IT support brand by delivering fast, reliable, and transparent tech solutions."
              </blockquote>
              <div>
                <h4 className="font-bold text-xl dark:text-white">M Akram Hussain</h4>
                <p className="text-gray-500 dark:text-gray-400 font-medium">Founder, ITonDoor</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-brand-darkBlue text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Your Tech Back on Track?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Book a doorstep visit today and let our certified technicians solve your IT problems fast.</p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-brand-electricBlue rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1"
          >
            Submit Your Details
          </Link>
        </div>
      </section>
    </div>
  );
}
