// @ts-nocheck

import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  Shield,
  Box,
  BarChart2,
  Smartphone,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";

// Configuración del tema
const themeConfig = {
  colors: {
    primary: "#2563eb",
    secondary: "#1e40af",
    accent: "#3b82f6",
    background: "#0f172a",
    text: "#f8fafc",
    cardBg: "#1e293b",
    cardHover: "#334155",
  },
  fonts: {
    main: '"Inter", sans-serif',
    heading: '"Poppins", sans-serif',
  },
  borderRadius: "0.5rem",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
};

// Estilos globales
const globalStyles = `
  body {
    font-family: ${themeConfig.fonts.main};
    background-color: ${themeConfig.colors.background};
    color: ${themeConfig.colors.text};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${themeConfig.fonts.heading};
  }
`;

export default function ERPLandingPage() {
  return (
    <div
      className="min-h-screen py-12 px-4"
      style={{
        background: `linear-gradient(135deg, ${themeConfig.colors.primary}, ${themeConfig.colors.secondary})`,
      }}
    >
      {/* <style>{globalStyles}</style> */}
      <header className="container mx-auto text-center mb-12">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ color: themeConfig.colors.text }}
        >
          Revoluciona tu PYME con Nuestro ERP Inteligente
        </h1>
        <p className="text-xl mb-8" style={{ color: themeConfig.colors.text }}>
          Gestión simplificada, ventas optimizadas y decisiones informadas en
          tiempo real
        </p>
      </header>

      <main className="container mx-auto">
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: themeConfig.colors.text }}
          >
            Características que Transformarán tu Negocio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Shield size={48} />}
              title="Seguridad Avanzada"
              description="Control de accesos y permisos personalizables"
              benefit="Protege tu información sensible y asegura que cada empleado tenga acceso solo a lo que necesita"
            />
            <FeatureCard
              icon={<Box size={48} />}
              title="Gestión de Inventario Inteligente"
              description="Control multi-ubicación y alertas automáticas"
              benefit="Optimiza tu stock, reduce pérdidas y nunca más te quedes sin productos clave"
            />
            <FeatureCard
              icon={<BarChart2 size={48} />}
              title="Reportes en Tiempo Real"
              description="Toma decisiones informadas al instante"
              benefit="Visualiza el rendimiento de tu negocio en tiempo real y anticípate a las tendencias del mercado"
            />
            <FeatureCard
              icon={<Smartphone size={48} />}
              title="Acceso Multiplataforma"
              description="Trabaja desde cualquier dispositivo, en cualquier lugar"
              benefit="Gestiona tu negocio desde donde estés, sin perder oportunidades de venta"
            />
          </div>
        </section>

        <section
          className="rounded-lg p-8 mb-16"
          style={{ backgroundColor: themeConfig.colors.cardBg }}
        >
          <h2
            className="text-3xl font-bold mb-6 text-center"
            style={{ color: themeConfig.colors.text }}
          >
            Cómo Nuestro ERP Cambiará tu Día a Día
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ImpactCard
              number="1"
              title="Ahorra Tiempo"
              description="Automatiza tareas repetitivas y enfócate en hacer crecer tu negocio"
            />
            <ImpactCard
              number="2"
              title="Aumenta Ventas"
              description="Optimiza tu proceso de ventas y mejora la satisfacción del cliente"
            />
            <ImpactCard
              number="3"
              title="Reduce Errores"
              description="Minimiza errores humanos con procesos automatizados y validaciones"
            />
            <ImpactCard
              number="4"
              title="Crece con Confianza"
              description="Escala tu negocio con un sistema que crece contigo"
            />
          </div>
        </section>

        <section className="text-center mb-16">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: themeConfig.colors.text }}
          >
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p
            className="text-xl mb-8"
            style={{ color: themeConfig.colors.text }}
          >
            Contáctanos ahora y descubre cómo nuestro ERP puede impulsar tu PYME
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/56974646583"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg px-8 py-4 rounded-full flex items-center"
              style={{
                backgroundColor: themeConfig.colors.accent,
                color: themeConfig.colors.text,
              }}
            >
              <Phone className="mr-2" /> WhatsApp: +569 7464 6583
            </a>

            {/* <Button
              className="text-lg px-8 py-4 rounded-full flex items-center"
              style={{
                backgroundColor: themeConfig.colors.accent,
                color: themeConfig.colors.text,
              }}
            >
              <Phone className="mr-2" /> WhatsApp: +569 7464 6583
            </Button> */}
            {/* <Button
              className="text-lg px-8 py-4 rounded-full flex items-center"
              style={{
                backgroundColor: themeConfig.colors.secondary,
                color: themeConfig.colors.text,
              }}
            >
              <Mail className="mr-2" /> Email: info@tuerp.com
            </Button> */}
          </div>
        </section>
      </main>

      <footer className="container mx-auto mt-16 text-center">
        <p style={{ color: themeConfig.colors.text }}>
          &copy; 2024 MIGESTOR. Impulsando el crecimiento de PYMEs con
          tecnología inteligente.
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, benefit }) {
  return (
    <Card
      className="border-none transition-colors duration-300"
      style={{
        backgroundColor: themeConfig.colors.cardBg,
        borderRadius: themeConfig.borderRadius,
        boxShadow: themeConfig.boxShadow,
      }}
    >
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {React.cloneElement(icon, {
            className: `text-${themeConfig.colors.accent} mr-4`,
          })}
          <h3
            className="text-2xl font-semibold"
            style={{ color: themeConfig.colors.text }}
          >
            {title}
          </h3>
        </div>
        <p className="mb-4" style={{ color: `${themeConfig.colors.text}99` }}>
          {description}
        </p>
        <p style={{ color: themeConfig.colors.text }}>
          <ArrowRight className="inline mr-2" /> {benefit}
        </p>
      </CardContent>
    </Card>
  );
}

function ImpactCard({ number, title, description }) {
  return (
    <div
      className="rounded-lg p-6 text-center"
      style={{
        backgroundColor: themeConfig.colors.accent,
        borderRadius: themeConfig.borderRadius,
        boxShadow: themeConfig.boxShadow,
      }}
    >
      <div
        className="text-3xl font-bold mb-2"
        style={{ color: themeConfig.colors.text }}
      >
        {number}
      </div>
      <h3
        className="text-xl font-semibold mb-2"
        style={{ color: themeConfig.colors.text }}
      >
        {title}
      </h3>
      <p style={{ color: `${themeConfig.colors.text}cc` }}>{description}</p>
    </div>
  );
}
