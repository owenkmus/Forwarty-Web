'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Acerca de', href: '#acerca' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Blog y Noticias', href: '#blog' },
  { name: 'Herramientas', href: '#herramientas' },
  { name: 'Contacto', href: '#contacto' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-card/80 backdrop-blur-lg border-b border-border/20 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#inicio" className="text-2xl font-bold text-foreground">
            Forwarty<span className="text-primary">.</span>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
             <Button className="hidden lg:flex" variant="default" asChild>
                <Link href="https://appmyforwarty.com" target="_blank" rel="noopener noreferrer">Ingrese a Forwarty <ArrowRight className="ml-2 h-4 w-4"/></Link>
             </Button>
            <div className="lg:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card p-0">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-8">
                            <Link href="#inicio" className="text-2xl font-bold text-foreground" onClick={() => setOpen(false)}>
                                Forwarty<span className="text-primary">.</span>
                            </Link>
                            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                                <X className="h-6 w-6" />
                            </Button>
                        </div>
                        <nav className="flex flex-col space-y-6">
                            {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                {item.name}
                            </Link>
                            ))}
                        </nav>
                         <Button className="w-full mt-8" variant="default" asChild>
                            <Link href="https://appmyforwarty.com" target="_blank" rel="noopener noreferrer">Ingrese a Forwarty <ArrowRight className="ml-2 h-4 w-4"/></Link>
                         </Button>
                    </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
