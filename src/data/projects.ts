export interface Project {
  id: string
  title: string
  category: string
  area: string
  image: string
  style: 'scandinavian' | 'bohemian' | 'industrial' | 'japandi' | 'contemporary'
  description?: string
}

export const projects: Project[] = [
  {
    id: 'jungle-retreat-house',
    title: 'Jungle Retreat House',
    category: 'Retreat House',
    area: '312 M²',
    image: '/assets/project_jungle_retreat.jpg',
    style: 'contemporary',
    description: 'An expansive open-plan pavilion featuring natural cedar accents, raw limestone walls, and panoramic forest vistas.'
  },
  {
    id: 'the-urban-haven',
    title: 'The Urban Haven',
    category: 'Apartment',
    area: '212 M²',
    image: '/assets/project_urban_haven.jpg',
    style: 'scandinavian',
    description: 'A serene sanctuary featuring bespoke arched niches, acoustic textile walls, and sculptural Scandinavian furniture.'
  },
  {
    id: 'the-modern-residence',
    title: 'The Modern Residence',
    category: 'Villa',
    area: '185 M²',
    image: '/assets/project_photo_wall_clean.jpg',
    style: 'scandinavian',
    description: 'Vaulted timber ceilings with an editorial gallery wall, balanced neutral linen upholstery, and landscaped courtyard light.'
  },
  {
    id: 'the-executive-suite',
    title: 'The Executive Suite',
    category: 'Executive Suite',
    area: '265 M²',
    image: '/assets/project_marble_office.jpg',
    style: 'industrial',
    description: 'Veined Italian grey marble slab walls, continuous cove illumination, and architectural stone desks.'
  }
]
