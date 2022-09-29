<template>
  <div v-show="$shedule && hideSchedule === false" class="flex gap-2 mt-6">
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
      <div v-if="showHourSchedule" class="w-5/6 md:w-3/6">
        <div
          v-for="(data, index) in finalMapSchedule"
          :key="index"
          class="flex justify-between md:flex-none md:grid md:grid-cols-2 gap-0 text-base mb-5 md:mb-3 font-normal text-secondary"
        >
          <div :class="data | filterDay">
            {{ data.day }}
          </div>

          <template v-if="data.opened === false">
            <div
              class="text-red-main-700 font-medium justify-self-end md:justify-self-start"
              :class="data | filterDay"
            >
              {{ closed }}
            </div>
          </template>

          <template v-else-if="index === 0 && statusSchedule === 'closed'">
            <div
              class="text-red-main-700 font-medium justify-self-end md:justify-self-start"
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
              <span v-for="hour in data.hours" class="flex flex-col">
                <template v-if="typeof hour === 'object'">
                  <template v-for="(h, i) in hour">
                    <br v-if="i > 1" />
                    {{ h.open }}
                    <template v-if="i > 0">&ndash;</template>
                    {{ h.close }}
                  </template>
                </template>
              </span>
            </div>
          </template>
        </div>
      </div>
    </transition>

    <template v-if="displaySchedule === 'always_open'">
      <span class="text-sm font-medium text-secondary-main-normal">
        Aberto 24 Horas
      </span>
    </template>

    <template v-else-if="displaySchedule === 'only_by_appointment'">
      <div class="flex flex-col">
        <button class="flex items-center gap-2" @click.prevent="showWeekDays()">
          <span class="text-sm font-medium text-blue-600">
            Somente com hora marcada
          </span>
          <span>
            <ArrowDropRigth class="ml-2" v-if="showDaysSchedule" />
            <ArrowDropDownIcon v-else />
          </span>
        </button>
        <div class="w-full mt-4">
          <transition
            name="fade"
            enter-active-class="animate__animated animate__bounceIn animate__delay-200ms"
            leave-active-class="animate__animated animate__bounceOut animate__delay-200ms"
          >
            <div v-if="showDaysSchedule">
              <div
                v-for="data in mappedDaysSchedule"
                :key="data.key"
                class="text-base font-semibold mb-5 md:mb-3 text-secondary"
              >
                <div>
                  {{ data.day }}
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </template>

    <template
      v-else-if="displaySchedule === 'selected_time' && display === true"
    >
      <button class="flex items-center gap-2" @click.prevent="showDataHours()">
        <StatusScheduleDataBusinessDetailsWebsite :status="statusSchedule" />
        <span
          v-if="statusSchedule !== 'open'"
          class="text-sm font-normal text-primary"
        >
          <template v-if="statusSchedule === 'closed_lunch'">
            &sdot; retorna às {{ lunchTimeOpen }}
          </template>

          <template v-else-if="statusSchedule !== 'closed'">
            &sdot; {{ hourClose }}
          </template>

          <template v-if="statusSchedule !== 'closed_lunch'">
            &sdot; abre {{ abbrDay }}. às {{ hourOpen }}
          </template>
        </span>
        <span>
          <ArrowDropDownIcon />
        </span>
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'

import { businessReading } from '@/store'
import { ScheduleReplica } from '@/models'
import { ScheduleData } from '@/types'
import { daysOfWeek } from '@/utils/data/days-week'
import { ExtractHoursToday } from '@/utils/extract-hours-schedule'

const timeTemp = '2022-09-28T11:31:00-04:00'
const numberPattern = /\d+/g
const now = moment(timeTemp).format('HHmm')
console.log(now)

