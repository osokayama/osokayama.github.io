<template>
  <div>
    <app-header/>
    <div class="siimple-content siimple-content--medium siimple--mt-5">
      <div class="siimple-box page-title">
        <div class="siimple-box-title"><i class="far fa-flag"/> 協賛企業・協力・後援団体一覧</div>
      </div>
      <div class="sponsor">
        <h2 class="siimple-h5">協賛企業（50音順・敬称略）</h2>
        <h3 class="siimple-h4">プラチナスポンサー</h3>
        <ul class="sponsor-list platina">
          <li
            v-for="targetSponsor in sponsor.platina"
            :key="targetSponsor.name"
            class="sponsor-list-item">
            <a :href="targetSponsor.url">
              <img
                :src="targetSponsor.image"
                :alt="targetSponsor.name">
            </a>
          </li>
        </ul>
        <h3 class="siimple-h4">ゴールドスポンサー</h3>
        <ul class="sponsor-list gold">
          <li
            v-for="targetSponsor in sponsor.gold"
            :key="targetSponsor.name"
            class="sponsor-list-item">
            <a :href="targetSponsor.url">
              <img
                :src="targetSponsor.image"
                :alt="targetSponsor.name">
            </a>
          </li>
        </ul>
        <h3 class="siimple-h4">シルバースポンサー</h3>
        <ul class="sponsor-list silver">
          <li
            v-for="targetSponsor in sponsor.silver"
            :key="targetSponsor.name"
            class="sponsor-list-item">
            <a :href="targetSponsor.url">
              <img
                :src="targetSponsor.image"
                :alt="targetSponsor.name">
            </a>
          </li>
        </ul>
        <h3 class="siimple-h4">ブロンズスポンサー</h3>
        <ul class="sponsor-list bronze">
          <li
            v-for="targetSponsor in sponsor.bronze"
            :key="targetSponsor.name"
            class="sponsor-list-item">
            <a :href="targetSponsor.url">
              <img
                :src="targetSponsor.image"
                :alt="targetSponsor.name">
            </a>
          </li>
        </ul>
        <h3 class="siimple-h4">ツール支援</h3>
        <ul class="sponsor-list tool">
          <li
            v-for="targetToolSupporter in tool"
            :key="targetToolSupporter.name"
            class="sponsor-list-item">
            <a :href="targetToolSupporter.url">
              <img
                :src="targetToolSupporter.image"
                :alt="targetToolSupporter.name">
            </a>
          </li>
        </ul>
        <h2 v-if="support.length > 0">後援（50音順・敬称略）</h2>
        <ul v-if="support.length > 0">
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
import AppHeader from '@/components/header'
import AppFooter from '@/components/footer'
import SponsorData from '@/data/sponsor_data'

export default {
  components: { AppHeader, AppFooter },
  data: function () {
    return SponsorData
  },
  head() {
    return {
      title: '協賛企業・協力・後援団体一覧'
    }
  }
}
</script>
<style scoped>
/* sponsor */
.sponsor-list { text-align: center; list-style: none; padding: 0; margin-bottom: 60px; }
.sponsor-list-item { display: inline-block; vertical-align: middle; padding: 10px; }
.sponsor-list-item img { max-width: 100%; }
.sponsor { text-align: center; margin: 0 10px; }
.sponsor .platina img {width: 270px; max-height: 200px; object-fit: contain;}
.sponsor .gold img {width: 229px; max-height: 100px; object-fit: contain;}
.sponsor .silver img {width: 200px; max-height: 134px; object-fit: contain;}
.sponsor .bronze img {width: 170px; max-height: 100px; object-fit: contain;}
.sponsor .tool img {width: 229px; max-height: 153px; object-fit: contain;}
.sponsor ul { list-style: none; }
</style>
