import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { getNewsArticle } from '@/lib/blog-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  const article = getNewsArticle(params.id);

  if (!article) {
    notFound();
  }

  const image = PlaceHolderImages.find(p => p.id === article.imageId);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/#blog">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a Noticias
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Image */}
      {image && (
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src={image.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={image.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      )}

      {/* Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Meta */}
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">{article.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-headline">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{article.date}</span>
              </div>
              {article.author && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{article.author}</span>
                </div>
              )}
            </div>
          </div>

          {/* Summary */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {article.summary}
          </p>

          {/* Article Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t">
            <Link href="/#blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Ver más noticias
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

// Generate static params for all news articles
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
  ];
}
