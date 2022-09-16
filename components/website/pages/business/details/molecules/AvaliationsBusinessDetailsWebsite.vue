<template>
  <div
    class="md:col-span-3 lg:col-span-3 order-first lg:order-last mt-8 md:mt-auto"
  >
    <select
      name="avaliacoes"
      id="avaliacoes"
      class="rounded-full h-8 text-xs border shadow-1dp border-gray-100 text-secondary-button"
      style=""
    >
      <option value="Melhores">Melhores avaliações</option>
    </select>
    <h5 class="font-montserrat text-lg text-primary font-bold mt-8">
      Principais avaliações
    </h5>

    <template v-for="avaliation in 5">
      <AvaliationBusinessDetailsWebsite />
      <template v-if="avaliation < 5">
        <hr />
      </template>
    </template>

    <!-- <Article
      className="my-8"
      itemscope
      itemtype="http://schema.org/UserComments"
    >
      <div class="flex flex-col gap-2">
        <header>
          <div
            itemprop="creator"
            itemscope
            itemtype="http://schema.org/Person"
            class="flex items-center gap-2"
          >
            <img
              src="@/assets/img/AVQ0V28X.jpg"
              loading="lazy"
              alt=""
              class="max-h-10 w-10 rounded-full"
            />
            <span itemprop="name" class="text-sm font-semibold"
              >Luíza Belo</span
            >
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-2 items-center">
              <div
                class="flex gap-0.5"
                itemprop="starRating"
                itemscope
                itemtype="https://schema.org/Rating"
              >
                <meta itemprop="ratingValue" content="4" />
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9816 0.487005L5.27303 4.10687L1.45033 4.68922C0.764809 4.79311 0.490077 5.67621 0.987211 6.182L3.75285 8.99806L3.09872 12.9761C2.98098 13.6951 3.70575 14.2337 4.31278 13.8975L7.73253 12.0192L11.1523 13.8975C11.7593 14.231 12.4841 13.6951 12.3663 12.9761L11.7122 8.99806L14.4779 6.182C14.975 5.67621 14.7003 4.79311 14.0147 4.68922L10.192 4.10687L8.48347 0.487005C8.17734 -0.158228 7.29035 -0.16643 6.9816 0.487005Z"
                      fill="#E06600"
                    />
                  </svg>
                </figure>
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9816 0.487005L5.27303 4.10687L1.45033 4.68922C0.764809 4.79311 0.490077 5.67621 0.987211 6.182L3.75285 8.99806L3.09872 12.9761C2.98098 13.6951 3.70575 14.2337 4.31278 13.8975L7.73253 12.0192L11.1523 13.8975C11.7593 14.231 12.4841 13.6951 12.3663 12.9761L11.7122 8.99806L14.4779 6.182C14.975 5.67621 14.7003 4.79311 14.0147 4.68922L10.192 4.10687L8.48347 0.487005C8.17734 -0.158228 7.29035 -0.16643 6.9816 0.487005Z"
                      fill="#E06600"
                    />
                  </svg>
                </figure>
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9816 0.487005L5.27303 4.10687L1.45033 4.68922C0.764809 4.79311 0.490077 5.67621 0.987211 6.182L3.75285 8.99806L3.09872 12.9761C2.98098 13.6951 3.70575 14.2337 4.31278 13.8975L7.73253 12.0192L11.1523 13.8975C11.7593 14.231 12.4841 13.6951 12.3663 12.9761L11.7122 8.99806L14.4779 6.182C14.975 5.67621 14.7003 4.79311 14.0147 4.68922L10.192 4.10687L8.48347 0.487005C8.17734 -0.158228 7.29035 -0.16643 6.9816 0.487005Z"
                      fill="#E06600"
                    />
                  </svg>
                </figure>
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9816 0.487005L5.27303 4.10687L1.45033 4.68922C0.764809 4.79311 0.490077 5.67621 0.987211 6.182L3.75285 8.99806L3.09872 12.9761C2.98098 13.6951 3.70575 14.2337 4.31278 13.8975L7.73253 12.0192L11.1523 13.8975C11.7593 14.231 12.4841 13.6951 12.3663 12.9761L11.7122 8.99806L14.4779 6.182C14.975 5.67621 14.7003 4.79311 14.0147 4.68922L10.192 4.10687L8.48347 0.487005C8.17734 -0.158228 7.29035 -0.16643 6.9816 0.487005Z"
                      fill="#E06600"
                    />
                  </svg>
                </figure>
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.55631 0.487005L4.84774 4.10687L1.02504 4.68922C0.339516 4.79311 0.0647839 5.67621 0.561918 6.182L3.32755 8.99806L2.67343 12.9761C2.55569 13.6951 3.28046 14.2337 3.88748 13.8975L7.30724 12.0192L10.727 13.8975C11.334 14.231 12.0588 13.6951 11.9411 12.9761L11.2869 8.99806L14.0526 6.182C14.5497 5.67621 14.275 4.79311 13.5894 4.68922L9.76675 4.10687L8.05817 0.487005C7.75205 -0.158228 6.86505 -0.16643 6.55631 0.487005Z"
                      fill="#D3D5D8"
                    />
                  </svg>
                </figure>
              </div>

              <h1 class="text-sm font-semibold text-primary">Perfeito</h1>
            </div>
            <time
              class="text-xs font-medium"
              itemprop="commentTime"
              datetime="…"
              >Avaliado em 11 de outubro de 2022</time
            >

            <span class="text-xs text-secondary-main-normal font-medium"
              >Conta verificada</span
            >
          </div>
        </header>

        <p
          itemprop="commentText"
          class="text-sm text-primary opacity-90 font-medium my-3"
        >
          São caprinhosos recomendo!
        </p>
        <div>
          <span class="text-xs"> 4 pessoas acharam isso útil </span>
          <div class="flex items-center mt-1.5">
            <button
              class="btn-sm text-sm py-px pt-1 font-bold text-primary border shadow-1dp"
            >
              Útil
            </button>
            <span class="font-extralight mx-2 text-gray-400">&shortmid;</span>
            <a href="#" class="text-xs text-dark-main-400 font-medium"
              >Informar abuso</a
            >
          </div>
        </div>
      </div>
    </Article>
    <hr />
    <Article
      className="my-8"
      itemscope
      itemtype="http://schema.org/UserComments"
    >
      <div class="flex flex-col gap-2">
        <header>
          <div
            itemprop="creator"
            itemscope
            itemtype="http://schema.org/Person"
            class="flex items-center gap-2"
          >
            <img
              src="@/assets/img/12.jpg"
              loading="lazy"
              alt=""
              class="max-h-10 w-10 rounded-full"
            />
            <span itemprop="name" class="text-sm font-semibold"
              >João dos Santos</span
            >
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-2 items-center">
              <div
                class="flex gap-0.5"
                itemprop="starRating"
                itemscope
                itemtype="https://schema.org/Rating"
              >
                <meta itemprop="ratingValue" content="4" />
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9816 0.487005L5.27303 4.10687L1.45033 4.68922C0.764809 4.79311 0.490077 5.67621 0.987211 6.182L3.75285 8.99806L3.09872 12.9761C2.98098 13.6951 3.70575 14.2337 4.31278 13.8975L7.73253 12.0192L11.1523 13.8975C11.7593 14.231 12.4841 13.6951 12.3663 12.9761L11.7122 8.99806L14.4779 6.182C14.975 5.67621 14.7003 4.79311 14.0147 4.68922L10.192 4.10687L8.48347 0.487005C8.17734 -0.158228 7.29035 -0.16643 6.9816 0.487005Z"
                      fill="#E06600"
                    />
                  </svg>
                </figure>
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9816 0.487005L5.27303 4.10687L1.45033 4.68922C0.764809 4.79311 0.490077 5.67621 0.987211 6.182L3.75285 8.99806L3.09872 12.9761C2.98098 13.6951 3.70575 14.2337 4.31278 13.8975L7.73253 12.0192L11.1523 13.8975C11.7593 14.231 12.4841 13.6951 12.3663 12.9761L11.7122 8.99806L14.4779 6.182C14.975 5.67621 14.7003 4.79311 14.0147 4.68922L10.192 4.10687L8.48347 0.487005C8.17734 -0.158228 7.29035 -0.16643 6.9816 0.487005Z"
                      fill="#D3D5D8"
                    />
                  </svg>
                </figure>
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9816 0.487005L5.27303 4.10687L1.45033 4.68922C0.764809 4.79311 0.490077 5.67621 0.987211 6.182L3.75285 8.99806L3.09872 12.9761C2.98098 13.6951 3.70575 14.2337 4.31278 13.8975L7.73253 12.0192L11.1523 13.8975C11.7593 14.231 12.4841 13.6951 12.3663 12.9761L11.7122 8.99806L14.4779 6.182C14.975 5.67621 14.7003 4.79311 14.0147 4.68922L10.192 4.10687L8.48347 0.487005C8.17734 -0.158228 7.29035 -0.16643 6.9816 0.487005Z"
                      fill="#D3D5D8"
                    />
                  </svg>
                </figure>
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9816 0.487005L5.27303 4.10687L1.45033 4.68922C0.764809 4.79311 0.490077 5.67621 0.987211 6.182L3.75285 8.99806L3.09872 12.9761C2.98098 13.6951 3.70575 14.2337 4.31278 13.8975L7.73253 12.0192L11.1523 13.8975C11.7593 14.231 12.4841 13.6951 12.3663 12.9761L11.7122 8.99806L14.4779 6.182C14.975 5.67621 14.7003 4.79311 14.0147 4.68922L10.192 4.10687L8.48347 0.487005C8.17734 -0.158228 7.29035 -0.16643 6.9816 0.487005Z"
                      fill="#D3D5D8"
                    />
                  </svg>
                </figure>
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.55631 0.487005L4.84774 4.10687L1.02504 4.68922C0.339516 4.79311 0.0647839 5.67621 0.561918 6.182L3.32755 8.99806L2.67343 12.9761C2.55569 13.6951 3.28046 14.2337 3.88748 13.8975L7.30724 12.0192L10.727 13.8975C11.334 14.231 12.0588 13.6951 11.9411 12.9761L11.2869 8.99806L14.0526 6.182C14.5497 5.67621 14.275 4.79311 13.5894 4.68922L9.76675 4.10687L8.05817 0.487005C7.75205 -0.158228 6.86505 -0.16643 6.55631 0.487005Z"
                      fill="#D3D5D8"
                    />
                  </svg>
                </figure>
              </div>

              <h1 class="text-sm font-semibold text-primary">
                Péssimo atendimento
              </h1>
            </div>
            <time
              class="text-xs font-medium"
              itemprop="commentTime"
              datetime="…"
              >Avaliado em 11 de outubro de 2022</time
            >

            <span class="text-xs text-secondary-main-normal font-medium"
              >Conta verificada</span
            >
          </div>
        </header>

        <p
          itemprop="commentText"
          class="text-sm text-primary opacity-90 font-medium my-3"
        >
          Não gostei e não recomendo!
        </p>
        <div>
          <span class="text-xs"> 4 pessoas acharam isso útil </span>
          <div class="flex items-center mt-1.5">
            <button
              class="btn-sm text-sm py-px pt-1 font-bold text-primary border shadow-1dp"
            >
              Útil
            </button>
            <span class="font-extralight mx-2 text-gray-400">&shortmid;</span>
            <a href="#" class="text-xs text-dark-main-400 font-medium"
              >Informar abuso</a
            >
          </div>
        </div>
      </div>
    </Article>
    <hr />
    <Article
      className="my-8"
      itemscope
      itemtype="http://schema.org/UserComments"
    >
      <div class="flex flex-col gap-2">
        <header>
          <div
            itemprop="creator"
            itemscope
            itemtype="http://schema.org/Person"
            class="flex items-center gap-2"
          >
            <img
              src="@/assets/img/47.jpg"
              loading="lazy"
              alt=""
              class="max-h-10 w-10 rounded-full"
            />
            <span itemprop="name" class="text-sm font-semibold"
              >Marley Costa</span
            >
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-2 items-center">
              <div
                class="flex gap-0.5"
                itemprop="starRating"
                itemscope
                itemtype="https://schema.org/Rating"
              >
                <meta itemprop="ratingValue" content="4" />
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9816 0.487005L5.27303 4.10687L1.45033 4.68922C0.764809 4.79311 0.490077 5.67621 0.987211 6.182L3.75285 8.99806L3.09872 12.9761C2.98098 13.6951 3.70575 14.2337 4.31278 13.8975L7.73253 12.0192L11.1523 13.8975C11.7593 14.231 12.4841 13.6951 12.3663 12.9761L11.7122 8.99806L14.4779 6.182C14.975 5.67621 14.7003 4.79311 14.0147 4.68922L10.192 4.10687L8.48347 0.487005C8.17734 -0.158228 7.29035 -0.16643 6.9816 0.487005Z"
                      fill="#E06600"
                    />
                  </svg>
                </figure>
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9816 0.487005L5.27303 4.10687L1.45033 4.68922C0.764809 4.79311 0.490077 5.67621 0.987211 6.182L3.75285 8.99806L3.09872 12.9761C2.98098 13.6951 3.70575 14.2337 4.31278 13.8975L7.73253 12.0192L11.1523 13.8975C11.7593 14.231 12.4841 13.6951 12.3663 12.9761L11.7122 8.99806L14.4779 6.182C14.975 5.67621 14.7003 4.79311 14.0147 4.68922L10.192 4.10687L8.48347 0.487005C8.17734 -0.158228 7.29035 -0.16643 6.9816 0.487005Z"
                      fill="#E06600"
                    />
                  </svg>
                </figure>
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9816 0.487005L5.27303 4.10687L1.45033 4.68922C0.764809 4.79311 0.490077 5.67621 0.987211 6.182L3.75285 8.99806L3.09872 12.9761C2.98098 13.6951 3.70575 14.2337 4.31278 13.8975L7.73253 12.0192L11.1523 13.8975C11.7593 14.231 12.4841 13.6951 12.3663 12.9761L11.7122 8.99806L14.4779 6.182C14.975 5.67621 14.7003 4.79311 14.0147 4.68922L10.192 4.10687L8.48347 0.487005C8.17734 -0.158228 7.29035 -0.16643 6.9816 0.487005Z"
                      fill="#E06600"
                    />
                  </svg>
                </figure>
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9816 0.487005L5.27303 4.10687L1.45033 4.68922C0.764809 4.79311 0.490077 5.67621 0.987211 6.182L3.75285 8.99806L3.09872 12.9761C2.98098 13.6951 3.70575 14.2337 4.31278 13.8975L7.73253 12.0192L11.1523 13.8975C11.7593 14.231 12.4841 13.6951 12.3663 12.9761L11.7122 8.99806L14.4779 6.182C14.975 5.67621 14.7003 4.79311 14.0147 4.68922L10.192 4.10687L8.48347 0.487005C8.17734 -0.158228 7.29035 -0.16643 6.9816 0.487005Z"
                      fill="#E06600"
                    />
                  </svg>
                </figure>
                <figure>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.55631 0.487005L4.84774 4.10687L1.02504 4.68922C0.339516 4.79311 0.0647839 5.67621 0.561918 6.182L3.32755 8.99806L2.67343 12.9761C2.55569 13.6951 3.28046 14.2337 3.88748 13.8975L7.30724 12.0192L10.727 13.8975C11.334 14.231 12.0588 13.6951 11.9411 12.9761L11.2869 8.99806L14.0526 6.182C14.5497 5.67621 14.275 4.79311 13.5894 4.68922L9.76675 4.10687L8.05817 0.487005C7.75205 -0.158228 6.86505 -0.16643 6.55631 0.487005Z"
                      fill="#D3D5D8"
                    />
                  </svg>
                </figure>
              </div>

              <h1 class="text-sm font-semibold text-primary">Perfeito</h1>
            </div>
            <time
              class="text-xs font-medium"
              itemprop="commentTime"
              datetime="…"
              >Avaliado em 11 de outubro de 2022</time
            >

            <span class="text-xs text-secondary-main-normal font-medium"
              >Conta verificada</span
            >
          </div>
        </header>

        <p
          itemprop="commentText"
          class="text-sm text-primary opacity-90 font-medium my-3"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          doloremque fugiat excepturi suscipit ipsum temporibus sint, et
          consequuntur ea laudantium, voluptas, perferendis aut rem eligendi
          earum velit nobis cupiditate incidunt?
        </p>
        <div>
          <span class="text-xs"> 1 pessoa achou isso útil </span>
          <div class="flex items-center mt-1.5">
            <div class="flex items-center">
              <figure>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 21C12.4853 21 14.7353 19.9926 16.3639 18.3639C17.9926 16.7353 19 14.4853 19 12C19 9.51474 17.9926 7.26474 16.3639 5.63604C14.7353 4.00736 12.4853 3 10 3C7.51474 3 5.26474 4.00736 3.63604 5.63604C2.00736 7.26474 1 9.51474 1 12C1 14.4853 2.00736 16.7353 3.63604 18.3639C5.26474 19.9926 7.51474 21 10 21Z"
                    fill="#078A0C"
                  />
                  <path
                    d="M6.3999 11.9998L9.0999 14.6998L14.4999 9.2998"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </figure>
              <span class="text-xs font-medium text-green-main-hover"
                >Agradecemos seu comentário</span
              >
            </div>
            <span class="font-extralight mx-2 text-gray-400">&shortmid;</span>
            <a href="#" class="text-xs text-dark-main-400 font-medium"
              >Informar abuso</a
            >
          </div>
        </div>
      </div>
    </Article> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
