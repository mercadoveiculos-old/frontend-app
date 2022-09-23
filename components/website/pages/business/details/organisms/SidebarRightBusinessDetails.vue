<template>
  <!-- Form Faça um orçamento -->
  <client-only>
    <Aside class-name="hidden lg:grid grid-cols-1 md:col-span-5 -mt-4">
      <div class="grid-cols-3 space-y-10">
        <FormBudgetBusinessDetailsWebsite />
        <section class="sticky top-24">
          <AdsWebsite
            class-name="bg-white border border-gray-main-200 rounded-md"
          />
        </section>
      </div>
    </Aside>
  </client-only>
</template>
