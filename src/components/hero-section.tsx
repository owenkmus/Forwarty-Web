'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"

const heroCarouselImages = [
  PlaceHolderImages.find(p => p.id === 'hero-bg-1'),
  PlaceHolderImages.find(p => p.id === 'hero-bg-2'),
  PlaceHolderImages.find(p => p.id === 'hero-bg-3'),
].filter(Boolean); // Filter out undefined values

const heroTexts = [
  "Control total de tu operación logística",
  "Visibilidad global, decisiones inteligentes",
  "ERP diseñado para agentes de carga"
];

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [api, setApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentSlide(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsVideoOpen(true);
    const contactSection = document.getElementById('contacto');
    if(contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const textItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.5 } }
  };


  return (
    <>
      <section id="inicio" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <Carousel
          setApi={setApi}
          plugins={[autoplayPlugin.current]}
          className="absolute inset-0 w-full h-full -z-20"
          opts={{ loop: true }}
        >
          <CarouselContent>
            {heroCarouselImages.map((image, index) => image && (
              <CarouselItem key={index}>
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            className="flex flex-col items-center"
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={textItemVariants}
          >
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 font-headline max-w-4xl"
              >
                {heroTexts[currentSlide]}
              </h1>
          </motion.div>
          <motion.p
            className="max-w-xl mx-auto text-lg text-white/80 mb-8"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Soluciones innovadoras que optimizan tu cadena de suministro, reducen costos y potencian el crecimiento de tu negocio.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Button asChild size="lg">
              <Link href="#modulos">Explora nuestras soluciones <ArrowRight className="ml-2 h-5 w-5"/></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="#contacto" onClick={handleDemoClick}>Ver demo <PlayCircle className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 bg-background border-border">
          <DialogHeader className="p-4">
            <DialogTitle className="text-foreground">Demo de Forwarty</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
