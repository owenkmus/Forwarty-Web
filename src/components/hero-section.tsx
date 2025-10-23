'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsVideoOpen(true);
  };

  return (
    <>
      <section id="inicio" className="relative w-full h-screen min-h-[700px] flex items-center justify-center">
        <Image
          src="/images/carrusel1.jpg"
          alt="Fondo de logística"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 font-headline max-w-4xl"
              >
                Control total de tu operación logística
              </h1>
            <p
              className="max-w-xl mx-auto text-lg text-white/80 mb-8"
            >
              Soluciones innovadoras que optimizan tu cadena de suministro, reducen costos y potencian el crecimiento de tu negocio.
            </p>
            <div
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button asChild size="lg">
                <Link href="#modulos">Explora nuestras soluciones <ArrowRight className="ml-2 h-5 w-5"/></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                <Link href="#" onClick={handleDemoClick}>Ver demo <PlayCircle className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
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
