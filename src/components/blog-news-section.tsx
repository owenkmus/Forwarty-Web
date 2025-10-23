'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const blogPosts = [
  {
    id: 1,
    category: 'Optimización',
    title: '5 Maneras de Reducir Costos en tu Almacén',
    summary: 'Descubre estrategias probadas para optimizar el espacio y los procesos en tu centro de distribución.',
    date: '15 de Julio, 2024',
    imageId: 'blog-1',
  },
  {
    id: 2,
    category: 'Tecnología',
    title: 'El Futuro es Ahora: IoT en la Logística',
    summary: 'Exploramos cómo el Internet de las Cosas está revolucionando la visibilidad de la cadena de suministro.',
    date: '02 de Julio, 2024',
    imageId: 'blog-2',
  },
];

const newsArticles = [
  {
    id: 1,
    category: 'Innovación',
    title: 'Forwarty Lanza Nueva Herramienta de IA Predictiva',
    summary: 'Nuestra última innovación utiliza inteligencia artificial para predecir demandas y optimizar inventarios.',
    date: '20 de Julio, 2024',
    imageId: 'news-1',
  },
  {
    id: 2,
    category: 'Mercado Global',
    title: 'Análisis: Nuevas Rutas Comerciales y su Impacto',
    summary: 'Un vistazo a cómo los cambios geopolíticos están afectando las cadenas de suministro globales y cómo adaptarse.',
    date: '18 de Julio, 2024',
    imageId: 'news-2',
  },
];

const sectionVariants = {
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
  },
};

const PostCard = ({ post }: { post: any }) => {
  const image = PlaceHolderImages.find(p => p.id === post.imageId);
  return (
    <motion.div variants={itemVariants}>
      <Card className="overflow-hidden h-full flex flex-col group transition-all duration-300 hover:border-primary">
        {image && (
          <div className="relative w-full h-40">
            <Image
              src={image.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
        <CardHeader>
          <Badge variant="secondary" className="mb-2 w-fit">{post.category}</Badge>
          <CardTitle className="text-lg">
            <Link href="#" className="hover:text-primary transition-colors">{post.title}</Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground">{post.summary}</p>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-muted-foreground">{post.date}</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export function BlogNewsSection() {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">Desde Nuestro Escritorio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Mantente al día con las últimas tendencias, noticias y análisis del mundo de la logística digital.
          </p>
        </div>
        <Tabs defaultValue="blog" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="noticias">Noticias</TabsTrigger>
          </TabsList>
          <TabsContent value="blog">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {blogPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </motion.div>
          </TabsContent>
          <TabsContent value="noticias">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {newsArticles.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
