<template>
  <div>
    <app-header/>
    <div class="siimple-content siimple-content--medium siimple--mt-5">
      <div class="siimple-box page-title">
        <div class="siimple-box-title">テーマに込める思い</div>
      </div>
      <h2>【エンジニアリング x ○○】（えんじにありんぐ かける なんか）</h2>
      <p class="siimple-p">
        みなさんは今、どんな仕事をしていますか？
        どういう職種名のもと、日々成果に対してコミットしているのでしょうか？
        また、社会人としてのキャリアを歩み始めたときは、それぞれどうだったでしょうか？
      </p>
      <p class="siimple-p">
        例えば、IT・Web業界に身を置く私（a-know）について言うと、
        現在、「Customer Reliability Engineer」として、担当しているプロダクトのテクニカルサポートやカスタマーサクセスの領域において
        成果をあげるべく、毎日仕事をしています。
        そんな私ですが、一番最初の職種は「システムエンジニア」で、COBOLという技術を使った仕事に従事していました。
      </p>
      <p class="siimple-p">
        私は今年で社会人15年目になりますが、まさか15年後に、自分が「CRE」になっている。なんていうことは、全く予想だにしていませんでした。
        ただ、ここに至るまで・そして今も、ですが、「この先自分は、仕事としてどういうことに携わっていくんだろう」という漠然とした不安はずっと持っていました。
        もしかしたら、みなさんも同じかもしれません。10年後、20年後、みなさんはどんなふうに働いているでしょうか？
      </p>
      <p class="siimple-p">
        「リーダブルコード」という技術書の名著があるのですが、その中に、私が好きな（そして大事にしている）言葉があります。
      </p>
      <p class="siimple-p">
        『エンジニアリングとは、大きな問題を小さな問題に分割して、それぞれの解決策を組み立てることにほかならない。』（リーダブルコード 第10章）
      </p>
      <p class="siimple-p">
        15年ほど働いてきて、私にもなんとなくわかってきたことがあります。
        エンジニアリング、「エンジニアとしての経験」は、想像以上に、世の中で必要とされている、ということです。
      </p>
      <p class="siimple-p">
        例えば私の今の仕事は、「あるプロダクトのユーザー視点」と「エンジニアリング」の掛け合わせの上に成り立っている仕事だ、と感じています。
        と同時に、私のような仕事以外にもきっと、「エンジニアリングと "なんか" との掛け合わせにより、かけがえのない価値を生み出している」ことがあるはず、ということも確信を持っています。
      </p>
      <p class="siimple-p">
        色々な人の【エンジニアリング x ○○】を見聞きすることで、みなさんが持っている漠然とした不安が少しでも和らぐこと、そしてみなさんもそれぞれの "なんか" を見つけ出してもらえたら、
        それが巡り巡って、最終的には世の中をとても良いものにしてくれるのではないか。
      </p>
      <p class="siimple-p">
        そのような思いを込めて、OSO2020のテーマは【エンジニアリング x ○○】（えんじにありんぐ かける なんか）とさせていただきました。
        ぜひ、あなただけの "なんか" を見つけるために、OSO2020にお越しください！
      </p>
      <h3 class="signature">
        オープンセミナー2020@岡山 実行委員長 井上大輔(a-know)
      </h3>
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
      title: 'エンジニアリング x ○○'
    }
  }
}
</script>
<style scoped>
.content h2, .content p { margin-left: 10px; margin-right: 10px; }
.signature { padding-top: 32px; text-align: right; }
</style>
