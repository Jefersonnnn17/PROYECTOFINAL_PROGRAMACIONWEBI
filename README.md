# Simulador Web de Consumo Familiar en Contexto de Crisis
**Materia:** Programación Web I (INF 112)  
**Institución:** Universidad Mayor de San Andrés (UMSA)  
**Facultad:** Facultad de Ciencias Puras y Naturales (FCPN)  
**Estudiante:** Jeferson Espejo  
**Gestión:** 2026  

---

## 1. Descripción del Proyecto
Este proyecto consiste en una aplicación web interactiva desarrollada como entrega final para la materia de Programación Web I. La plataforma funge como una herramienta educativa y cuantitativa diseñada para simular, representar y evaluar el impacto macroeconómico y la inflación latente dentro del contexto actual de Bolivia.

A través de un modelo matemático sencillo, el usuario puede introducir un presupuesto familiar base y estructurar una canasta de compras dinámica agregando insumos esenciales de primera necesidad. El sistema computa los subtotales, totales y clasifica el nivel de afectación financiera del hogar mediante alertas interactivas en el DOM.

---

## 2. Contexto del Desafío: Inestabilidad Económica y Pérdida del Poder Adquisitivo
El Estado Plurinacional de Bolivia atraviesa una coyuntura socioeconómica de alta complejidad que impacta de forma directa e inmediata en la microeconomía de los hogares. Este escenario adverso está impulsado por una serie de factores multicausales interconectados:

1. **Irregularidad en la Distribución de Carburantes:** Las dificultades logísticas e interrupciones en el suministro de diésel y gasolina generan largas filas en las estaciones de servicio. Esto paraliza temporalmente el transporte pesado y los vehículos de carga interdepartamental, encareciendo fletes fiscales y comerciales.
2. **Especulación y Volatilidad de Precios:** Debido a la incertidumbre y al incremento en los costos de operación del transporte, los intermediarios y proveedores de los mercados mayoristas y tradicionales elevan preventivamente los costos de los alimentos y artículos de primera necesidad (arroz, fideo, aceite, carnes y tubérculos).
3. **Flujo de Divisas y Conflictos Sociales:** Las limitaciones en la circulación de divisas extranjeras afectan la importación de insumos agrícolas y materias primas primarias, lo que sumado a bloqueos de carreteras y tensiones sociales recurrentes, fractura la cadena de suministro nacional.

**El Problema Microeconómico:** Como resultado, el poder adquisitivo del salario familiar sufre una depreciación constante. El presupuesto mensual planificado por los jefes de hogar pierde efectividad de una semana a otra. Las familias bolivianas se ven obligadas a reconfigurar sus hábitos de consumo en tiempo real, recortando porciones, buscando productos sustitutos de menor calidad o sacrificando fondos originalmente destinados a salud, ahorro o educación.

---

## 3. La Solución Tecnológica: Simulación Algorítmica y Gestión de Presupuestos
Frente a esta problemática, la aplicación web se posiciona como una **solución tecnológica educativa y concientizadora**, basada en la modelación lógica de variables financieras básicas. El sistema aborda el problema de la siguiente manera:

* **Centralización y Control Cuantitativo:** Permite al usuario digitalizar el dinero real con el que cuenta (Presupuesto Disponible en Bs) y simular el comportamiento de un mercado real. Al ingresar dinámicamente cada producto con su respectivo precio unitario y cantidad, el software procesa arrays de datos para calcular sub इसे analíticamente.
* **Algoritmos de Validación e Interpretación:** En lugar de dejar el análisis a la especulación, el motor de JavaScript evalúa la sumatoria total frente al presupuesto base. Si el costo excede la capacidad del usuario, el sistema no se limita a dar un número negativo; calcula el **déficit exacto** y despliega alertas visuales críticas. 
* **Optimización de Recursos en el Hogar:** Esta simulación permite a los usuarios realizar pruebas de estrés financiero antes de salir de casa o realizar las compras reales. Ayuda a determinar qué combinaciones de alimentos se ajustan a la realidad de su bolsillo, qué insumos deben priorizarse y cómo mitigar el impacto de las fluctuaciones imprevistas mediante una planificación rigurosa.
* **Enfoque Académico Frontend:** Tecnológicamente, la solución demuestra cómo herramientas básicas del desarrollo web (HTML semántico, hojas de estilo responsivas con Flexbox y manipulación interactiva del DOM) pueden aplicarse para resolver problemas lógicos del entorno vivo, cumpliendo estrictamente con el estándar técnico exigido por la cátedra.

---

## 4. Características Principales
* **Estructura Semántica Estricta:** Construido enteramente bajo estándares de HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<figure>`, `<footer>`).
* **Diseño Completamente Responsivo:** Implementación de layouts modernos con CSS (Flexbox y Media Queries) que garantizan una visualización óptima en computadoras, tablets y dispositivos móviles.
* **Imágenes y Componentes Accesibles:** Incorporación de recursos visuales adaptativos acompañados de pies de foto descriptivos mediante etiquetas `<figure>` y `<figcaption>`.
* **Interactividad Dinámica (Manipulación del DOM):** Programación en JavaScript vanilla para capturar datos de formularios, calcular matrices de subtotales en tiempo real y renderizar los resultados directamente en la interfaz sin alertas nativas del navegador.
* **Sección de Control de Calidad:** Inclusión de una tabla fija con casos de estudio y de prueba específicos para comprobar la fidelidad algorítmica del simulador.

---

## 5. Estructura de Archivos del Proyecto
El proyecto mantiene un orden limpio y modular conforme a las buenas prácticas de desarrollo web frontend:

```text
proyectofinal/
│
├── index.html          # Documento principal y estructura semántica de la web
├── README.md           # Documento de presentación técnica del repositorio (este archivo)
│
├── css/
│   └── style.css       # Hoja de estilos, maquetación responsiva y diseño visual
│
├── js/
│   └── script.js       # Lógica algorítmica en JavaScript y manipulación del DOM
│
└── img/
    ├── queque.png      # Imagen representativa del contexto del mercado en Bolivia
    └── pai.png         # Imagen de conclusiones orientada al comercio local
