'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Truck, FileText, Archive, Users, ChevronRight } from 'lucide-react';
import React from 'react';

const modules = [
  {
    icon: Briefcase,
    title: 'Comercial',
    features: [
      'Pricing y Cotizaciones',
      'Gestión de Prospectos',
      'Seguimiento de D.O.',
      'Reportes y Presupuesto',
    ],
  },
  {
    icon: Truck,
    title: 'Operaciones',
    features: [
        'Control de Operaciones',
        'Trazabilidad y Status',
        'Reportes de Rendimiento',
        'Tiempos logísticos',
        'Semáforo de indicadores',
    ],
  },
  {
    icon: FileText,
    title: 'Contabilidad',
    features: [
      'Gestión de Conceptos',
      'Documentos Electrónicos (próximamente)',
      'Reportes tributrarios (próximamente)',
      'Reportes Financieros  (próximamente)',
    ],
  },
  {
    icon: Archive,
    title: 'Administrativo',
    features: [
        'Gestión de Aliados',
        'Reporte de Vencimientos',
        'Listas Circular 170',
    ],
  },
  {
    icon: Users,
    title: 'Recursos Humanos',
    features: [
      'Portal de Autogestión',
      'Control de Vacaciones',
      'Directorio Corporativo',
    ],
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

export function ModulesSection() {
  return (
    <section id="modulos" className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/fondo-modulos.png)' }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">El Corazón de su Operación</h2>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {modules.map((module, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full bg-card/50 border-border/50 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="flex-shrink-0">
                    <module.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {module.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
