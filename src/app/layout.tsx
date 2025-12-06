import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

// 1. Aquí colocamos tu nueva Metadata (Título, descripción, robots, canonical)
export const metadata: Metadata = {
  title: "Forwarty ERP | Para Freight Forwarders | Software Especializado en la Nube | Administración del DO",
  description: "Optimiza tus operaciones logísticas con Forwarty ERP Cloud para agentes de carga. Automatiza procesos, reduce errores y mejora la rentabilidad. Lleva todo el ciclo operativo y contable para la administración del DO. Solicita una Demostración y has parte de la transformación tecnológica para tu organización.",
  robots: "index, follow",
  alternates: {
    canonical: "https://myforwarty.com/",
  },
};

// 2. Exportamos el Viewport por separado
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        {/* Tus fuentes de Google Fonts se mantienen igual */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}