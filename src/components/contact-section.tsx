import { ContactForm } from '@/components/contact-form';
import { Mail, MapPin, Phone, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { TiktokIcon } from '@/components/icons/tiktok-icon';
import Link from 'next/link';

export function ContactSection() {
  return (
    <section id="contacto" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background bg-gradient-animated -z-10"></div>
      <div className="absolute inset-0 bg-background/70 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-4">Hablemos de tu futuro logístico</h2>
            <p className="text-muted-foreground mb-8">
              ¿Listo para llevar tu operación al siguiente nivel? Contáctanos. Nuestro equipo de expertos está preparado para responder tus preguntas y diseñar una solución a tu medida.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:sales2@myforwarty.com" className="hover:text-primary">sales2@myforwarty.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+573102214705" className="hover:text-primary">(+57) 310 221 4705</a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Carrera 100 # 26 35, Bogotá, Colombia</span>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle className="w-5 h-5 text-primary" />
                <a href="https://wa.me/573102214705" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Contactar por WhatsApp</a>
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
              <Link href="https://www.linkedin.com/company/forwarty/" className="text-muted-foreground hover:text-primary"><Linkedin className="w-5 h-5" /></Link>
              <Link href="https://www.instagram.com/forwarty/" className="text-muted-foreground hover:text-primary"><Instagram className="w-5 h-5" /></Link>
              <Link href="https://www.tiktok.com/@forwartyerpcloud" className="text-muted-foreground hover:text-primary"><TiktokIcon className="w-5 h-5" /></Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
