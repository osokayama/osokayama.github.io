<template>
  <div>
    <app-header/>
    <div class="siimple-content siimple-content--medium siimple--mt-5">
      <div class="siimple-box page-title">
        <div class="siimple-box-title"><i class="fas fa-question"/> よくあるご質問</div>
      </div>
      <h2><i class="fas fa-question"/> 最寄り駅はどこですか？</h2>
      <p class="siimple-p">
        岡山駅になります。今年も会場はさん太ホールです。
        <a
          class="siimple-link"
          href="index.html#venue">
          会場の情報はこちら
        </a>
      </p>
      <h2><i class="fas fa-question"/> 会場での飲食は可能ですか？</h2>
      <p class="siimple-p"><b>ホール内では飲食不可です。</b>建物自体での飲食は可能なので、休憩時間等を利用してホール外で飲食するなどの配慮をお願いします。</p>
      <h2><i class="fas fa-question"/> お昼にお弁当を注文できますか？</h2>
      <p class="siimple-p">イベントとしては昼食はご用意しておりません。お近くの飲食店やコンビニ等をご利用ください。<br>なお、お一人で参加されている方を対象に、お昼を食べに行く方をランダムにマッチングさせるアンチボッチランチを開催予定です。ぜひご利用ください。</p>
      <h2><i class="fas fa-question"/> 車で行こうと思うのですが駐車場はありますか？</h2>
      <p class="siimple-p">最寄りのコインパーキングをご利用ください。</p>
      <h2><i class="fas fa-question"/> 来年もやりますか？</h2>
      <p class="siimple-p">やります。</p>
    </div>
    <app-footer/>
  </div>
</template>
<script>
import AppHeader from './header'
import AppFooter from './footer'

export default {
  components: { AppHeader, AppFooter }
}
</script>
<style scoped>
.content h2, .content p { margin-left: 10px; margin-right: 10px; }
</style>
