<template>
  <div>
    <!-- 头部 -->
    <header class="header" :class="{ 'scroll-header': isScrolled }">
      <nav class="nav container">
        <a href="#" class="nav__logo">Singor</a>

        <div class="nav__menu" :class="{ 'show-menu': showmenu }">
          <ul class="nav__list grid">
            <li class="nav__item" v-for="section in sections" :key="section.id">
              <a
                  :href="`#${section.id}`"
                  class="nav__link"
                  @click="showMenu"
                  :class="{ 'active-link': isActive(section.id) }"
              >
                <i :class="`uil ${section.icon}`" class="nav__icon"></i>
                <p>{{ $t(section.label) }}</p>
              </a>
            </li>

            <li class="nav__item">
              <div class="nav__link" @click="changeLang">
                <i class="uil uil-english-to-chinese change-lang"></i>
                <p class="nav__title">{{ $t("translate") }}</p>
              </div>
            </li>
          </ul>
          <i
              class="uil uil-times nav__close"
              @click="showMenu"
          ></i>
        </div>

        <div class="nav__btns">
          <i
              @click="changeTheme"
              :class="`uil ${themeIcon}`"
              class="change-theme"
          ></i>
          <div class="nav__toggle" @click="showMenu">
            <i class="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>

    <!--==================== 主要部分 ====================-->
    <main class="main">
      <!--==================== HOME ====================-->
      <section class="home section" id="home">
        <div class="home__container container grid">
          <div class="home__content grid">
            <div class="home__social">
              <a
                  href="https://gitee.com/zysingor"
                  target="_blank"
                  class="home__social-icon"
              >
                <svg
                    t="1674798484640"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2757"
                >
                  <path
                      d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z"
                      fill="hsl(250deg 69% 61%)"
                      p-id="2758"
                  ></path>
                </svg>
              </a>
              <a
                  href="https://github.com/Zsingor"
                  target="_blank"
                  class="home__social-icon"
              >
                <i class="uil uil-github-alt"></i>
              </a>
            </div>

            <div class="home__img">
              <svg
                  class="home__blob"
                  viewBox="0 0 200 187"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image
                      class="home__blob-img"
                      x="20"
                      y="-10"
                      xlink:href="@/assets/img/pikachu.png"
                  />
                </g>
              </svg>
            </div>

            <div class="home__data">
              <h1 class="home__title">
                {{ $t("home.opening") }}
              </h1>
              <h3 class="home__subtitle">
                {{ $t("home.posts") }}
              </h3>
              <p class="home__description">
                {{ $t("home.description") }}
              </p>
              <a href="#contact" class="button button-flex">
                <span>{{ $t("home.tips") }}</span>
                <i class="uil uil-message button__icon"></i>
              </a>
            </div>
          </div>
          <div class="home__scroll">
            <a href="#about" class="home__scroll-button button--flex">
              <i class="uil uil-mouse-alt-2 home__scroll-mouse"></i>
              <span class="home__scroll-name">{{
                  $t("home.slide")
                }}</span>
              <i class="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>

      <!--==================== ABOUT ====================-->
      <section class="about section" id="about">
        <h2 class="section__title">
          {{ $t("about.title") }}
        </h2>
        <span class="section__subtitle">{{
            $t("about.subheading")
          }}</span>
        <div class="about__container container grid">
          <img src="../assets/img/fulilian.png" alt="" class="about__img"/>

          <div class="about__data">
            <p class="about__description">
              {{ $t("about.description") }}
            </p>

            <div class="about__info">
              <div>
                <span class="about__info-title">{{
                    $t("about.number_1")
                  }}</span>
                <span class="about__info-name">{{
                    $t("about.tips_1")
                  }}</span>
              </div>

              <div>
                <span class="about__info-title">{{
                    $t("about.number_2")
                  }}</span>
                <span class="about__info-name">{{
                    $t("about.tips_2")
                  }}</span>
              </div>

              <div>
                <span class="about__info-title">{{
                    $t("about.number_2")
                  }}</span>
                <span class="about__info-name">{{
                    $t("about.tips_3")
                  }}</span>
              </div>
            </div>

            <div class="about__buttons">
              <a download="" class="button button--flex">
                <span>{{ $t("about.button") }}</span
                ><i class="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!--==================== SKILLS ====================-->
      <section class="skills section" id="skills">
        <h2 class="section__title">
          {{ $t("skills.title") }}
        </h2>
        <span class="section__subtitle">{{
            $t("skills.subheading")
          }}</span>

        <div class="skills__container container grid">
          <div>
            <!--==================== SKILLS 1 ====================-->
            <div class="skills__content" :class="{ skills__open: openSkill1 }">
              <div class="skills__header">
                <i class="uil uil-brackets-curly skills__icon"></i>

                <div>
                  <h1 class="skills__title">
                    {{ $t("skills.title_1") }}
                  </h1>
                  <span class="skills__subtitle">{{
                      $t("skills.subheading_1")
                    }}</span>
                </div>

                <i
                    class="uil uil-angle-down skills__arrow"
                    @click="changeSkill1"
                ></i>
              </div>

              <div class="skills__list grid">
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">HTML</h3>
                    <span class="skills__number">50%</span>
                  </div>
                  <div class="skills__bar">
                    <div class="skills__percentage skills__html"></div>
                  </div>
                </div>

                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">CSS</h3>
                    <span class="skills__number">50%</span>
                  </div>
                  <div class="skills__bar">
                    <div class="skills__percentage skills__css"></div>
                  </div>
                </div>

                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">JavaScript</h3>
                    <span class="skills__number">50%</span>
                  </div>
                  <div class="skills__bar">
                    <div class="skills__percentage skills__js"></div>
                  </div>
                </div>

                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">VUE3</h3>
                    <span class="skills__number">70%</span>
                  </div>
                  <div class="skills__bar">
                    <div class="skills__percentage skills__vue"></div>
                  </div>
                </div>

                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">Uniapp</h3>
                    <span class="skills__number">40%</span>
                  </div>
                  <div class="skills__bar">
                    <div class="skills__percentage skills__uniapp"></div>
                  </div>
                </div>
              </div>
            </div>
            <!--==================== SKILLS 2 ====================-->
            <div class="skills__content" :class="{ skills__open: openSkill2 }">
              <div class="skills__header">
                <i class="uil uil-server-network skills__icon"></i>

                <div>
                  <h1 class="skills__title">
                    {{ $t("skills.title_2") }}
                  </h1>
                  <span class="skills__subtitle">{{
                      $t("skills.subheading_2")
                    }}</span>
                </div>

                <i
                    class="uil uil-angle-down skills__arrow"
                    @click="changeSkill2"
                ></i>
              </div>

              <div class="skills__list grid">
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">SpringBoot</h3>
                    <span class="skills__number">70%</span>
                  </div>
                  <div class="skills__bar">
                    <div class="skills__percentage skills__java"></div>
                  </div>
                </div>

                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">Flask</h3>
                    <span class="skills__number">40%</span>
                  </div>
                  <div class="skills__bar">
                    <div class="skills__percentage skills__python"></div>
                  </div>
                </div>

                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">C++</h3>
                    <span class="skills__number">40%</span>
                  </div>
                  <div class="skills__bar">
                    <div class="skills__percentage skills__c"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--==================== QUALIFICATION ====================-->
      <section class="qualification section" id="qualification">
        <h2 class="section__title">
          {{ $t("qualification.title") }}
        </h2>
        <span class="section__subtitle">{{
            $t("qualification.subheading")
          }}</span>
        <div class="qualification__container container">
          <div class="qualification__tabs">
            <div
                class="qualification__button button--flex"
                data-target="#education"
                @click="showQualify(1)"
                :class="{ qualification__active: qualifyFlag }"
            >
              <i class="uil uil-graduation-cap qualification__icon"></i>
              <span>{{ $t("qualification.title_1") }}</span>
            </div>

            <div
                class="qualification__button button--flex"
                data-target="#work"
                @click="showQualify(2)"
                :class="{ qualification__active: !qualifyFlag }"
            >
              <i class="uil uil-briefcase-alt qualification__icon"></i>
              <span>{{ $t("qualification.title_2") }}</span>
            </div>
          </div>
          <div class="qualification__sections">
            <!--==================== QUALIFICATION CONTENT 1 ====================-->
            <div
                class="qualification__content"
                :class="{ qualification__active: qualifyFlag }"
                data-content
            >
              <!--==================== QUALIFICATION 1 ====================-->
              <div class="qualification__data">
                <div>
                  <h3 class="qualification__title">
                    {{ $t("qualification.tab_1") }}
                  </h3>
                  <span
                      class="qualification__subtitle"
                  >{{ $t("qualification.tab_des_1") }}</span
                  >
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2021 - 2025
                  </div>
                </div>

                <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
                </div>
              </div>
              <!--==================== QUALIFICATION 2 ====================-->
              <div class="qualification__data">
                <div></div>
                <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
                </div>

                <div>
                  <h3 class="qualification__title">
                    {{ $t("qualification.tab_2") }}
                  </h3>
                  <span
                      class="qualification__subtitle"
                  >{{ $t("qualification.tab_des_2") }}</span
                  >
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2021.9 - 2024.6
                  </div>
                </div>
              </div>
              <!--==================== QUALIFICATION 3 ====================-->
              <div class="qualification__data">
                <div>
                  <h3 class="qualification__title">
                    {{ $t("qualification.tab_3") }}
                  </h3>
                  <span
                      class="qualification__subtitle"
                  >{{ $t("qualification.tab_des_3") }}</span
                  >
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2023.9 - ...
                  </div>
                </div>

                <div>
                  <span class="qualification__rounder"></span>
                  <!-- <span class="qualification__line"></span> -->
                </div>
              </div>
            </div>
            <!--==================== QUALIFICATION CONTENT 2 ====================-->
            <div
                class="qualification__content"
                data-content
                :class="{ qualification__active: !qualifyFlag }"
            >
              <!--==================== QUALIFICATION 1 ====================-->
              <div class="qualification__data">
                <div></div>
                <div>
                  <span class="qualification__rounder"></span>
                </div>
                <div>
                  <h3 class="qualification__title">
                    {{ $t("qualification.tab_4") }}
                  </h3>
                  <span
                      class="qualification__subtitle"
                  >{{ $t("qualification.tab_des_4") }}</span
                  >
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--==================== PORTFOLIO ====================-->
      <section class="portfolio section" id="portfolio">
        <h2 class="section__title">
          {{ $t("portfolio.title") }}
        </h2>
        <span class="section__subtitle">{{
            $t("portfolio.subheading")
          }}</span>

        <div class="portfolio__container container swiper-container">
          <div class="swiper-button-prev">
            <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>

          <Swiper
              :slides-per-view="1"
              :loop="true"
              :modules="modules"
              :navigation="navigation"
              :pagination="pagination"
          >
            <SwiperSlide>
              <div class="portfolio__content grid">
                <img
                    src="@/assets/img/portfolio1.jpg"
                    alt=""
                    class="portfolio__img"
                />

                <div class="portfolio_">
                  <h3 class="portfolio__title">
                    {{ $t("portfolio.title_1") }}
                  </h3>
                  <p
                      class="portfolio__description"
                  >
                    {{ $t("portfolio.description_1") }}
                  </p>
                  <a
                      href="https://github.com/Zsingor/Personal-Website"
                      target="_blank"
                      class="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i class="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="portfolio__content grid">
                <img
                    src="@/assets/img/portfolio2.jpg"
                    alt=""
                    class="portfolio__img"
                />

                <div class="portfolio_">
                  <h3 class="portfolio__title">
                    {{ $t("portfolio.title_2") }}
                  </h3>
                  <p
                      class="portfolio__description"
                  >
                    {{ $t("portfolio.description_2") }}
                  </p>
                  <a
                      href="https://github.com/Zsingor/Personal-Website"
                      target="_blank"
                      class="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i class="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="portfolio__content grid">
                <img
                    src="@/assets/img/portfolio3.jpg"
                    alt=""
                    class="portfolio__img"
                />

                <div class="portfolio_">
                  <h3 class="portfolio__title">
                    {{ $t("portfolio.title_3") }}
                  </h3>
                  <p
                      class="portfolio__description"
                  >
                    {{ $t("portfolio.description_3") }}
                  </p>
                  <a
                      href="https://github.com/Zsingor/Personal-Website"
                      target="_blank"
                      class="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i class="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <!-- add arrows-->
          <div class="swiper-button-next">
            <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
        </div>

        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </section>

      <!--==================== CONTACT ME ====================-->
      <section class="contact section" id="contact">
        <h2 class="section__title">
          {{ $t("contact.title") }}
        </h2>
        <span class="section__subtitle">{{
            $t("contact.subheading")
          }}</span>

        <div class="contact__container container grid">
          <div>
            <div class="contact__information">
              <i class="uil uil-phone-alt contact__icon"></i>

              <div>
                <h3 class="contact__title">
                  {{ $t("contact.phone") }}
                </h3>
                <span class="contact__subtitle"
                >182********</span
                >
              </div>
            </div>

            <div class="contact__information">
              <i class="uil uil-envelope contact__icon"></i>

              <div>
                <h3 class="contact__title">
                  {{ $t("contact.email") }}
                </h3>
                <span class="contatc__subtitle"
                >339******@qq.com</span
                >
              </div>
            </div>

            <div class="contact__information">
              <i class="uil uil-map-marker contact__icon"></i>

              <div>
                <h3 class="contact__title">
                  {{ $t("contact.position") }}
                </h3>
                <span class="contatc__subtitle">{{
                    $t("contact.location")
                  }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!--==================== FOOTER ====================-->
    <footer class="footer">
      <div class="footer__bg">
        <div class="footer__container container grid">
          <div>
            <h1 class="footer__title">Singor</h1>
            <span class="footer__subtitle">{{
                $t("footer.tab_1")
              }}</span>
          </div>

          <ul class="footer__links">
            <li>
              <a href="#skills" class="footer__link">{{
                  $t("footer.tab_2")
                }}</a>
            </li>
            <li>
              <a href="#qualification" class="footer__link">{{
                  $t("footer.tab_3")
                }}</a>
            </li>
            <li>
              <a href="#portfolio" class="footer__link">{{
                  $t("footer.tab_4")
                }}</a>
            </li>
          </ul>

          <div class="footer__socials">
            <a href="https://github.com/Zsingor" target="_blank">
              <svg class="icon footer__social" fill="#ffffff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>

            <a href="https://gitee.com/zysingor" target="_blank">
              <svg
                  class="icon footer__social"
                  aria-hidden="true"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <title>Gitee</title>
                <path
                    d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z"
                    fill="#ffffff"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <p class="footer__copy">
          &#169; Singor.Copy from
          <a
              class="footer__copy"
              href="https://www.youtube.com/c/Bedimcode"
              target="_blank"
          >Bedimcode</a
          >
        </p>
      </div>
    </footer>

    <!--==================== SCROLL TOP ====================-->
    <a
        href="#"
        class="scrollup"
        :class="{ 'show-scroll': showScroll }"
    >
      <i class="uil uil-arrow-up scrollup__icon"></i>
    </a>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref, getCurrentInstance, watch} from "vue";