export default Vue.extend({
  data() {
    return {
      hideSchedule: false,
      finalMapSchedule: {} as ScheduleData,
      display: true,
      displaySchedule: '',
      closed: 'Fechado',
      mappedDaysSchedule: {},
      scheduleDataWeek: [] as any[],
      showHourSchedule: false,
      showDaysSchedule: false,
      shedule: '',
      abbrDay: '',
      hourOpen: '',
      hourClose: '',
      statusSchedule: 'open',
      lunchTimeOpen: '',
      lunchTimeClose: ''
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
    init() {
      if (this.$shedule) {
        if (this.$shedule.data.length > 0) {
          const data = JSON.parse(this.$shedule.data)
          const schedule = data.schedule ? data.schedule : null
          if (schedule === 'always_open') {
            this.displaySchedule = schedule
          } else if (schedule === 'only_by_appointment') {
            this.displaySchedule = schedule
            this.mappedDaysSchedule = this._scheduleNormamizeAppointment(
              data.schedule_days
            )
          } else if (schedule === 'selected_time') {
            this.displaySchedule = schedule
            this._scheduleNormamizeSelectedTime(data.schedule_days)
          }
        }
      }
    },

    showDataHours() {
      this.display = false
      this.showHourSchedule = true
    },

    showWeekDays() {
      this.showDaysSchedule = !this.showDaysSchedule
    },

    newArrayScheduleMap() {
      const scheduleDataWeek = this.scheduleDataWeek
      const dataSchedule = scheduleDataWeek.reduce((acc: any, element: any) => {
        return element
      }, [])

      const arraySorted = this._sortArrayDayWeek().map(
        (element: any) => element
      )

      return this._.flattenDeep(
        arraySorted.map((item: any) =>
          this._.filter(dataSchedule, { key: item })
        )
      )
    },

    headScheduleNow() {
      // http://localhost:3000/n/comercio-de-lonas/ms/beltrao-do-norte/delvalle-comercial-ltda
      // http://localhost:3000/n/personalizacao-automotiva/df/valdez-do-leste/aranda-comercial-ltda-1

      const schedule = this.finalMapSchedule
      const firstSchedule = this._.head(schedule as any) as ScheduleData

      if (this._.isArray(firstSchedule?.hours)) {
        try {
          const hours = firstSchedule.hours

          const hourToday = new ExtractHoursToday(hours)
          hourToday.hourOpen()
          hourToday.hourClose()

          const hourOpen = hourToday.open
          const hourClose = hourToday.close
          this.hourClose = hourClose

          const todayDate = moment().format().slice(0, 11)
          const timeEnd = `${todayDate}${hourClose}:00-04:00`

          const diffMs = moment(timeTemp).diff(moment(timeEnd))
          const durObj = moment.duration(diffMs)
          const soon = durObj.asHours()

          if (soon > -1.0 && soon < -0.01) {
            this.statusSchedule = 'soon'
          } else {
            const openNumber = this._.toNumber(
              hourOpen.match(numberPattern).join('')
            )
            const closeNumber = this._.toNumber(
              hourClose.match(numberPattern).join('')
            )
            if (
              this._.toNumber(now) < openNumber ||
              this._.toNumber(now) > closeNumber
            ) {
              this.statusSchedule = 'closed'
            }
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        this.hideSchedule = true
      }
    },

    lastSchedule() {
      const schedule = this.finalMapSchedule
      const talkMapped = this._.take(schedule as any, 2)
      const lastSchedule = this._.last(talkMapped) as ScheduleData
      if (this._.isArray(lastSchedule?.hours)) {
        this._lunchTime(this._.head(talkMapped))

        this.abbrDay = String(lastSchedule.day.slice(0, 3))
        const hours = lastSchedule.hours

        const hourToday = new ExtractHoursToday(hours)
        hourToday.hourOpen()

        this.hourOpen = hourToday.open
      } else {
        this.hideSchedule = true
      }
    },

    _lunchTime(data: any) {
      if (!this._.isEmpty(data?.hours)) {
        this.abbrDay = String(data?.day.slice(0, 3))

        const hours = data.hours
        const hourData = new ExtractHoursToday(hours)

        hourData.hourLunchTime()

        const lunchTimeOpen = hourData.open
        const lunchTimeClose = hourData.close

        const open = this._.toNumber(
          lunchTimeOpen.match(numberPattern).join('')
        )

        const close = this._.toNumber(
          lunchTimeClose.match(numberPattern).join('')
        )

        console.log(this._.toNumber(now), open)

        if (this._.toNumber(now) > close && this._.toNumber(now) < open) {
          console.log('closed_lunch')

          this.statusSchedule = 'closed_lunch'
          this.lunchTimeOpen = lunchTimeOpen
          this.lunchTimeClose = lunchTimeClose
        }
      }
    },

    _daysOfWeekReduce() {
      return daysOfWeek.reduce((acc: any, item) => {
        return !acc[item.key]
          ? { ...acc, [item.key]: [item] }
          : { ...acc, [item.key]: [...acc[item.key], item] }
      }, [])
    },

    _daysOfWeekMap(schedule: any) {
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

    _filterItemsDaysSchedule(
      item: any,
      dataMapped: any,
      days: [string, unknown]
    ) {
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
      return dataPayload
    },

    _extractedForEachMountSchedule(
      weekData: [string, unknown][],
      dataMapped: any,
      payload: any[]
    ) {
      weekData.forEach((days) => {
        days.map((items: any) => {
          Array(items).map((item) => {
            if (typeof item === 'object') {
              if (!this._.isEmpty(item[0])) {
                const dataPayload: any = this._filterItemsDaysSchedule(
                  item,
                  dataMapped,
                  days
                )
                payload.push(dataPayload)
              }
            }
          })
        })
      })
      this.scheduleDataWeek.push(payload)
    },

    _scheduleNormamizeAppointment(schedule_days: any) {
      const schedule = Object.entries(schedule_days)
      if (this._.isEmpty(schedule)) return false
      return schedule.map(function (item: any) {
        return daysOfWeek
          .filter((day) => day.key === item[1] ?? null)
          .reduce((el) => el)
      })
    },

    _scheduleNormamizeSelectedTime(schedule_days: any) {
      const schedule = Object.entries(schedule_days)

      const dataMapped = this._daysOfWeekMap(schedule)
      const weeks = this._daysOfWeekReduce()
      const weekData = Object.entries(weeks)
      const payload = Object.entries([]) as any[]
      this._extractedForEachMountSchedule(weekData, dataMapped, payload)
    },

    _sortArrayDayWeek() {
      const today = moment().format('dddd')
      let listDay = daysOfWeek.reduce((acc: any, item) => {
        acc.push(item.key)
        return acc
      }, [])

      const before = listDay.splice(0, listDay.indexOf(today.toLowerCase()))
      return listDay.concat(before)
    }
  },

  mounted() {
    this.init()
    const finalMapSchedule: ScheduleData = this.newArrayScheduleMap() as any
    this.finalMapSchedule = finalMapSchedule

    if (this.displaySchedule === 'selected_time') {
      this.headScheduleNow()
      this.lastSchedule()
    }
  }
})
</script>
