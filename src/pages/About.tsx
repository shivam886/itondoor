import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Shield, Clock, Users, ThumbsUp, CheckCircle2 } from 'lucide-react';

const GenerativeArtCanvas = ({ isHovered }: { isHovered: boolean }) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        let animationFrameId: number;
        let lines: any[] = [];
        const numLines = 30;

        class Line {
            x: number; y: number; speed: number; angle: number; length: number;
            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.speed = Math.random() * 0.5 + 0.1;
                this.angle = Math.random() * Math.PI * 2;
                this.length = Math.random() * 20 + 5;
            }
            update() {
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                if (this.x < 0 || this.x > canvas!.width || this.y < 0 || this.y > canvas!.height) {
                    this.x = Math.random() * canvas!.width;
                    this.y = Math.random() * canvas!.height;
                }
            }
            draw() {
                ctx!.beginPath();
                ctx!.moveTo(this.x, this.y);
                ctx!.lineTo(this.x - Math.cos(this.angle) * this.length, this.y - Math.sin(this.angle) * this.length);
                ctx!.strokeStyle = `rgba(0, 85, 255, ${Math.random() * 0.3 + 0.1})`;
                ctx!.lineWidth = 1;
                ctx!.stroke();
            }
        }

        const init = () => {
            lines = [];
            for (let i = 0; i < numLines; i++) {
                lines.push(new Line());
            }
        };

        const animate = () => {
            if (isHovered) {
                ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
                lines.forEach(line => {
                    line.update();
                    line.draw();
                });
            } else {
                ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        
        canvas.width = 400;
        canvas.height = 400;
        init();
        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />;
};

const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };
    
    const cardVariants = {
        offscreen: { y: 50, opacity: 0 },
        onscreen: { y: 0, opacity: 1, transition: { type: "spring" as const, bounce: 0.4, duration: 0.8, delay: index * 0.1 } }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative h-[340px] w-full rounded-3xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
        >
            <div 
                style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                className="absolute inset-4 flex flex-col p-6 rounded-2xl overflow-hidden"
            >
                <img 
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-60 dark:opacity-40"
                    onError={(e: any) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/000000/ffffff?text=Image'; }}
                />
                <GenerativeArtCanvas isHovered={isHovered} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 dark:from-black/90 dark:via-black/70 dark:to-black/40 transition-opacity duration-500 rounded-2xl pointer-events-none z-0"></div>
                
                <div className="relative z-10 h-full flex flex-col justify-end pointer-events-none">
                  <div className="w-14 h-14 rounded-2xl bg-brand-electricBlue/20 backdrop-blur-md border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-electricBlue transition-all duration-300 shadow-lg">
                    <feature.icon className="w-7 h-7 text-white group-hover:text-white transition-colors duration-300 drop-shadow-md" />
                  </div>
                  
                  <motion.h3 
                      initial={{ y: 0 }}
                      animate={{ y: isHovered ? -5 : 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="text-xl font-bold mb-2 text-white group-hover:text-brand-electricBlue transition-colors drop-shadow-md"
                  >
                      {feature.title}
                  </motion.h3>
                  
                  <motion.p
                      initial={{ y: 0 }}
                      animate={{ y: isHovered ? -5 : 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.05 }}
                      className="text-sm text-gray-300 leading-relaxed drop-shadow-md"
                  >
                      {feature.desc}
                  </motion.p>
                </div>
            </div>
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
              { icon: Shield, title: 'Expertise', desc: 'Certified technicians with 10+ years of experience.', image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=400&auto=format&fit=crop' },
              { icon: Clock, title: 'Reliability', desc: 'Same-day doorstep service you can count on.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop' },
              { icon: ThumbsUp, title: 'Transparency', desc: 'Upfront pricing with no hidden charges.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop' },
              { icon: Users, title: 'Customer First', desc: '10,000+ satisfied customers and counting.', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=400&auto=format&fit=crop' }
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
