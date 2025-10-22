
'use client';
import React from 'react';
import { TypescriptLogo } from './logos/typescript';
import { MySqlLogo } from './logos/mysql';
import { AwsLogo } from './logos/aws';
import { CSharpLogo } from './logos/csharp';
import { NodeJsLogo } from './logos/nodejs';
import { GithubLogo } from './logos/github';

const logos = [
  { component: TypescriptLogo, name: 'TypeScript' },
  { component: MySqlLogo, name: 'MySQL' },
  { component: AwsLogo, name: 'AWS' },
  { component: CSharpLogo, name: 'C#' },
  { component: NodeJsLogo, name: 'Node.js' },
  { component: GithubLogo, name: 'GitHub' },
];

export function TechnologiesSection() {
  return (
    <section id="herramientas" className="py-16 bg-background sm:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">Nuestras Herramientas</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Trabajamos con las tecnologías más robustas y modernas para construir soluciones logísticas de alto impacto.
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {[...logos, ...logos].map((logo, index) => {
              const LogoComponent = logo.component;
              return (
                <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-4">
                  <LogoComponent className="h-12 text-muted-foreground hover:text-primary transition-colors duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
