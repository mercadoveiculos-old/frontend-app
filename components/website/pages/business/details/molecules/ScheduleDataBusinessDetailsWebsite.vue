<template>
  <div v-show="$shedule" class="flex gap-2 mt-6">
    <figure>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.6 12C17.6 15.6451 14.6451 18.6 11 18.6C7.35492 18.6 4.4 15.6451 4.4 12C4.4 8.35492 7.35492 5.4 11 5.4C14.6451 5.4 17.6 8.35492 17.6 12ZM19 12C19 16.4183 15.4183 20 11 20C6.58172 20 3 16.4183 3 12C3 7.58172 6.58172 4 11 4C15.4183 4 19 7.58172 19 12ZM11.75 7.5C11.75 7.08579 11.4142 6.75 11 6.75C10.5858 6.75 10.25 7.08579 10.25 7.5V12C10.25 12.1989 10.329 12.3897 10.4697 12.5303L13.9697 16.0303C14.2626 16.3232 14.7374 16.3232 15.0303 16.0303C15.3232 15.7374 15.3232 15.2626 15.0303 14.9697L11.75 11.6893V7.5Z"
          fill="#E68533"
        />
      </svg>
    </figure>
    <transition
      name="fade"
      enter-active-class="animate__animated animate__slideInRight animate__delay-200ms"
      leave-active-class="animate__animated animate__slideInRight animate__delay-200ms"
    >
      <div v-if="show" class="w-5/6 md:w-3/6">
        <div
          v-for="data in newMappedSchedule()"
          :key="data.key"
          class="flex justify-between md:flex-none md:grid md:grid-cols-2 gap-0 text-base mb-5 md:mb-3 font-normal text-secondary"
        >
          <div :class="data | filterDay">
            {{ data.day }}
          </div>
          <template v-if="data.opened === false">
            <div
              class="text-red-main-700 justify-self-end md:justify-self-start"
              :class="data | filterDay"
            >
              {{ closed }}
            </div>
          </template>
          <template v-else>
            <div
              :class="data | filterDay"
              class="justify-self-end md:justify-self-start"
            >
              <!-- {{ data.hour }}&ndash;{{ data.close }} -->
              <span v-for="hour in data.hours" class="flex flex-col">
                <template v-if="typeof hour === 'object'">
                  <template v-for="(h, index) in hour">
                    <br v-if="index > 1" />
                    {{ h.open }}
                    <template v-if="index > 0">&ndash;</template>
                    {{ h.close }}
                  </template>
                </template>
              </span>
            </div>
          </template>
        </div>
      </div>
    </transition>

    <div v-show="!show">
      <template v-if="alwaysOpen">
        <span class="text-sm font-medium text-secondary-main-normal">
          Aberto 24 Horas
        </span>
      </template>

      <template v-else-if="selectedTime">
        <button class="flex items-center gap-2" @click.prevent="showHours()">
          <span class="text-sm font-medium text-secondary-main-normal">
            Fecha em breve
          </span>

          <span class="text-sm font-normal text-primary">
            &sdot; 23:00 &sdot; abre sáb. às 07:00
          </span>
          <span>
            <ArrowDropDownIcon />
          </span>
        </button>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { businessReading } from '@/store'
import { ScheduleReplica } from '@/models'
import { ScheduleData } from '@/types'
import { daysOfWeek } from '@/utils/data/days-week'

import moment from 'moment'

export default Vue.extend({
  data() {
    return {
      alwaysOpen: false,
      selectedTime: false,
      closed: 'Fechado',
      scheduleDataWeek: [] as any[],
      show: false,
      shedule: ''
    }
  },

  filters: {
    filterDay(data: any) {
      const today = moment().format('dddd')
      if (data.key === today) return 'font-bold text-primary'
      return ''
    }
  },

  computed: {
    $shedule(): ScheduleReplica | null {
      return businessReading.$schedule || null
    }
  },

  methods: {
    showHours() {
      this.show = true
    },

    daysOfWeekReduce() {
      return daysOfWeek.reduce((acc: any, item) => {
        return !acc[item.key]
          ? { ...acc, [item.key]: [item] }
          : { ...acc, [item.key]: [...acc[item.key], item] }
      }, [])
    },

    daysOfWeekMap(schedule: any) {
      return schedule.map(function (item: any) {
        return [
          daysOfWeek
            .filter((day) => day.key === item[0])
            .map((item) => item.key)
            .join(','),
          ...(item[1] ?? [])
        ]
      })
    },

    extractedForEachMountSchedule(
      weekData: [string, unknown][],
      dataMapped: any,
      payload: any[]
    ) {
      weekData.forEach((days) => {
        days.map((items: any) => {
          Array(items).map((item) => {
            if (typeof item === 'object') {
              const key = item[0]['key'] ?? ''
              const day = item[0]['day'] ?? ''

              const dataPayload: any = {
                key: key,
                opened: dataMapped.some(
                  (item: any) => item[0] === days.reduce((item) => item)
                ),
                hours: dataMapped
                  .filter((element: any) => element[0] === key)
                  .map((item: any) => {
                    if (typeof item === 'object') {
                      return { ...item }
                    }
                  }),
                day: day
              }
              payload.push(dataPayload)
            }
          })
        })
      })
      this.scheduleDataWeek.push(payload)
    },

    scheduleNormamizeSelectedTime(schedule_days: any) {
      const schedule = Object.entries(schedule_days)
      const dataMapped = this.daysOfWeekMap(schedule)
      const weeks = this.daysOfWeekReduce()

      const weekData = Object.entries(weeks)
      const payload = Object.entries([]) as any[]

      this.extractedForEachMountSchedule(weekData, dataMapped, payload)
    },

    scheduleDataMap() {
      if (this.$shedule) {
        if (this.$shedule.data.length > 0) {
          const data = JSON.parse(this.$shedule.data)
          const schedule = data.schedule ? data.schedule : null
          if (schedule === 'always_open') {
            this.alwaysOpen = true
          } else if (schedule === 'selected_time') {
            this.selectedTime = true
            this.scheduleNormamizeSelectedTime(data.schedule_days)
          }
        }
      }
    },

    sortArrayDayWeek() {
      const today = moment().format('dddd')
      let listDay = daysOfWeek.reduce((acc: any, item) => {
        acc.push(item.key)
        return acc
      }, [])

      const before = listDay.splice(0, listDay.indexOf(today.toLowerCase()))
      return listDay.concat(before)
    },

    newMappedSchedule() {
      const schedule = [] as ScheduleData[]
      const scheduleDataWeek = this.scheduleDataWeek
      const dataSchedule = scheduleDataWeek.reduce((acc: any, element: any) => {
        return element
      }, [])

      this.sortArrayDayWeek().map((day: any) => {
        dataSchedule.map((data: any) => {
          if (data.key === day) schedule.push(data)
        })
      })
      return schedule
    }
  },

  mounted() {
    this.scheduleDataMap()
  }
})
</script>
