<template>
  <div class="flex gap-2 mt-6">
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
          v-for="data in scheduleDataSort"
          :key="data.key"
          class="flex justify-between md:flex-none md:grid md:grid-cols-2 gap-0 text-base mb-5 md:mb-3 font-normal text-secondary"
        >
          <div :class="data | filterDay">
            {{ data.day }}
          </div>
          <template v-if="data.closed === true">
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
              {{ data.open }}&ndash;{{ data.close }}
            </div>
          </template>
        </div>
      </div>
    </transition>

    <div v-show="!show">
      <button class="flex items-center gap-2" @click.prevent="showHours()">
        <!-- <span class="text-sm font-medium text-secondary-main-normal">
        Aberto 24 Horas
      </span> -->
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { businessReading } from '@/store'
import { SheduleReplica } from '@/models'

import moment from 'moment'

interface SheduleDay {
  key: string
  closed: boolean
  day: string
}

interface SheduleHour {
  open: string
  close: string
}

interface SheduleData {
  key: string
  closed: boolean
  day: string
  open: string
  close: string
}

export default Vue.extend({
  filters: {
    filterDay(data: any) {
      const today = moment().format('dddd')
      if (data.key === today) {
        return 'font-bold text-primary'
      }
      return ''
    }
  },
  data() {
    return {
      closed: 'Fechado',
      scheduleDataSort: [] as SheduleData[],
      scheduleDataWeek: [] as SheduleData[],
      show: false,

      dayWeek: [
        {
          key: 'sunday',
          day: 'domingo'
        },
        {
          key: 'monday',
          day: 'segunda-feira'
        },
        {
          key: 'tuesday',
          day: 'terça-feira'
        },
        {
          key: 'wednesday',
          day: 'quarta-feira'
        },
        {
          key: 'thursday',
          day: 'quinta-feira'
        },
        {
          key: 'friday',
          day: 'sexta-feira'
        },
        {
          key: 'saturday',
          day: 'sábado'
        }
      ]
    }
  },

  computed: {
    $shedule(): SheduleReplica | null {
      return businessReading.$schedule || null
    }
  },

  methods: {
    sheduleData() {
      const self = this
      if (this.$shedule) {
        if (this.$shedule.data.length > 0) {
          const data = JSON.parse(this.$shedule.data)
          const schedule = Object.entries(data.schedule_days)

          schedule.map(function (item: any) {
            const week = String(
              self.dayWeek
                .filter((day) => day.key === item[0])
                .map((item) => item.day)
            )

            const payload = {
              key: String(item[0]),
              closed: false,
              day: week,
              open: '07:00',
              close: '12:00'
            }

            self.scheduleDataWeek.push(payload)
          })
        }
      }
    },

    showHours() {
      this.show = true
    },
    sortArrayHours(toSort: any) {
      const today = moment().format('dddd')

      let list = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
      ]

      const before = list.splice(0, list.indexOf(today))
      list = list.concat(before)
      return list.filter((item) => toSort.includes(item))
    },

    listNewArrayHours() {
      const scheduleDataWeek = this.scheduleDataWeek
      const dataList = scheduleDataWeek.map((data: any) => {
        return data.key
      })
      this.sortArrayHours(dataList).filter((data: any) => {
        scheduleDataWeek.filter((obj) => {
          if (obj.key == data) {
            this.scheduleDataSort.push(obj)
          }
        })
      })
    }
  },

  mounted() {
    console.table(this.scheduleDataWeek)
    console.table(this.sheduleData())

    this.listNewArrayHours()
  }
})
</script>
