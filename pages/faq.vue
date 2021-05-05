<template>
  <div>
    <app-header/>
    <div class="siimple-content siimple-content--medium siimple--mt-5">
      <div class="siimple-box page-title">
        <div class="siimple-box-title"><i class="fas fa-question"/> よくあるご質問</div>
      </div>
      <h2><i class="fas fa-question"/> どのような開催形式になりますか？</h2>
      <p class="siimple-p">
        社会情勢を鑑みて、オンライン形式での開催を予定しています。
      </p>
      <h2><i class="fas fa-question"/> 懇親会はありますか？</h2>
      <p class="siimple-p">今回は懇親会を執り行いません。ご了承ください。</p>
      <h2><i class="fas fa-question"/> 来年もやりますか？</h2>
      <p class="siimple-p">開催形式は未定ですが、開催予定です。</p>
    </div>
    <app-footer/>
  </div>
</template>
<script>
import AppHeader from '@/components/header'
import AppFooter from '@/components/footer'

export default {
  components: { AppHeader, AppFooter },
  head() {
    return {
      title: 'よくある質問'
    }
  }
}
</script>
<style scoped>
.content h2, .content p { margin-left: 10px; margin-right: 10px; }
</style>
