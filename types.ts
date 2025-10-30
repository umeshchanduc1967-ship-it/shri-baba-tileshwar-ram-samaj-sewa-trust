
export interface Project {
  id: number;
  category: { en: string; hi: string };
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  quote: { en: string; hi: string };
  name: { en: string; hi: string };
  role: { en: string; hi: string };
  imageUrl: string;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  caption: { en: string; hi: string };
}
