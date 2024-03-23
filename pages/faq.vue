<template>
  <div>
    <app-header/>
    <div class="siimple-content siimple-content--medium siimple--mt-5">
      <div class="siimple-box page-title">
        <div class="siimple-box-title"><i class="fas fa-question"/> よくあるご質問</div>
      </div>
      <h2><i class="fas fa-question"/> どのような開催形式になりますか？</h2>
      <p class="siimple-p">
        オフライン形式での開催となります。
      </p>
      <h2><i class="fas fa-question"/> 懇親会はありますか？</h2>
      <p class="siimple-p">開催します。<a href="../#after-party">懇親会</a>の情報をご確認ください。<br>参加者、登壇者と気軽に交流できるチャンスです。お気軽にご参加下さい。</p>
      <h2><i class="fas fa-question"/> 最寄り駅はどこですか？</h2>
      <p class="siimple-p">岡山駅西口より徒歩約7分です。<a href="../#venue">会場の情報はこちら</a></p>
      <h2><i class="fas fa-question"/> 会場での飲食は可能ですか？</h2>
      <p class="siimple-p">可能です。</p>
      <h2><i class="fas fa-question"/> 来年もやりますか？</h2>
      <p class="siimple-p">やります。</p>
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
