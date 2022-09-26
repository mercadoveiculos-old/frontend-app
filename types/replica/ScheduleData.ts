import { ScheduleHours } from "@/types/replica/ScheduleHours"

export interface ScheduleData {
  key: string
  opened: boolean
  hours: ScheduleHours
  day: string
}