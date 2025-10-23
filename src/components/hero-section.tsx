'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const slides = [
  {
    id: 'hero-bg-1',
    title: 'Control total de tu operación logística',
    description:
      'Soluciones innovadoras que optimizan tu cadena de suministro, reducen costos y potencian el crecimiento de tu negocio.',
  },
  {
    id: 'hero-bg-2',
    title: 'Visibilidad global, decisiones inteligentes',
    description:
      'Nuestra plataforma te ofrece una visión 360° de tus operaciones en tiempo real.',
  },
  {
    id: 'hero-bg-3',
    title: 'ERP diseñado para agentes de carga',
    description:
      'Automatiza, centraliza y analiza cada aspecto de tu negocio de comercio internacional.',
  },
];

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsVideoOpen(true);
  };

  return (
    <>
      <section id="inicio" className="relative w-full h-screen overflow-hidden">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{ loop: true }}
        >
          <CarouselContent className="m-0 h-full">
            {slides.map((slide) => {
                const image = PlaceHolderImages.find(p => p.id === slide.id);
                return (
                    <CarouselItem key={slide.id} className="p-0 h-full relative">
                        {image && (
                            <Image
                                src={image.imageUrl}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority={slide.id === 'hero-bg-1'}
                                sizes="100vw"
                                data-ai-hint={image.imageHint}
                            />
                        )}
                        <div className="absolute inset-0 bg-black/50" />

                        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full">
                            <div className="max-w-4xl">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 font-headline">
                                {slide.title}
                                </h1>
                                <p className="max-w-xl mx-auto text-lg text-white/80 mb-8">
                                {slide.description}
                                </p>
                            </div>
                        </div>
                  </CarouselItem>
                )
            })}
          </CarouselContent>
        </Carousel>

        {/* Buttons are outside the carousel to be static */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col sm:flex-row justify-center gap-4 w-full px-4">
          <Button asChild size="lg">
            <Link href="#modulos">
              Explora nuestras soluciones <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
          >
            <Link href="#" onClick={handleDemoClick}>
              Ver demo <PlayCircle className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Modal de video */}
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
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
