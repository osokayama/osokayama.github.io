<template>
  <div>
    <app-header/>
    <div class="siimple-content content">
      <div class="siimple-box page-title">
        <div class="siimple-box-title"><i class="fas fa-history"/> 過去の開催実績</div>
      </div>
      <div class="past">
        <a
          v-for="history in histories"
          :key="history.year"
          :href="'../' + history.year + '/'">
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
import AppHeader from './header'
import AppFooter from './footer'
import PastData from '../data/past_data'

export default {
  components: { AppHeader, AppFooter },
  data: function () {
    return PastData
  }
}
</script>
<style scoped>
/* past */
.past { text-align: center; text-shadow: 0 0 3px #444; }
.past a { text-decoration: none; }
.past_bg { background-position: 50% 50%; z-index: 0; background-size: cover; position: relative; overflow: hidden; margin-bottom: 40px; }
</style>
