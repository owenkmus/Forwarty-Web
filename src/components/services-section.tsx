'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Briefcase, CloudCog, Bot, PlugZap } from 'lucide-react';

const services = [
  {
    icon: CloudCog,
    title: 'ERP Cloud Logístico',
    description: 'Gestión integral de tus operaciones logísticas en la nube, accesible desde cualquier lugar.',
  },
  {
    icon: Bot,
    title: 'Automatización de Procesos',
    description: 'Optimiza la eficiencia y reduce errores con nuestros robots de software y flujos de trabajo automatizados.',
  },
  {
    icon: PlugZap,
    title: 'Integraciones y APIs',
    description: 'Conecta tus sistemas existentes con nuestra plataforma para un ecosistema tecnológico unificado.',
  },
  {
    icon: Briefcase,
    title: 'Consultoría en Transformación Digital',
    description: 'Te guiamos en cada paso de tu viaje hacia la digitalización de la cadena de suministro.',
  },
  {
    icon: BrainCircuit,
    title: 'Inteligencia de Datos Logísticos',
    description: 'Toma decisiones basadas en datos con nuestros dashboards y análisis predictivos avanzados.',
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">Nuestros Servicios</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Potenciamos tu logística con tecnología de vanguardia y soluciones a medida.
          </p>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full bg-card/50 border-border/50 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="mb-4">
                    <service.icon className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
