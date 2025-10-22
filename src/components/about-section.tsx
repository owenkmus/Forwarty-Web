
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building, Globe, Lightbulb } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-illustration');

const features = [
  {
    icon: Building,
    title: 'Nuestra Misión',
    description: 'Revolucionar la logística a través de software inteligente, haciendo que las cadenas de suministro sean más eficientes, sostenibles y resilientes para todos.',
  },
  {
    icon: Globe,
    title: 'Nuestra Visión',
    description: 'Ser el sistema operativo estándar para la logística global, conectando cada eslabón de la cadena de suministro en una plataforma unificada e inteligente.',
  },
  {
    icon: Lightbulb,
    title: 'Nuestros Valores',
    description: 'Innovación constante, enfoque en el cliente, integridad y un compromiso profundo con la creación de un impacto positivo en el comercio mundial.',
  },
];

export function AboutSection() {
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

  return (
    <section id="acerca" className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center lg:text-left">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-6"
              variants={itemVariants}
            >
              Forjando el futuro de la logística digital
            </motion.h2>
            <motion.p 
              className="text-muted-foreground mb-8"
              variants={itemVariants}
            >
              En Forwarty, somos un equipo de tecnólogos, expertos en logística y visionarios apasionados por resolver los desafíos más complejos de la industria. Nacimos de la necesidad de una mayor inteligencia y conectividad en un mundo cada vez más interconectado.
            </motion.p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
            className="relative w-full h-80 lg:h-auto lg:aspect-square"
            variants={itemVariants}
          >
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover rounded-lg shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
