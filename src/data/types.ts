export type VocationalArea =
  | 'Ciencias de la Salud'
  | 'Ingeniería y Tecnología'
  | 'Ciencias Sociales y Humanidades'
  | 'Ciencias Económicas y Empresariales'
  | 'Arte, Diseño y Comunicación'
  | 'Ciencias Exactas y Naturales'
  | 'Ciencias de la Educación'
  | 'Agropecuarias y Ambientales';

export interface Option {
  text: string;
  areas: VocationalArea[];
}

export interface Question {
  id: number;
  category: 'intereses' | 'habilidades' | 'valores' | 'ambiente' | 'aprendizaje';
  text: string;
  options: Option[];
}

export interface Career {
  name: string;
  institution: string;
  type: string;
  duration: string;
  area: string;
}

export interface AreaResult {
  area: VocationalArea;
  score: number;
  description: string;
  careers: Career[];
}