'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui/carousel";

const slides = [
  {
    id: 'hero-bg-1',
    title: 'ERP diseñado para agentes de carga',
    description: 'Automatiza, centraliza y analiza cada aspecto de tu negocio de comercio internacional.',
    imageUrl: '/images/slides/carrusel1.png',
  },
  {
    id: 'hero-bg-2',
    title: 'Visibilidad global, decisiones inteligentes',
    description: 'Nuestra plataforma te ofrece una visión 360° de tus operaciones en tiempo real.',
    imageUrl: '/images/slides/carrusel2.png',
  },
  {
    id: 'hero-bg-3',
    title: 'Control total de tu operación logística',
    description: 'Soluciones innovadoras que optimizan tu cadena de suministro, reducen costos y potencian el crecimiento de tu negocio.',
    imageUrl: '/images/slides/carrusel3.png',
  },
];

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
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
          opts={{ loop: true }}
          className="absolute inset-0 w-full h-full"
          setApi={setApi}
        >
          <CarouselContent className="m-0 h-full">
            {slides.map((slide) => (
              <CarouselItem
                key={slide.id}
                className="p-0 relative w-full h-screen flex items-center justify-center"
              >
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    fill
                    className="object-cover transition-all duration-700 ease-in-out"
                    priority={slide.id === 'hero-bg-1'}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Contenido */}
                <div className="relative z-10 text-center px-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 font-headline animate-fadeInUp">
                    {slide.title}
                  </h1>
                  <p className="max-w-2xl mx-auto text-lg text-white/80 mb-8 animate-fadeInUp delay-150">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp delay-300">
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Botones de navegación */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white">
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white">
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
          
          {/* Indicadores de puntos */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  api?.selectedScrollSnap() === index 
                    ? 'w-8 bg-white' 
                    : 'w-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>

        {/* Modal de video */}
        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="max-w-4xl p-0 bg-background border-border">
            <DialogHeader className="p-4">
              <DialogTitle className="text-foreground">Demo de Forwarty</DialogTitle>
            </DialogHeader>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="/images/demo.mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
}