
import { AreaResult, VocationalArea } from './types';

export const testResults: Record<VocationalArea, Omit<AreaResult, 'score' | 'area'>> = {
  'Ciencias de la Salud': {
    description: 'Esta área se enfoca en el bienestar de las personas, la prevención y tratamiento de enfermedades. Requiere empatía, vocación de servicio y una base sólida en ciencias biológicas.',
    careers: [
      { name: 'Medicina', institution: 'UNCuyo, UM', type: '', duration: '', area: '' },
      { name: 'Odontología', institution: 'UNCuyo, UM', type: '', duration: '', area: '' },
      { name: 'Psicología', institution: 'UDA, Aconcagua', type: '', duration: '', area: '' },
      { name: 'Nutrición', institution: 'UM, Juan Agustín Maza', type: '', duration: '', area: '' },
      { name: 'Kinesiología y Fisioterapia', institution: 'UNCuyo, UM, Aconcagua', type: '', duration: '', area: '' },
    ],
  },
  'Ingeniería y Tecnología': {
    description: 'Si te apasiona resolver problemas complejos, diseñar, innovar y aplicar la ciencia para crear soluciones prácticas, esta es tu área. Es ideal para mentes lógicas, creativas y con gran capacidad de abstracción.',
    careers: [
      { name: 'Ingeniería en Sistemas de Información', institution: 'UTN FRM, UM', type: '', duration: '', area: '' },
      { name: 'Ingeniería Civil', institution: 'UNCuyo, UTN FRM, UM', type: '', duration: '', area: '' },
      { name: 'Ingeniería Industrial', institution: 'UNCuyo, UTN FRM', type: '', duration: '', area: '' },
      { name: 'Ingeniería Mecatrónica', institution: 'UNCuyo', type: '', duration: '', area: '' },
      { name: 'Bioingeniería', institution: 'UM, UNCuyo', type: '', duration: '', area: '' },
    ],
  },
  'Ciencias Sociales y Humanidades': {
    description: 'Esta área es para quienes buscan comprender el comportamiento humano, las estructuras sociales, la historia, la cultura y la comunicación. Requiere pensamiento crítico, capacidad de análisis y buenas habilidades de comunicación.',
    careers: [
      { name: 'Abogacía', institution: 'UNCuyo, UM, UDA', type: '', duration: '', area: '' },
      { name: 'Sociología', institution: 'UNCuyo', type: '', duration: '', area: '' },
      { name: 'Ciencia Política y Administración Pública', institution: 'UNCuyo', type: '', duration: '', area: '' },
      { name: 'Comunicación Social', institution: 'UNCuyo, Juan Agustín Maza', type: '', duration: '', area: '' },
      { name: 'Historia', institution: 'UNCuyo', type: '', duration: '', area: '' },
    ],
  },
  'Ciencias Económicas y Empresariales': {
    description: 'Orientada a la gestión, planificación y análisis de los recursos económicos y financieros en organizaciones. Es ideal para personas con habilidades de liderazgo, negociación y pensamiento estratégico.',
    careers: [
      { name: 'Contador Público Nacional', institution: 'UNCuyo, UM, Aconcagua', type: '', duration: '', area: '' },
      { name: 'Licenciatura en Administración', institution: 'UNCuyo, UM, Aconcagua', type: '', duration: '', area: '' },
      { name: 'Licenciatura en Economía', institution: 'UNCuyo', type: '', duration: '', area: '' },
      { name: 'Marketing', institution: 'Aconcagua', type: '', duration: '', area: '' },
      { name: 'Comercio Internacional', institution: 'UDA', type: '', duration: '', area: '' },
    ],
  },
  'Arte, Diseño y Comunicación': {
    description: 'Si tu motor es la creatividad, la expresión y la estética, este es tu lugar. Agrupa carreras que buscan crear, comunicar y transformar la realidad a través de formas, imágenes, sonidos y palabras.',
    careers: [
      { name: 'Diseño Gráfico', institution: 'UNCuyo, UM, UDA', type: '', duration: '', area: '' },
      { name: 'Arquitectura y Urbanismo', institution: 'UM, UNCuyo, UDA', type: '', duration: '', area: '' },
      { name: 'Licenciatura en Música Popular', institution: 'UNCuyo', type: '', duration: '', area: '' },
      { name: 'Realización Audiovisual', institution: 'UDA, Aconcagua', type: '', duration: '', area: '' },
      { name: 'Diseño de Indumentaria y Textil', institution: 'UM, UDA', type: '', duration: '', area: '' },
    ],
  },
  'Ciencias Exactas y Naturales': {
    description: 'Para mentes curiosas que buscan entender las leyes fundamentales del universo, desde las partículas subatómicas hasta los ecosistemas. Requiere un alto nivel de razonamiento lógico y abstracto.',
    careers: [
      { name: 'Licenciatura en Física', institution: 'UNCuyo', type: '', duration: '', area: '' },
      { name: 'Licenciatura en Química', institution: 'UNCuyo', type: '', duration: '', area: '' },
      { name: 'Licenciatura en Ciencias Básicas (orientación Biología o Matemática)', institution: 'UNCuyo', type: '', duration: '', area: '' },
      { name: 'Geología', institution: 'UNCuyo', type: '', duration: '', area: '' },
    ],
  },
  'Ciencias de la Educación': {
    description: 'Esta área se dedica a los procesos de enseñanza y aprendizaje. Es ideal si tienes vocación para formar a otras personas, investigar sobre modelos educativos y te apasiona transmitir conocimiento.',
    careers: [
      { name: 'Ciencias de la Educación', institution: 'UNCuyo', type: '', duration: '', area: '' },
      { name: 'Profesorados de Nivel Inicial y Primario', institution: 'UNCuyo', type: '', duration: '', area: '' },
      { name: 'Profesorados de Enseñanza Media y Superior (en diversas áreas)', institution: 'UNCuyo', type: '', duration: '', area: '' },
      { name: 'Psicopedagogía', institution: 'Juan Agustín Maza', type: '', duration: '', area: '' },
    ],
  },
  'Agropecuarias y Ambientales': {
    description: 'Combina el interés por la naturaleza, la producción de alimentos y la gestión sostenible de los recursos. Mendoza, con su industria vitivinícola y agrícola, ofrece un campo laboral único para estas profesiones.',
    careers: [
      { name: 'Ingeniería Agronómica', institution: 'UNCuyo, UM', type: '', duration: '', area: '' },
      { name: 'Licenciatura en Enología', institution: 'UNCuyo, Juan Agustín Maza, UM, Don Bosco', type: '', duration: '', area: '' },
      { name: 'Licenciatura en Bromatología', institution: 'UNCuyo, Juan Agustín Maza', type: '', duration: '', area: '' },
      { name: 'Gestión Ambiental', institution: 'Congreso', type: '', duration: '', area: '' },
    ],
  },
};
