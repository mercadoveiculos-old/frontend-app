import {
  AddressReplica,
  CanonicalReplica,
  CategoryReplica,
  PhoneReplica,
  VideoReplica,
  SheduleReplica,
  UtilReplica,
  TagReplica
} from '@/models'

export interface BusinessReplica {
  _id: string
  tenant_score?: string
  page_score?: string
  plan_id?: string
  fantasy_name: string
  logo: string
  short_description?: string
  long_description?: string
  status?: string
  meta_title: string
  meta_description: string
  slug: string
  updated_at: string
  created_at: string
  business_id: string
  address: AddressReplica
  canonical: CanonicalReplica
  categories: CategoryReplica
  images: Object
  phones: PhoneReplica
  schedule: SheduleReplica
  tags: TagReplica
  utils: UtilReplica
  videos: VideoReplica
  url_pathname: string
}
