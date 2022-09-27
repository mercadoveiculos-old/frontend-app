import { ScheduleHours } from "@/types/replica/ScheduleHours"

export type ScheduleData = {
  key: string
  opened: boolean
  hours: ScheduleHours
  day: string
}