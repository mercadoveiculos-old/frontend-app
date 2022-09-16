<template>
  <form
    action=""
    method="get"
    class="hidden relative lg:flex flex-1 items-center"
  >
    <input
      type="text"
      class="form-input block xl:hidden flex-1 rounded-md"
      placeholder="Buscar veículos e serviços automotivos"
    />

    <input
      type="text"
      class="form-input hidden xl:block flex-1 rounded-md"
      placeholder="Buscar veículos, marcas, modelos e serviços automotivos"
    />

    <button class="absolute border-l right-1 cursor-pointer" title="Buscar">
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <title>Buscar</title>
          <path
            d="M21.05 16.703a1.083 1.083 0 0 0 1.532-1.532l-1.533 1.532Zm-5.401-1.532a1.083 1.083 0 1 0 1.532 1.532l-1.532-1.532Zm10.066 9.012a1.083 1.083 0 1 0-1.532 1.532l1.532-1.532Zm2.519 5.583a1.083 1.083 0 1 0 1.532-1.532l-1.532 1.532Zm-9.119-1.452a9.198 9.198 0 0 0 9.199-9.199h-2.167a7.032 7.032 0 0 1-7.032 7.032v2.167Zm9.199-9.199a9.199 9.199 0 0 0-9.199-9.198v2.166a7.032 7.032 0 0 1 7.032 7.032h2.167Zm-9.199-9.198a9.199 9.199 0 0 0-9.198 9.198h2.166a7.032 7.032 0 0 1 7.032-7.032V9.917Zm-9.198 9.198a9.199 9.199 0 0 0 9.198 9.199v-2.167a7.032 7.032 0 0 1-7.032-7.032H9.917Zm12.665-3.944a4.89 4.89 0 0 0-3.467-1.435v2.166c.756 0 1.438.305 1.934.801l1.533-1.532Zm-3.467-1.435a4.89 4.89 0 0 0-3.466 1.435l1.532 1.532a2.724 2.724 0 0 1 1.934-.8v-2.167Zm5.068 11.98 4.051 4.05 1.532-1.532-4.05-4.05-1.533 1.531Z"
            fill="#7B828B"
          />
        </g>
      </svg>
    </button>
  </form>
</template>
