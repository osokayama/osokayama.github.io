<template>
  <div>
    <app-header/>
    <div class="siimple-content siimple-content--medium siimple--mt-5">
      <div class="siimple-box page-title">
        <div class="siimple-box-title"><i class="fas fa-question"/> よくあるご質問</div>
      </div>
      <h2><i class="fas fa-question"/> 最寄り駅はどこですか？</h2>
      <p class="siimple-p">
        JR倉敷駅となります。今年の会場は倉敷アイビースクエアです。
      </p>
      <h2><i class="fas fa-question"/> 会場での飲食は可能ですか？</h2>
      <p class="siimple-p"><b>ホール内では飲食不可です。</b></p>
      <h2><i class="fas fa-question"/> 車で行こうと思うのですが駐車場はありますか？</h2>
      <p class="siimple-p">
        ありますが、混雑することが予測されますので、なるべく公共の交通機関をご利用ください。<br />
        <a href="https://www.ivysquare.co.jp/access/#parking" target="blank" >アイビースクエア駐車場</a>
      </p>
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
