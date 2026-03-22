export interface Course{
  id: number;
  name: string;
  image: string;
  description?: { 'es-LA': string; 'en-US': string } | string;
}
