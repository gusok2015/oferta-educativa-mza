export type CareerArea = 'Ciencias de la Salud' | 'Ciencias Económicas' | 'Arquitectura y Diseño' | 'Ciencias Sociales' | 'Tecnología' | 'Arte y Diseño';

export interface TestQuestion {
  text: string;
  area: CareerArea;
}
