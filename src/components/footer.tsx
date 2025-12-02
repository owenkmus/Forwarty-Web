import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { DynamicYear } from "./dynamic-year";
import Image from 'next/image';

const footerLinks = {
    'Empresa': [
        { name: 'Cómo funciona', href: '#como-funciona' },
        { name: 'Blog', href: '#blog' },
        { name: 'Noticias', href: '#blog' },
    ],
    'Soluciones': [
        { name: 'Módulos', href: '#modulos' },
    ],
    'Legal': [
        { name: 'Política de Privacidad', href: '#' },
        { name: 'Términos de Servicio', href: '#' },
        { name: 'Contacto', href: '#contacto' },
    ]
};

export function Footer() {
    return (
        <footer className="bg-card border-t border-border/50">
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                    <Link href="#inicio" className="flex items-center">
                        <Image src="/images/logoForwarty.svg" alt="Forwarty Logo" width={140} height={40} priority />
                    </Link>
                        <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                            Impulsando la nueva era de la logística inteligente.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin/></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter/></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Youtube/></Link>
                        </div>
                    </div>
                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="font-semibold text-foreground mb-4">{title}</h3>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                    <p>&copy; <DynamicYear /> Forwarty Digital. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
