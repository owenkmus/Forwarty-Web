'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle, X } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-illustration');
const heroBgImage = PlaceHolderImages.find(p => p.id === 'hero-background');

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsVideoOpen(true);
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="inicio" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {heroBgImage && (
          <Image
            src={heroBgImage.imageUrl}
            alt={heroBgImage.description}
            fill
            priority
            className="object-cover opacity-20 -z-20"
            data-ai-hint={heroBgImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/50 to-background bg-gradient-animated -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center lg:text-left">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6 font-headline"
                variants={itemVariants}
              >
                Transformamos la logística global con <span className="text-primary">software inteligente</span>
              </motion.h1>
              <motion.p
                className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground mb-8"
                variants={itemVariants}
              >
                Soluciones innovadoras que optimizan tu cadena de suministro, reducen costos y potencian el crecimiento de tu negocio.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                variants={itemVariants}
              >
                <Button asChild size="lg">
                  <Link href="#modulos">Explora nuestras soluciones <ArrowRight className="ml-2 h-5 w-5"/></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#contacto" onClick={handleDemoClick}>Ver demo <PlayCircle className="ml-2 h-5 w-5" /></Link>
                </Button>
              </motion.div>
            </div>
            <motion.div 
              className="relative w-full h-64 lg:h-auto lg:aspect-square"
              variants={itemVariants}
            >
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  priority
                  className="object-contain"
                  data-ai-hint={heroImage.imageHint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0">
          <DialogHeader className="p-4">
            <DialogTitle>Demo de Forwarty</DialogTitle>
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
