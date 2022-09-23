import {
  AddressReplica,
  CanonicalReplica,
  CategoryReplica,
  ImageReplica,
  PaymentReplica,
  PhoneReplica,
  VideoReplica,
  SheduleReplica,
  UtilReplica,
  TagReplica
} from '@/models'

export interface BusinessReplica {
  _id?: string
  business_id: string
  fantasy_name: string
  logo: string
  description: string
  status: string
  meta_title: string
  meta_description: string
  slug: string
  url_pathname: string
  address: AddressReplica
  canonical: CanonicalReplica
  categories: CategoryReplica
  images: ImageReplica
  payments: PaymentReplica
  phones: PhoneReplica
  schedule: SheduleReplica
  tags: TagReplica
  utils: UtilReplica
  videos: VideoReplica
  updated_at?: string
  created_at?: string
  deleted_at?: string
}