import {useI18n} from "vue-i18n";
import {Swiper, SwiperSlide} from "swiper/vue";
// 引入swiper核心和所需模块
import {  Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import "swiper/css";

const {t} = useI18n();
const {proxy} = getCurrentInstance();

// 在modules加入要使用的模块
const modules = [ Pagination, Navigation]
const navigation = ref({
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
});
const pagination = ref({
  el: ".swiper-pagination",
  clickable: true,
})

//用于判断头部阴影是否显示
let isScrolled = ref(false);
// 用于检测滚动并激活链接的响应式引用
let activeSection = ref(null);
//用于判断当前是否暗色主题
let isDarkTheme = ref(false);
//用于切换主题按钮的图标
let themeIcon = ref("uil-moon");
//用于判断是否显示按钮组
let showmenu = ref(false);
//用于判断是否显示回到顶部按钮
let showScroll = ref(false);
//用于判断skill界面是否展开
let openSkill1 = ref(true);
let openSkill2 = ref(false);
//用于判断显示哪个技能
let qualifyFlag = ref(true);

//用于判断标签
const sections = ref([
  {id: "home", icon: "uil-estate", label: "nav.home"},
  {id: "about", icon: "uil-user", label: "nav.about"},
  {id: "skills", icon: "uil-file-alt", label: "nav.skills"},
  {id: "qualification", icon: "uil-file-alt", label: "nav.qualification"},
  {id: "portfolio", icon: "uil-scenery", label: "nav.portfolio"},
  {id: "contact", icon: "uil-message", label: "nav.contact"},
]);

//切换语言
const changeLang = () => {
  let lang = localStorage.getItem("localeLang");
  let value = null;
  if (lang === null) {
    lang = "zhCn";
    value = lang;
  } else {
    value = lang === "zhCn" ? "en" : "zhCn";
  }
  localStorage.setItem("localeLang", value);
  proxy.$i18n.locale = value;
};

//切换主题
const changeTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  themeIcon.value = isDarkTheme.value ? "uil-sun" : "uil-moon";
  document.body.classList.toggle("dark-theme");
};

