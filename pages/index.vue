<template>
  <div>
    <app-header/>
    <!-- jumbotron -->
    <div class="siimple-jumbotron siimple-jumbotron--navy siimple-jumbotron--large jumbotron">
      <div class="siimple-jumbotron-title"><img src="@/assets/images/logo.svg"></div>
      <div class="siimple-jumbotron-subtitle">【のびしろ】</div>
      <div class="siimple-jumbotron-detail"><i class="far fa-calendar-alt"/> 2024年10月19日(土)開催</div>
      <div class="siimple-jumbotron-detail">
        <ul class="top_social_buttons">
          <li>
            <a
              href="http://twitter.com/intent/tweet?text=%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BB%E3%83%9F%E3%83%8A%E3%83%BC%E5%B2%A1%E5%B1%B12024&amp;url=https%3A%2F%2Fokayama.open-seminar.org%2F"
              onclick="window.open(this.href, 'tweetwindow', 'width=550, height=450, personalbar=0, toolbar=0, scrollbars=1, resizable=1'); return false;">
              <i class="fab fa-x-twitter"/>
            </a>
          </li>
          <li>
            <a
              href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fokayama.open-seminar.org%2F&amp;t=%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BB%E3%83%9F%E3%83%8A%E3%83%BC%E5%B2%A1%E5%B1%B12024"
              onclick="window.open(this.href, 'fbsharewindow', 'width=550, height=450, personalbar=0, toolbar=0, scrollbars=1, resizable=!'); return false;">
              <i class="fab fa-facebook-f"/>
            </a>
          </li>
        </ul>
      </div>
      <div class="siimple-jumbotron-detail"><a href="#"><div class="siimple-btn siimple-btn--blue entry">お申し込み開始までお待ち下さい</div></a></div>
    </div>
    <div class="siimple-content siimple-content--medium siimple--mt-5">
      <!-- theme -->
      <h2 id="theme">テーマ</h2>
      <div class="content-theme">【のびしろ】</div>
      <p>
        オープンセミナー2024@岡山実行委員長の前川です。
      </p>
      <p>
        「オープンセミナー2024@岡山」は、「のびしろ」がメインテーマです。今回のイベントを通じて、自身や周りの人たちの未開拓の可能性に気づき、自己成長への意欲を一層高めるきっかけにしてほしいです。
      </p>
      <p>
        この目的を実現するために、参加者自身が自分や周りの人たちの「のびしろ」を見出し、刺激し合えるよう、ロールモデルとなる方に登壇をお願いしました。登壇者には、経験談や直面した課題の克服方法、興味関心のある技術や分野を共有してもらいます。それぞれの「のびしろ」をどのように見いだし、向き合ってきたか。これらの話は、同世代やそれに近い参加者にとって、自らの潜在能力を引き出すための重要なヒントとなります。
      </p>
      <p>
        今回は「のびしろ」というテーマなので、特に「のびしろしか無い」方々に自分自身と周囲の無限の可能性を発見し、刺激し合うことのできる実践的なセッションを用意しています。そのため、登壇は同じぐらいと少し上の年代ということで、全員35歳以下の方々にお願いしています。ひとりでも、周りの人たちとも一緒でも参加いただければうれしいです。ぜひ、ご期待ください。
      </p>
      <!-- oso -->
      <h2 id="about-oso">オープンセミナーとは</h2>
      <p>オープンセミナーはソフトウェア技術をテーマにした無料セミナーです。このセミナーの企画・運営は、技術系ユーザコミュニティのボランティアで行われています。</p>
      <p>過去に香川県高松市、徳島県徳島市、愛媛県松山市、岡山県総社市、広島県広島市で開催された実績があります。コミュニティ主催のセミナーに参加が初めての方もお気軽にお越し下さい。</p>
      <!-- more info -->
      <h2 id="price">参加費</h2>
      <p>無料</p>
      <h2 id="caution">注意事項</h2>
      <div class="siimple-tip siimple-tip--yellow siimple-tip--exclamation">
        未成年の方は、必ず保護者の方の同意を得た上でお申し込み・ご参加下さい。
      </div>
      <h2 id="after-party">懇親会</h2>
      <p>
        会場：
        <a href="http://www.233-3959.com/ryoutei/ryoutei-co-su3.html" class="siimple-link">
        Ryoutei 座・スタジアム
        </a>
      </p>
      <p>時間：18:00～21:00</p>
      <p>費用：社会人4,000円/学生2,000円</p>
      <div class="siimple-tip siimple-tip--yellow siimple-tip--exclamation">
        ※事前にお申し込みが必要です。<a href="https://oso.connpass.com/event/295890/">connpass</a>からお申込み下さい。
      </div>
      <!-- venue -->
      <h2 id="venue">日時・場所</h2>
      <p>
        2024年10月19日(土) <a href="https://okayama.coop/ps/hall/#hall1">オルガホール</a>
      </p>
      <p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5518.733563331652!2d133.91517748030932!3d34.668373160657154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc7fdd05de77aa705!2z44Kq44Or44Ks44Ob44O844Or!5e0!3m2!1sja!2sjp!4v1466575776828" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </p>
      <!-- anti-harassment policy -->
      <h2 id="anti-harassment">アンチハラスメントポリシー</h2>
      <p>ハラスメントとは、性差、性的指向、障害、外見や身体的特徴、人種、宗教、公共な場での性的な画像や類する表現、脅迫、ストーカー、望まない写真撮影や録音・録画、不適切な接触、暴力的な発言およびそれらに関連した不快な言動が含まれます。 このようなハラスメント行為を停止するように主催者が参加者に求めた場合、参加者はすぐに指示に従って下さい。</p>
      <p>ポリシーは一般常識を逸脱しておらず、困難な要求を皆さんにお願いしているわけでは無いと思います。皆さんひとりひとりが協力し、楽しいイベントを一緒に作り上げましょう。</p>
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
      titleTemplate: 'オープンセミナー2024@岡山'
    }
  }
}
</script>
<style scoped lang="scss">
.top_social_buttons {margin: 20px; padding: 0px}
.top_social_buttons li { display: inline; margin: 20px; }
.top_social_buttons li i { width: 40px; height: 40px; line-height: 40px; border-style: none; -webkit-border-radius: 50%; -moz-border-radius: 50%; border-radius: 50%; background-color: #4894f0; color: #fff; margin: auto; font-size: 1.2em; transition: 0.5s;}
.top_social_buttons li i:hover { color: #4894f0; background-color: #fff;}

.jumbotron {
  text-align: center;
  padding-top: 48px;
  padding-bottom: 48px;
  background-image: linear-gradient(rgba(64, 64, 64, .8), rgba(64, 64, 64, .8)), url(@/assets/images/top.png);
  background-repeat: no-repeat;
  background-position: top center;
  -moz-background-size: cover;
  background-size: cover;
}

.entry {
  font-size: 1.0em;
  line-height: 40px;
  height: 40px;
}

.siimple-jumbotron-title img {
  max-width: 480px;
}

.siimple-jumbotron-subtitle {
  font-size: 30px;
  .subtheme {
    font-size: 0.7em;
    line-height: 28px;
  }
}

.content-theme {
  font-size: 1.3em;
  .subtheme {
    font-size: 0.8em;
  }
}

.delay-message {
  margin: 0 auto 64px;
}
.siimple-alert {
  text-align: left;
  width: auto;
  max-width: 840px;
  margin: 0 auto;
  padding: 16px 32px;
}
.siimple-alert h2 {
  text-align: center;
}
.siimple-alert .bold {
  font-weight: bold;
}
.signature {
  padding-top: 16px; text-align: right;
}
</style>
