<template>
  <div>
    <app-header/>
    <div class="siimple-content content">
      <div class="siimple-box page-title">
        <div class="siimple-box-title"><i class="far fa-flag"/> 協賛企業・協力・後援団体一覧</div>
      </div>
      <div class="sponsor">
        <h2>協賛企業（50音順・敬称略）</h2>
        <h3>プラチナスポンサー</h3>
        <div class="siimple-grid-row platina">
          <div
            v-for="targetSponsor in sponsor.platina"
            :key="targetSponsor.name"
            class="siimple-grid-col siimple-grid-col--xl-4 siimple-grid-col--md-6 siimple-grid-col--sm-12">
            <a :href="targetSponsor.url">
              <img
                :src="targetSponsor.image"
                :alt="targetSponsor.name">
            </a>
          </div>
        </div>
        <h3>ゴールドスポンサー</h3>
        <div class="siimple-grid-row gold">
          <div
            v-for="targetSponsor in sponsor.gold"
            :key="targetSponsor.name"
            class="siimple-grid-col siimple-grid-col--xl-3 siimple-grid-col--md-4 siimple-grid-col--sm-12">
            <a :href="targetSponsor.url">
              <img
                :src="targetSponsor.image"
                :alt="targetSponsor.name">
            </a>
          </div>
        </div>
        <h3>シルバースポンサー</h3>
        <div class="siimple-grid-row silver">
          <div
            v-for="targetSponsor in sponsor.silver"
            :key="targetSponsor.name"
            class="siimple-grid-col siimple-grid-col--xl-2 siimple-grid-col--md-4 siimple-grid-col--sm-6">
            <a :href="targetSponsor.url">
              <img
                :src="targetSponsor.image"
                :alt="targetSponsor.name">
            </a>
          </div>
        </div>
        <h3>ブロンズスポンサー</h3>
        <div class="siimple-grid-row bronze">
          <div
            v-for="targetSponsor in sponsor.bronze"
            :key="targetSponsor.name"
            class="siimple-grid-col siimple-grid-col--xl-2 siimple-grid-col--md-4 siimple-grid-col--sm-6">
            <a :href="targetSponsor.url">
              <img
                :src="targetSponsor.image"
                :alt="targetSponsor.name">
            </a>
          </div>
        </div>
        <h2>後援（50音順・敬称略）</h2>
        <ul>
          <li
            v-for="supporter in support"
            :key="supporter">
            {{ supporter }}
          </li>
        </ul>
      </div>
    </div>
    <app-footer/>
  </div>
</template>
<script>
import AppHeader from './header'
import AppFooter from './footer'
import SponsorData from '../data/sponsor_data'

export default {
  components: { AppHeader, AppFooter },
  data: function () {
    return SponsorData
  }
}
</script>
<style scoped>
/* sponsor */
.sponsor { text-align: center; }
.sponsor .siimple-grid-row { display: -webkit-flex; display: flex; -webkit-justify-content: center; justify-content: center; -webkit-align-items: stretch; align-items: stretch; }
.sponsor .platina img {width: 300px; }
.sponsor .gold img {width: 229px; }
.sponsor .silver img {width: 200px; }
.sponsor .bronze img {width: 150px; }
.sponsor ul { list-style: none; }
</style>
