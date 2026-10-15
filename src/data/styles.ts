export interface DesignStyle {
  id: string
  name: string
  count: number
  image: string
  tagline: string
}

export const designStyles: DesignStyle[] = [
  {
    id: 'all',
    name: 'All Styles',
    count: 64,
    image: '/assets/hero_interior_clean.jpg',
    tagline: 'Curated architectural excellence across diverse design vernaculars.'
  },
  {
    id: 'bohemian',
    name: 'Bohemian',
    count: 16,
    image: '/assets/style_bohemian.jpg',
    tagline: 'Organic textures, handwoven textiles, and relaxed earthy warmth.'
  },
  {
    id: 'scandinavian',
    name: 'Scandinavian',
    count: 21,
    image: '/assets/style_scandinavian.png',
    tagline: 'Uncluttered purity, functional minimalism, and gentle natural radiance.'
  },
  {
    id: 'industrial',
    name: 'Industrial',
    count: 11,
    image: '/assets/style_industrial.jpg',
    tagline: 'Raw structural steel, exposed masonry, and refined metropolitan edge.'
  },
  {
    id: 'japandi',
    name: 'Japandi',
    count: 16,
    image: '/assets/style_japandi.jpg',
    tagline: 'Harmonious synthesis of Japanese wabi-sabi simplicity and Nordic utility.'
  }
]
