# Avatar informativo para pacientes antes de electromiografía

## Resumen

Este proyecto consiste en el desarrollo de un avatar digital orientado a pacientes, diseñado para explicar de forma clara y accesible las indicaciones previas a una prueba de electromiografía. El objetivo principal fue crear una solución sencilla, visual y fácil de consultar desde el teléfono móvil mediante un enlace o código QR, de forma que el paciente pudiera recibir la información antes de la prueba de una manera más comprensible y atractiva que un texto convencional.

## Hoja de ruta seguida para su desarrollo

En primer lugar, se partió del contenido clínico facilitado por un neurofisiólogo, a partir del cual se elaboró un guion adaptado a formato audiovisual. El texto se reorganizó para que resultara más natural en voz y más comprensible para el paciente, manteniendo en todo momento el contenido médico esencial.

A continuación, se valoraron distintas opciones para generar la voz del avatar. Inicialmente se probó una solución local de síntesis de voz, pero los resultados no fueron suficientemente naturales ni precisos en la pronunciación de determinados términos. Por ello, finalmente se utilizó **Edge TTS**, seleccionando una voz en español más clara y profesional, con la que se generó el audio definitivo del mensaje.

En paralelo, se trabajó la parte visual del avatar. Primero se planteó el uso de una imagen estática, pero posteriormente se optó por una solución más realista basada en una plataforma de generación de vídeo con avatar, con el objetivo de obtener un resultado más natural, con mejor gesticulación y mayor capacidad de captar la atención del paciente. Para ello, se seleccionó un avatar con apariencia profesional y se sincronizó con el audio previamente generado.

Una vez obtenido el vídeo final, se integró en una **web estática** desarrollada específicamente para este fin. La página se diseñó con una estética limpia, clara y adaptada a dispositivos móviles, priorizando la accesibilidad y la facilidad de uso. Además, se incorporaron subtítulos activables para mejorar la comprensión en personas con dificultades auditivas o en situaciones donde no se pueda escuchar el audio.

Posteriormente, la web se publicó mediante **GitHub Pages**, lo que permitió generar un enlace accesible desde cualquier dispositivo móvil sin necesidad de instalar aplicaciones. Finalmente, también se creó un **código QR** enlazado a la web para facilitar su uso en consulta, cartelería o material informativo.

## Resultado

El resultado final es un recurso digital accesible mediante enlace y QR, compuesto por una página web sencilla que muestra un vídeo explicativo con avatar y subtítulos opcionales. El sistema permite comunicar de forma visual y clara las indicaciones previas a la electromiografía, mejorando la accesibilidad de la información y ofreciendo un formato más atractivo para el paciente.

## Tecnologías y herramientas empleadas

- Generación de voz: **Edge TTS**
- Generación del vídeo con avatar: **HeyGen**
- Edición y conversión de audio/vídeo: herramientas auxiliares como **Audacity** y **FFmpeg**
- Desarrollo web: **HTML, CSS y JavaScript**
- Publicación: **GitHub Pages**
- Acceso rápido: **código QR**
