import { Question } from './types';

export const vocationalTestQuestions: Question[] = [
  // Intereses
  {
    id: 1,
    category: 'intereses',
    text: 'En mi tiempo libre, prefiero...',
    options: [
      { text: 'Leer sobre ciencia, ver documentales o visitar museos de historia natural.', areas: ['Ciencias Exactas y Naturales', 'Ciencias Sociales y Humanidades'] },
      { text: 'Ayudar a otros, ser voluntario en causas sociales o cuidar a mi familia/amigos.', areas: ['Ciencias de la Salud', 'Ciencias de la Educación'] },
      { text: 'Crear cosas: dibujar, escribir, tocar un instrumento, diseñar o filmar videos.', areas: ['Arte, Diseño y Comunicación'] },
      { text: 'Organizar eventos, planificar proyectos o iniciar un pequeño emprendimiento.', areas: ['Ciencias Económicas y Empresariales'] },
      { text: 'Desarmar aparatos, programar, jugar videojuegos o aprender sobre nuevas tecnologías.', areas: ['Ingeniería y Tecnología'] },
      { text: 'Estar al aire libre, hacer trekking, cuidar plantas o animales.', areas: ['Agropecuarias y Ambientales'] },
      { text: 'Debatir sobre temas de actualidad, política o filosofía.', areas: ['Ciencias Sociales y Humanidades'] },
      { text: 'Enseñar o explicarle temas a otras personas.', areas: ['Ciencias de la Educación'] },
    ],
  },
  // Habilidades
  {
    id: 2,
    category: 'habilidades',
    text: 'La gente dice que soy bueno/a para...',
    options: [
      { text: 'Resolver problemas matemáticos o de lógica de forma creativa.', areas: ['Ciencias Exactas y Naturales', 'Ingeniería y Tecnología'] },
      { text: 'Escuchar y entender los problemas de los demás, y dar buenos consejos.', areas: ['Ciencias de la Salud', 'Ciencias Sociales y Humanidades'] },
      { text: 'Comunicar ideas de forma clara, ya sea escribiendo, hablando o visualmente.', areas: ['Arte, Diseño y Comunicación', 'Ciencias de la Educación'] },
      { text: 'Liderar equipos, negociar y tomar decisiones estratégicas.', areas: ['Ciencias Económicas y Empresariales'] },
      { text: 'Trabajar con precisión y atención al detalle en tareas técnicas.', areas: ['Ingeniería y Tecnología', 'Ciencias Exactas y Naturales'] },
      { text: 'El trabajo manual, construir o reparar cosas con mis manos.', areas: ['Ingeniería y Tecnología', 'Agropecuarias y Ambientales'] },
      { text: 'Analizar textos complejos, investigar y argumentar mis ideas.', areas: ['Ciencias Sociales y Humanidades'] },
      { text: 'Adaptarme a diferentes situaciones y aprender rápido.', areas: ['Ingeniería y Tecnología', 'Ciencias Económicas y Empresariales'] },
    ],
  },
  // Valores
  {
    id: 3,
    category: 'valores',
    text: 'En un trabajo, lo más importante para mí sería...',
    options: [
      { text: 'La estabilidad económica y la posibilidad de crecer profesionalmente.', areas: ['Ciencias Económicas y Empresariales', 'Ingeniería y Tecnología'] },
      { text: 'Generar un impacto positivo en la sociedad y ayudar a quienes lo necesitan.', areas: ['Ciencias de la Salud', 'Ciencias Sociales y Humanidades', 'Ciencias de la Educación'] },
      { text: 'La creatividad, la autoexpresión y tener un trabajo que no sea rutinario.', areas: ['Arte, Diseño y Comunicación'] },
      { text: 'El desafío intelectual, resolver problemas complejos y estar siempre aprendiendo.', areas: ['Ciencias Exactas y Naturales', 'Ingeniería y Tecnología'] },
      { text: 'El contacto con la naturaleza y contribuir a la sostenibilidad del planeta.', areas: ['Agropecuarias y Ambientales'] },
      { text: 'Tener autonomía, flexibilidad de horarios y ser mi propio jefe.', areas: ['Ciencias Económicas y Empresariales', 'Arte, Diseño y Comunicación'] },
      { text: 'Trabajar en equipo con gente que comparta mis valores.', areas: ['Ciencias de la Educación', 'Ciencias Sociales y Humanidades'] },
      { text: 'El reconocimiento por mis logros y la posibilidad de liderar proyectos.', areas: ['Ciencias Económicas y Empresariales', 'Ingeniería y Tecnología'] },
    ],
  },
  // Ambiente Laboral
  {
    id: 4,
    category: 'ambiente',
    text: 'Me sentiría más cómodo/a trabajando en...',
    options: [
      { text: 'Un laboratorio, centro de investigación o una empresa de base tecnológica.', areas: ['Ciencias Exactas y Naturales', 'Ingeniería y Tecnología', 'Agropecuarias y Ambientales'] },
      { text: 'Un hospital, consultorio, centro de salud o una ONG.', areas: ['Ciencias de la Salud', 'Ciencias Sociales y Humanidades'] },
      { text: 'Una oficina moderna, un banco, una consultora o mi propia empresa.', areas: ['Ciencias Económicas y Empresariales'] },
      { text: 'Un estudio de diseño, una agencia de publicidad, un medio de comunicación o un taller de arte.', areas: ['Arte, Diseño y Comunicación'] },
      { text: 'Una escuela, una universidad o un centro de capacitación.', areas: ['Ciencias de la Educación'] },
      { text: 'Al aire libre, en el campo, una bodega o un parque natural.', areas: ['Agropecuarias y Ambientales'] },
      { text: 'Un juzgado, un organismo público o una organización internacional.', areas: ['Ciencias Sociales y Humanidades'] },
      { text: 'Desde casa, con horarios flexibles y gestionando mis propios proyectos.', areas: ['Ingeniería y Tecnología', 'Arte, Diseño y Comunicación', 'Ciencias Económicas y Empresariales'] },
    ],
  },
  // Estilo de Aprendizaje
  {
    id: 5,
    category: 'aprendizaje',
    text: 'Aprendo mejor cuando...',
    options: [
      { text: 'Puedo experimentar, hacer y ver resultados prácticos (aprender haciendo).', areas: ['Ingeniería y Tecnología', 'Agropecuarias y Ambientales', 'Arte, Diseño y Comunicación'] },
      { text: 'Leo, investigo y analizo información teórica y abstracta.', areas: ['Ciencias Exactas y Naturales', 'Ciencias Sociales y Humanidades'] },
      { text: 'Trabajo en grupo, debato ideas y colaboro con otras personas.', areas: ['Ciencias Sociales y Humanidades', 'Ciencias de la Educación', 'Ciencias Económicas y Empresariales'] },
      { text: 'Sigo un plan estructurado, con objetivos claros y un método paso a paso.', areas: ['Ingeniería y Tecnología', 'Ciencias Económicas y Empresariales'] },
      { text: 'Tengo libertad para explorar mis propios intereses y ser autodidacta.', areas: ['Arte, Diseño y Comunicación', 'Ciencias Exactas y Naturales'] },
      { text: 'Puedo ayudar a otros a aprender y aplicar mis conocimientos para enseñar.', areas: ['Ciencias de la Educación'] },
      { text: 'Estoy en un entorno que me inspira visual y estéticamente.', areas: ['Arte, Diseño y Comunicación'] },
      { text: 'Puedo aplicar lo aprendido a situaciones de la vida real y resolver problemas concretos.', areas: ['Ciencias de la Salud', 'Ingeniería y Tecnología', 'Agropecuarias y Ambientales'] },
    ],
  },
];