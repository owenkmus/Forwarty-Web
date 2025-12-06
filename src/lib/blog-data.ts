export interface BlogPost {
  id: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  imageId: string;
  content: string;
  author?: string;
}

export interface NewsArticle {
  id: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  imageId: string;
  content: string;
  author?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    category: 'Tecnología',
    title: 'Tendencias 2025: IA y Automatización en la Logística Internacional',
    summary: 'Exploramos cómo la inteligencia artificial, la automatización y la analítica avanzada están transformando la logística global.',
    date: '12 de Enero, 2025',
    imageId: 'blog-1',
    author: 'Equipo Forwarty',
    content: `
      <h2>Introducción</h2>
      <p>La logística internacional está experimentando la mayor transformación de la última década. Tecnologías como la inteligencia artificial (IA), la automatización y la analítica predictiva se han convertido en herramientas esenciales para mejorar la eficiencia, reducir costos y aumentar la visibilidad de la cadena de suministro.</p>
      
      <h2>IA para la Toma de Decisiones</h2>
      <p>La IA permite a los agentes de carga anticipar retrasos, optimizar rutas en tiempo real y estimar costos con mayor precisión. Los sistemas modernos analizan miles de variables como clima, congestión portuaria y regulaciones internacionales.</p>
      
      <h2>Automatización de Procesos Críticos</h2>
      <p>Las operaciones manuales están siendo reemplazadas por automatizaciones inteligentes. Desde la generación de documentos hasta la clasificación de carga, la automatización puede reducir los errores operativos hasta en un 70%.</p>
      
      <h2>Robots Colaborativos y Centros Inteligentes</h2>
      <p>Los centros logísticos integran robots colaborativos (cobots) capaces de mover, clasificar y preparar mercancías con alta precisión. Esta tecnología acelera el procesamiento y reduce tiempos de tránsito.</p>
      
      <h2>El Rol de un ERP Especializado</h2>
      <p>Un ERP diseñado para agentes de carga, como Forwarty, integra estas tecnologías para centralizar datos, automatizar flujos y mejorar la toma de decisiones.</p>
      
      <h2>Conclusión</h2>
      <p>Las empresas que adopten IA y automatización en 2025 obtendrán una ventaja competitiva significativa en tiempos, costos y calidad de servicio.</p>
    `
  },
  {
    id: '2',
    category: 'Innovación',
    title: 'Blockchain y Trazabilidad: El Nuevo Estándar en Carga Internacional',
    summary: 'Analizamos cómo blockchain, IoT y la trazabilidad avanzada están aumentando la seguridad en la cadena logística global.',
    date: '20 de Enero, 2025',
    imageId: 'blog-2',
    author: 'Equipo Forwarty',
    content: `
      <h2>Una Nueva Era de Transparencia</h2>
      <p>La trazabilidad se ha convertido en un factor clave para garantizar la seguridad y confiabilidad de la carga internacional. Blockchain permite registrar movimientos de mercancía de forma inmutable y verificable.</p>
      
      <h2>Reducción de Fraudes y Errores</h2>
      <p>Con blockchain, cada evento logístico —desde el origen hasta la entrega— queda documentado. Esto disminuye los riesgos de manipulación, pérdida y falsificación de documentos.</p>
      
      <h2>Integración con IoT</h2>
      <p>Los sensores IoT reportan temperatura, ubicación y condiciones en tiempo real. Al integrarlos con blockchain, se garantiza que la información registrada sea auténtica y no manipulada.</p>
      
      <h2>Confianza entre Actores Globales</h2>
      <p>Agentes de carga, navieras, aerolíneas, aduanas y clientes comparten una única fuente de verdad, lo que facilita auditorías, reclamos y procesos de documentación.</p>
      
      <h2>ERP con Trazabilidad Avanzada</h2>
      <p>Un ERP moderno permite gestionar documentos, trackings y alertas basados en datos seguros, mejorando la experiencia del cliente.</p>
      
      <h2>Conclusión</h2>
      <p>Blockchain y la trazabilidad inteligente son ya un pilar crítico para la logística internacional, especialmente en sectores regulados o de alto valor.</p>
    `
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    category: 'Innovación',
    title: 'La IA acerca las cadenas globales de suministro al “modo tiempo real”',
    summary: 'Un estudio reciente muestra que los sistemas con IA permiten reducir incertidumbre logística, anticipar interrupciones y mejorar la eficiencia operativa. ',
    date: '14 de Octubre, 2025',
    imageId: 'news-1',
    author: 'Equipo de Comunicaciones',
    content: `
      <h2>Visibilidad y reacción casi inmediata</h2>
      <p>Según un análisis reciente de 2025, más del 75 % de los ejecutivos de supply chain reportan que aún tienen visibilidad parcial o fragmentada de sus redes globales. Los sistemas basados en IA están ayudando a cerrar esta brecha al integrar datos de producción, transporte, demanda y contexto externo en una plataforma unificada.</p>
      
      <h2>Reducción de costos y plazos</h2>
      <p>Empresas que usan IA para logística han logrado reducir entre un 3 % y un 5 % los costos de envíos urgentes, al disminuir la necesidad de envíos exprés y optimizar rutas.</p>
      
      <h2>Automatización y eficiencia operacional</h2>
      <p>La adopción de almacenes inteligentes, transporte optimizado y mantenimiento predictivo permite transformar operaciones reactivas en operaciones proactivas. Esto contribuye a menores tiempos de entrega y mayor confiabilidad.</p>
      
      <h2>Por qué importa para agentes de carga internacional</h2>
      <p>Para un ERP especializado en transporte internacional, integrar IA y módulos de visibilidad ofrece una ventaja competitiva: datos en tiempo real, alertas, planificación predictiva y mayor confiabilidad frente a clientes y proveedores.</p>
    `
  },
  {
    id: '2',
    category: 'Innovación',
    title: 'Nuevas Regulaciones Internacionales Impulsan la Digitalización Logística',
    summary: 'Las nuevas normas globales incentivan el uso de tecnología para aumentar la transparencia en el comercio internacional.',
    date: '02 de Febrero, 2025',
    imageId: 'news-2',
    author: 'Departamento de Análisis',
    content: `
      <h2>Un Cambio Necesario</h2>
      <p>La presión de los organismos internacionales para mejorar la transparencia y seguridad en el comercio global ha impulsado nuevas regulaciones que afectan directamente a los agentes de carga.</p>
      
      <h2>Digitalización Obligatoria</h2>
      <p>Documentos como el conocimiento de embarque electrónico (eBL) y certificados digitales se vuelven cada vez más estándar, aumentando la velocidad de procesamiento y reduciendo errores.</p>
      
      <h2>Impacto en los Agentes de Carga</h2>
      <p>Las empresas deben invertir en herramientas tecnológicas que permitan digitalizar procesos, gestionar documentos y asegurar el cumplimiento normativo.</p>
      
      <h2>Nuevas Oportunidades</h2>
      <p>Las compañías que adopten sistemas tecnológicos avanzados estarán mejor posicionadas para operar con eficiencia y cumplir con los estándares internacionales.</p>
      
      <h2>El Rol de un ERP Moderno</h2>
      <p>Plataformas como Forwarty permiten centralizar documentos, automatizar procesos y garantizar el cumplimiento en cada envío.</p>
    `
  },
];


export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getNewsArticle(id: string): NewsArticle | undefined {
  return newsArticles.find(article => article.id === id);
}
