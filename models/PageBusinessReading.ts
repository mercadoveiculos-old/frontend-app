import { Business, Image } from '@/models'

export interface PageBusinessReading {
  id: string
  type?: string
  attributes: Business
  relationships: {
    images: Image
  }
  meta: Object
  links: Object
}
