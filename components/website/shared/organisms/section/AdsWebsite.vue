<template>
  <div :class="className">
    <div
      class="flex justify-center bg-gray-700 text-white p-0.5 rounded-tl-md w-16"
    >
      <small>Anúncio</small>
    </div>
    <div class="px-6 py-4">
      <h4 class="text-2xl font-semibold font-montserrat text-primary">
        Recursos para vendedores de carros
      </h4>
      <div class="flex gap-2 mt-4">
        <div class="w-36">
          <img src="@/assets/img/experian.png" loading="lazy" alt="" />
        </div>
        <div>
          <h6 class="font-bold mb-3">Get your FICO® Score for Free</h6>
          <p class="text-xs">
            What car can your FICO® Score get you? Find out for free today with
            Experian®.
          </p>
          <div class="flex gap-1 mt-6">
            <a href="http://" class="text-link text-sm">Saiba mais</a>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.96967 14.9697C7.67678 15.2626 7.67678 15.7374 7.96967 16.0303C8.26256 16.3232 8.73744 16.3232 9.03033 16.0303L7.96967 14.9697ZM17 7H17.75C17.75 6.58579 17.4142 6.25 17 6.25V7ZM8 6.25C7.58579 6.25 7.25 6.58579 7.25 7C7.25 7.41421 7.58579 7.75 8 7.75V6.25ZM16.25 16C16.25 16.4142 16.5858 16.75 17 16.75C17.4142 16.75 17.75 16.4142 17.75 16H16.25ZM9.03033 16.0303L17.5303 7.53033L16.4697 6.46967L7.96967 14.9697L9.03033 16.0303ZM8 7.75H17V6.25H8V7.75ZM16.25 7V16H17.75V7H16.25Z"
                fill="#2563EB"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    className: {
      type: String
    }
  }
})
</script>
