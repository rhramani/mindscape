import MainLayout from "@/components/layout/MainLayout";
import HomeHero from "@/components/home/HomeHero";
import ProjectDiscoveryModal from "@/components/home/ProjectDiscoveryModal";
import Link from "next/link";
import { MoveRight, ChevronRight, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <ProjectDiscoveryModal />
      
      {/* Hero Section */}
      <HomeHero />

      {/* About Section - Brief */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl -z-10 group-hover:bg-primary/20 transition-all duration-500 transform group-hover:scale-105" />
            <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl">
              <Image 
                src="/assets/images/unsplash/service1.jpg" 
                alt="About MindScape" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            {/* Overlay Info Card */}
            <div className="absolute -bottom-10 -right-10 bg-black text-white p-12 lg:p-16 rounded-2xl shadow-3xl hidden lg:block border border-white/10 group-hover:-translate-y-8 transition-transform duration-500">
               <span className="text-primary text-5xl font-bold mb-4 block leading-none">15+</span>
               <p className="uppercase tracking-[0.4em] text-xs font-bold text-white/40 leading-relaxed mb-6">Honoring <br />Heritage</p>
               <Link href="/about" className="text-xs uppercase tracking-widest font-bold flex items-center hover:text-primary transition-colors">
                 Learn More <MoveRight className="ml-3" size={16} />
               </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-10 group">
            <div className="inline-flex items-center space-x-3">
              <span className="h-[2px] w-12 bg-primary"></span>
              <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold">The Creative Vision</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl text-secondary leading-tight group-hover:text-primary transition-colors">
              Elevating the Art of <br />
              <span className="italic relative z-10">Living & Working.</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              MindScape Design is where architecture meets human identity. We believe that every space should tell a story. With over a decade of experience, we transform visionary ideas into breathtaking realities across residential and commercial landscapes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col space-y-4">
                 <h4 className="font-heading font-bold uppercase tracking-widest text-secondary text-sm">Visionary Concepts</h4>
                 <p className="text-muted-foreground text-sm leading-relaxed">Unique designs that push boundaries of conventional architecture.</p>
              </div>
              <div className="flex flex-col space-y-4">
                 <h4 className="font-heading font-bold uppercase tracking-widest text-secondary text-sm">Unmatched Quality</h4>
                 <p className="text-muted-foreground text-sm leading-relaxed">Pristine craftsmanship and materials that stand the test of time.</p>
              </div>
            </div>

            {/* <div className="pt-6">
              <Link
                href="/about"
                className="px-10 py-5 bg-secondary text-white font-heading font-bold uppercase tracking-widest text-sm hover:bg-primary transition-all duration-300 flex items-center group w-fit"
              >
                Our Journey
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-zinc-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-8 md:space-y-0">
             <div className="space-y-4">
                <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold">Excellence in Craft</span>
                <h2 className="text-4xl lg:text-5xl text-secondary">Our Professional <br /><span className="italic">Service Areas</span></h2>
             </div>
             <p className="text-muted-foreground max-w-sm text-sm uppercase tracking-widest font-medium leading-relaxed pb-2">
                We believe in providing the absolute best architecture, interior, and landscape design services in India.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Residential Interior', img: '/assets/images/unsplash/res1.jpg', desc: 'Crafting luxury homes with personalized aesthetic touches.' },
              { title: 'Commercial Design', img: '/assets/images/unsplash/commercial1.jpg', desc: 'Functional and inspiring work environments for modern teams.' },
              { title: 'Landscape Architecture', img: '/assets/images/unsplash/landscape1.jpg', desc: 'Transforming outdoor spaces into lush, artistic retreats.' },
            ].map((service, i) => (
              <div key={i} className="group relative overflow-hidden bg-white shadow-xl hover:-translate-y-4 transition-all duration-500">
                <div className="relative h-96 overflow-hidden">
                  <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-10 flex flex-col space-y-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-2xl group-hover:text-primary transition-colors uppercase tracking-widest">{service.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.desc}
                    </p>
                    <Link href="/services" className="text-primary text-xs uppercase tracking-widest font-bold flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                       Explore Services <ChevronRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Animated Background Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-100 -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-2xl mx-auto space-y-6">
             <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold block">Legacy of Design</span>
             <h2 className="text-4xl lg:text-5xl text-secondary uppercase tracking-widest">Masterpiece <span className="italic">Portfolio</span></h2>
             <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium leading-relaxed">A curation of our most prestigious architecture and interior projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 auto-rows-[400px]">
             {/* Grid Item 1 - Large */}
             <div className="lg:col-span-8 group relative overflow-hidden rounded-2xl shadow-2xl">
               <Image src="/assets/images/unsplash/gallery3.jpg" alt="Luxury Villa" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
               <div className="absolute top-8 left-8">
                  <span className="bg-primary px-6 py-2 text-white text-[10px] uppercase font-bold tracking-widest">Luxury Villa</span>
               </div>
               <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-3xl font-bold uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">The Crystal Haven</h3>
                  <p className="text-white/60 text-xs uppercase tracking-[0.3em]">Mumbai, Maharashtra</p>
               </div>
             </div>

             {/* Grid Item 2 - Small */}
             <div className="lg:col-span-4 group relative overflow-hidden rounded-2xl shadow-xl">
               <Image src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" alt="Corporate" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
               <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-1">NexGen HQ</h3>
                  <p className="text-white/60 text-[10px] uppercase tracking-widest">Office Space</p>
               </div>
             </div>

             {/* Grid Item 3 - Small */}
             <div className="lg:col-span-4 group relative overflow-hidden rounded-2xl shadow-xl">
               <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Penthouse" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
               <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-1">Skye Residence</h3>
                  <p className="text-white/60 text-[10px] uppercase tracking-widest">Penthouse Interior</p>
               </div>
             </div>

             {/* Grid Item 4 - Medium */}
             <div className="lg:col-span-8 group relative overflow-hidden rounded-2xl shadow-xl">
               <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" alt="Lounge" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
               <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-2xl font-bold uppercase tracking-widest mb-2">Emerald Lounge</h3>
                  <p className="text-white/60 text-xs uppercase tracking-[0.3em]">Hospitality Design</p>
               </div>
             </div>
          </div>

          {/* <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="px-12 py-6 bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white font-heading font-bold uppercase tracking-widest text-sm transition-all duration-300 inline-flex items-center group"
            >
              Explore Full Gallery
              <MoveRight className="ml-4 group-hover:translate-x-2 transition-transform duration-500" size={20} />
            </Link>
          </div> */}
        </div>
      </section>

      {/* Testimonials Marquee / Slider Placeholder */}
      <section className="py-24 bg-secondary text-white relative">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold block">Clients Love</span>
                 <h2 className="text-4xl lg:text-6xl uppercase tracking-[0.1em] leading-tight">Word of mouth, <br /><span className="italic text-primary">Architectural Truth.</span></h2>
                 <p className="text-white/40 text-sm leading-relaxed max-w-sm uppercase tracking-widest">
                   The highest reward for our work is the trust our clients place in us, and the spaces they love to live in.
                 </p>
                 <div className="flex space-x-2 pt-4">
                    <div className="p-4 border border-white/10 hover:border-primary transition-colors cursor-pointer group">
                       <ChevronRight className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <div className="p-4 border border-white/10 hover:border-primary transition-colors cursor-pointer group">
                       <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                 </div>
              </div>

              <div className="relative h-[400px] overflow-hidden group">
                 <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 lg:p-16 rounded-2xl h-full flex flex-col justify-between group-hover:border-primary/50 transition-colors duration-500">
                    <div>
                       <div className="flex mb-8 text-primary">
                          {[...Array(5)].map((_, i) => (
                             <span key={i} className="mr-1">★</span>
                          ))}
                       </div>
                       <p className="text-xl lg:text-2xl text-white italic leading-relaxed mb-8">
                          "MindScape Design transformed our house into a home we never want to leave. Their attention to detail and ability to understand our vision was impeccable."
                       </p>
                    </div>
                    <div>
                       <h4 className="text-lg font-bold uppercase tracking-widest">Archana Singh</h4>
                       <p className="text-white/40 text-xs uppercase tracking-widest">Villa Owner, Pune</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
           <div className="max-w-4xl mx-auto space-y-12">
              <h2 className="text-4xl md:text-6xl lg:text-7xl text-secondary leading-none">
                 Ready to Build Your <br />
                 <span className="italic text-primary font-bold">Dream Concept?</span>
              </h2>
              <p className="text-muted-foreground text-lg italic max-w-2xl mx-auto">
                 "Our philosophy is simple: we create spaces that resonate with your soul. Let's start sketching your future today."
              </p>
              {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                 <Link
                   href="/contact"
                   className="px-12 py-6 bg-primary text-white font-heading font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-2xl inline-flex items-center group"
                 >
                   Hire Our Experts
                   <MessageCircle className="ml-3" size={20} />
                 </Link>
                 <div className="flex items-center space-x-6 text-secondary font-bold uppercase tracking-widest text-sm">
                   <span>OR</span>
                   <Link href="/projects" className="hover:text-primary transition-colors border-b-2 border-secondary hover:border-primary pb-1">
                      View our work first
                   </Link>
                 </div>
              </div> */}
           </div>
        </div>
      </section>
    </MainLayout>
  );
}
