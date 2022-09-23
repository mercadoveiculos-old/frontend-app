<template>
  <Header class-name="mb-6">
    <div class="flex items-center gap-4 mb-6">
      <div
        v-if="$logo"
        class="w-20 md:w-24 bg-white border p-1 md:p-2 rounded-md h-full"
      >
        <img :src="require(`@/assets/img/${$logo}`)" :alt="$name" />
      </div>
      <h1
        class="flex-1 text-xl md:text-2xl lg:text-3xl font-montserrat font-bold md:font-black uppercase text-primary"
      >
        <span itemprop="name">{{ $name }}</span>
      </h1>
    </div>
  </Header>
</template>

<script lang="ts">
import Vue from 'vue'
import { businessReading } from '@/store'

export default Vue.extend({
  computed: {
    $logo(): string | null | undefined {
      return businessReading.$attributes?.logo || null
    },
    $name(): string | null | undefined {
      return businessReading.$attributes.fantasy_name || null
    }
  }
})
</script>
