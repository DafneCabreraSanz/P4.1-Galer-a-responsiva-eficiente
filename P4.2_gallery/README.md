# Práctica 4.2: Galería de Imágenes Responsiva

## **Descripción**

El objetivo de esta práctica es crear una galería de imágenes responsiva y optimizada para dispositivos modernos. Los alumnos deberán realizar los siguientes pasos:

1. **Obtener imágenes**:

   - Seleccionar al menos **8 o 9 fotos diferentes** en alta resolución desde sitios como **Pexels**, **Unsplash** o **Pixabay**.
   - Las imágenes deben representar diferentes temáticas o conceptos, y cada una debe tener un **texto descriptivo** que se mostrará en la galería.

2. **Redimensionar las imágenes**:

   - Usar el **script avanzado con Sharp** para redimensionar cada imagen a varios tamaños:
     - Tamaños: `small`, `medium`, `large`, `xlarge`.
     - Densidades de píxeles: `1x` y `2x`.
   - Generar versiones optimizadas y organizarlas en una carpeta de trabajo.

3. **Construir la galería**:

   - Diseñar una galería que sea **responsiva**, adaptándose al tamaño del navegador y la densidad de píxeles del dispositivo.
   - Implementar el uso de **`srcset`** y/o **`<picture>`** para servir las imágenes de manera óptima según el dispositivo.

4. **Interactividad con modal**:

   - Al hacer clic en una imagen, esta debe mostrarse en **tamaño completo** en una ventana modal.
   - La versión mostrada en el modal debe ser la de mayor resolución disponible para el dispositivo que la abre.

5. **Opcional (mayor puntuación)**:
   - Generar la galería de manera dinámica usando **JavaScript**.
   - El texto descriptivo de cada imagen debe mostrarse junto a ella (puede ser como un pie de foto o un título en el modal).

---

## **Requisitos Técnicos**

- Las imágenes deben estar optimizadas y servirse en los tamaños y densidades requeridas.
- Cada imagen debe tener un **texto descriptivo** que represente su contenido.
- La galería debe adaptarse a:
  - **Tamaño del navegador (ancho del viewport).**
  - **Densidad de píxeles del dispositivo (1x, 2x, etc.).**
- Las imágenes deben abrirse en un **modal interactivo** al hacer clic, mostrando la mejor calidad disponible.

---

## **Rúbrica de Evaluación**

| **Criterio**                       | **Descripción**                                                                                 | **Puntuación** |
| ---------------------------------- | ----------------------------------------------------------------------------------------------- | -------------- |
| **Galería funcional**              | La galería muestra las imágenes correctamente en tamaños y resoluciones adecuadas.              | 30 puntos      |
| **Texto descriptivo**              | Cada imagen tiene un texto descriptivo adecuado que se muestra en la galería o el modal.        | 10 puntos      |
| **Uso de `srcset` o `<picture>`**  | Se usan correctamente para adaptarse al tamaño del navegador y la densidad de píxeles.          | 20 puntos      |
| **Modal funcional**                | La ventana modal muestra las imágenes en tamaño completo al hacer clic sobre ellas.             | 20 puntos      |
| **Redimensionamiento de imágenes** | Se generan correctamente los tamaños y densidades usando el script avanzado.                    | 10 puntos      |
| **Código limpio y organizado**     | El código es claro, bien estructurado y cumple buenas prácticas (nombres de clases, funciones). | 10 puntos      |
| **Creatividad/Diseño**             | Se valorará el diseño visual de la galería y cualquier funcionalidad adicional.                 | 10 puntos      |

**Puntuación total: 100 puntos**

---

## **Sugerencias**

- Utiliza **CSS Grid** o **Flexbox** para crear una galería atractiva y adaptable.
- Prueba la funcionalidad de la galería en dispositivos con diferentes tamaños de pantalla y densidades de píxeles.
- Usa **JavaScript** para añadir dinamismo y reutilización de código.
- Considera la accesibilidad añadiendo descripciones (`alt`) y texto claro para todos los elementos interactivos.

## Entrega

- Se entregará un enlace a un repositorio de GitHub con el código fuente de la galería.
- Se desplegará en GitHubPages

---

## **Proyecto Desplegado**

🔗 **GitHub Pages:** [https://dafnecabreraSanz.github.io/P4.1-Galer-a-responsiva-eficiente/](https://dafnecabreraSanz.github.io/P4.1-Galer-a-responsiva-eficiente/)

📂 **Repositorio:** [https://github.com/DafneCabreraSanz/P4.1-Galer-a-responsiva-eficiente](https://github.com/DafneCabreraSanz/P4.1-Galer-a-responsiva-eficiente)
