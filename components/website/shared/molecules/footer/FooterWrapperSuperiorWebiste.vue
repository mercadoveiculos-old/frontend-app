<template>
  <div class="container pt-4">
    <div
      class="h-2 w-full mt-2 mb-10 bg-gradient-to-r from-primary-main-900 via-secondary-main-500 to-primary-main-900"
    ></div>
    <Nav className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <GridCols className="flex flex-col gap-20">
        <GridItemFooterWebsite title="Mercado Veículos">
          <ul class="flex flex-col gap-3 mt-8">
            <li>
              <LinkBase
                link="#"
                text="Sobre nós"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Nossos Planos"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Imprensa"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Investidores"
                className="item-nav-footer-bold"
              />
            </li>
          </ul>
        </GridItemFooterWebsite>

        <GridItemFooterWebsite title="Transparência">
          <ul class="flex flex-col gap-3 mt-8">
            <li>
              <LinkBase
                link="#"
                text="Política de Privacidade"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Condições de Uso"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Política de Compliance"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Política de Segurança"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Cookies"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Anúncios Baseados em Interesses"
                className="item-nav-footer-bold"
              />
            </li>
          </ul>
        </GridItemFooterWebsite>

        <GridItemFooterWebsite title="Explore">
          <ul class="flex flex-col gap-3 mt-8">
            <li>
              <div class="flex items-center">
                <LinkBase
                  link="#"
                  text="Comunidade"
                  className="item-nav-footer-bold"
                />
                <ArrowRightUpIcon />
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <LinkBase
                  link="#"
                  text="Blog"
                  className="item-nav-footer-bold"
                />
                <ArrowRightUpIcon />
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <LinkBase
                  link="#"
                  text="Newsletter"
                  className="item-nav-footer-bold"
                />
                <ArrowRightUpIcon />
              </div>
            </li>
          </ul>
        </GridItemFooterWebsite>

        <GridItemFooterWebsite title="Fale com a gente">
          <ul class="flex flex-col gap-3 mt-8">
            <li>
              <LinkBase
                link="#"
                text="Nossos canais são 100% digitais"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="meajuda@mercadoveiculos.com.br"
                className="item-nav-footer-medium"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Atendimento 24h"
                className="item-nav-footer-medium"
              />
            </li>
          </ul>
        </GridItemFooterWebsite>

        <GridItemFooterWebsite title="Ouvidoria">
          <ul class="flex flex-col gap-3 mt-8">
            <li>
              <LinkBase
                link="#"
                text="ouvidoria@mercadoveiculos.com.br"
                className="item-nav-footer-medium"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Atendimento das 9h às 18h (dias úteis)"
                className="item-nav-footer-medium"
              />
            </li>
          </ul>
        </GridItemFooterWebsite>
      </GridCols>

      <GridCols class="flex flex-col gap-20">
        <GridItemFooterWebsite title="Vender">
          <ul class="flex flex-col gap-3 mt-8">
            <li>
              <LinkBase
                link="#"
                text="Vender meu veículo"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Vender minha moto"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Vender meu caminhão"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Tenho uma revenda"
                className="item-nav-footer-bold"
              />
            </li>
          </ul>
        </GridItemFooterWebsite>

        <GridItemFooterWebsite title="Comprar">
          <ul class="flex flex-col gap-3 mt-8">
            <li>
              <LinkBase
                link="#"
                text="Carros usados ou seminovos"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Carros novos"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Vender meu caminhão"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Carros por estado"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Motos usadas ou seminovas"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Caminhões usados ou seminovos"
                className="item-nav-footer-bold"
              />
            </li>
          </ul>
        </GridItemFooterWebsite>

        <GridItemFooterWebsite title="Serviços">
          <ul class="flex flex-col gap-3 mt-8">
            <li>
              <LinkBase
                link="#"
                text="Tabela Fipe"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Anunciar meu négócio"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Vender meu carro"
                className="item-nav-footer-bold"
              />
            </li>
          </ul>
        </GridItemFooterWebsite>

        <GridItemFooterWebsite title="Veja também">
          <ul class="flex flex-col gap-3 mt-8">
            <li>
              <LinkBase
                link="#"
                text="Revendedoras de carros"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Revenda de motos"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Caminhões e carretas"
                className="item-nav-footer-bold"
              />
            </li>
          </ul>
        </GridItemFooterWebsite>

        <GridItemFooterWebsite title="Ajuda">
          <ul class="flex flex-col gap-3 mt-8">
            <li>
              <LinkBase
                link="#"
                text="Perguntas Frequentes"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Contato"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Helpdesk"
                className="item-nav-footer-bold"
              />
            </li>
            <li>
              <LinkBase
                link="#"
                text="Mapa do site"
                className="item-nav-footer-bold"
              />
            </li>
          </ul>
        </GridItemFooterWebsite>
      </GridCols>
    </Nav>
  </div>
</template>
