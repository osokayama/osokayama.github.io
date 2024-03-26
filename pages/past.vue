<template>
  <div>
    <app-header/>
    <div class="siimple-content siimple-content--medium siimple--mt-5">
      <div class="siimple-box page-title">
        <div class="siimple-box-title"><i class="fas fa-history"/> 過去の開催実績</div>
      </div>
      <div class="past">
        <a
          v-for="history in histories"
          :key="history.year"
          :href="'../' + history.year + '/index.html'">
          <div
            :style="{'background-image': (history.image ? 'url(' + history.image + ')' : 'none')}"
            class="siimple-box siimple-box--navy past_bg">
            <div class="siimple-box-title">{{ history.year }}</div>
            <div class="siimple-box-subtitle">{{ history.theme }}&nbsp;</div>
          </div>
        </a>
      </div>
    </div>
    <app-footer/>
  </div>
</template>
<script>
import AppHeader from '@/components/header'
import AppFooter from '@/components/footer'
import PastData from '@/data/past_data'

export default {
  components: { AppHeader, AppFooter },
  data: function () {
    return PastData
  },
  head() {
    return {
      title: '過去の開催実績'
    }
  }
}
</script>
<style scoped>
/* past */
.past { text-align: center; text-shadow: 0 0 3px #444; margin: 0 10px; }
.past a { text-decoration: none; }
.past_bg { background-position: 50% 50%; z-index: 0; background-size: cover; position: relative; overflow: hidden; margin-bottom: 40px; }
</style>
