'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, Bot, Globe, BarChart2 } from 'lucide-react';
import React from 'react';

const steps = [
  {
    icon: LayoutGrid,
    title: 'Centraliza tus operaciones',
    description: 'Administra todas tus operaciones logísticas desde un único panel. Registra documentos, embarques, clientes y proveedores con trazabilidad completa y en tiempo real.',
    emoji: '🚀'
  },
  {
    icon: Bot,
    title: 'Automatiza procesos clave',
    description: 'Reduce tareas manuales con flujos automatizados: generación de prefacturas, notificaciones, seguimiento de operaciones y control de tiempos.',
    emoji: '⚙️'
  },
  {
    icon: Globe,
    title: 'Colabora desde cualquier lugar',
    description: 'Accede de forma segura desde la nube. Tu equipo, clientes y aliados pueden interactuar dentro del mismo entorno digital, con roles y permisos personalizados.',
    emoji: '🌐'
  },
  {
    icon: BarChart2,
    title: 'Analiza y toma decisiones',
    description: 'Obtén reportes inteligentes, métricas de desempeño y alertas automáticas que te ayudan a optimizar cada etapa del proceso logístico.',
    emoji: '📊'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-4">
              ¿Cómo funciona Forwarty?
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Forwarty es una plataforma ERP Cloud diseñada para transformar la gestión operativa y documental de los agentes de carga y empresas de comercio internacional. Su funcionamiento combina automatización, trazabilidad y análisis inteligente en una sola herramienta.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card/50 p-6 rounded-lg border border-border/50 text-center flex flex-col items-center shadow-lg hover:border-primary transition-colors duration-300"
              >
                <div className="relative flex items-center justify-center bg-primary/10 rounded-full w-16 h-16 mb-4">
                   <step.icon className="w-8 h-8 text-primary" />
                   <span className="absolute -top-2 -right-2 text-2xl">{step.emoji}</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground flex-grow">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center bg-card p-6 rounded-lg border border-dashed border-primary/50"
          >
            <h3 className="font-bold text-xl text-primary mb-2">🎯 En resumen</h3>
            <p className="text-foreground max-w-4xl mx-auto">
              Forwarty conecta tecnología y logística para ofrecer eficiencia, control y crecimiento sostenible a las empresas del comercio internacional.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
