'use client';
import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AngularLogo } from './logos/angular';
import { TypescriptLogo } from './logos/typescript';
import { MySqlLogo } from './logos/mysql';
import { AwsLogo } from './logos/aws';
import { CSharpLogo } from './logos/csharp';
import { NodeJsLogo } from './logos/nodejs';
import { GithubLogo } from './logos/github';
import Autoplay from "embla-carousel-autoplay"

const logos = [
  { component: AngularLogo, name: 'Angular' },
  { component: TypescriptLogo, name: 'TypeScript' },
  { component: MySqlLogo, name: 'MySQL' },
  { component: AwsLogo, name: 'AWS' },
  { component: CSharpLogo, name: 'C#' },
  { component: NodeJsLogo, name: 'Node.js' },
  { component: GithubLogo, name: 'GitHub' },
];

export function TechnologiesSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section id="herramientas" className="py-16 bg-secondary/10 sm:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">Nuestras Herramientas</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Trabajamos con las tecnologías más robustas y modernas para construir soluciones logísticas de alto impacto.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-4xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {logos.map((logo, index) => {
              const LogoComponent = logo.component;
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card className="group hover:border-primary transition-all duration-300">
                      <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                        <LogoComponent className="h-24 w-24 text-foreground transition-colors duration-300" />
                        <span className="font-semibold text-center">{logo.name}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
