<template>
  <div>
    <app-header/>
    <div class="siimple-content siimple-content--medium siimple--mt-5">
      <div class="siimple-box page-title">
        <div class="siimple-box-title"><i class="fas fa-question"/> よくあるご質問</div>
      </div>
      <h2><i class="fas fa-question"/> どのような開催形式になりますか？</h2>
      <p class="siimple-p">
        社会情勢を鑑みて、オンライン形式での開催を予定しています。オープンセミナー岡山では初の試みとなります。
      </p>
      <h2><i class="fas fa-question"/> 懇親会はありますか？</h2>
      <p class="siimple-p">懇親会はオープンセミナー岡山というコミュニティにとって大事なものであると考えており、本編と同じく、オンライン形式での開催を検討しています。</p>
      <h2><i class="fas fa-question"/> 「2020」なのに2021年の開催なんですか？</h2>
      <p class="siimple-p">
        開催がずれ込み、申し訳ありません。<br />
        ぎりぎりまで物理的な開催を選択肢にいれていたこと、それにより年末年始に差し掛かってしまったこと、実行委員会内にオンライン形式での開催に関する知見が乏しいこと、などが理由としてはあるのですが、参加者のみなさんに楽しんでもらえるイベントにできるよう、実行委員会一同、鋭意準備を進めております。ご理解いただけますと幸いです。
      </p>
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