// 监听isDarkTheme的变化，并更新localStorage
const saveTheme = () => {
  localStorage.setItem("selected-theme", isDarkTheme.value ? "dark" : "light");
};

//用于判断是否显示菜单
const showMenu = () => {
  showmenu.value = !showmenu.value;
};

// 检查给定ID的section是否处于激活状态
const isActive = (id) => {
  return id === activeSection.value;
};

// 展示skill1界面
const changeSkill1 = () => {
  openSkill1.value = !openSkill1.value;
};

// 展示skill2界面
const changeSkill2 = () => {
  openSkill2.value = !openSkill2.value;
};

//用于切换展示的经历
const showQualify = (value) => {
  qualifyFlag.value = value === 1;
};

// 处理滚动事件
const handleScroll = () => {
  isScrolled.value = window.scrollY >= 80;

  showScroll.value = window.scrollY >= 560;

  const sectionsInView = Array.from(
      document.querySelectorAll(".section")
  ).filter((section) => {
    return (
        section.getBoundingClientRect().top <= window.innerHeight &&
        section.getBoundingClientRect().bottom > 1
    );
  });
  if (sectionsInView.length > 0) {
    activeSection.value = sectionsInView[0].id; // 只激活最上面的可见部分
  } else {
    activeSection.value = null;
  }
};

// 监听isDarkTheme的变化
watch(() => isDarkTheme.value, saveTheme);

// 组件挂载后添加滚动监听器
onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  // 从localStorage获取之前的主题设置
  const storedTheme = localStorage.getItem("selected-theme");
  if (storedTheme) {
    isDarkTheme.value = storedTheme === "dark";
    themeIcon.value = isDarkTheme.value ? "uil-sun" : "uil-moon";
  }
  document.body.classList[isDarkTheme.value ? "add" : "remove"]("dark-theme");
});

// 组件卸载前移除滚动监听器，防止内存泄漏
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss">
@import "https://unicons.iconscout.com/release/v3.0.6/css/line.css";
@import "@/styles/index.scss";
</style>