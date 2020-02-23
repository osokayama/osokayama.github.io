<template>
  <div>
    <app-header/>
    <!-- jumbotron -->
    <div class="siimple-jumbotron siimple-jumbotron--navy siimple-jumbotron--large jumbotron">
      <div class="siimple-jumbotron-title"><img src="images/logo.svg"></div>
      <div class="siimple-jumbotron-subtitle">【エンジニアリング x ○○】<br>（えんじにありんぐ かける なんか）</div>
      <div class="siimple-jumbotron-detail"><i class="far fa-calendar-alt"/> 2020年5月16日(土)開催</div>
      <div class="siimple-jumbotron-detail">
        <ul class="top_social_buttons">
          <li>
            <a
              href="http://twitter.com/intent/tweet?text=%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BB%E3%83%9F%E3%83%8A%E3%83%BC%E5%B2%A1%E5%B1%B12020&amp;url=http%3A%2F%2Fokayama.open-seminar.org%2F"
              onclick="window.open(this.href, 'tweetwindow', 'width=550, height=450, personalbar=0, toolbar=0, scrollbars=1, resizable=1'); return false;">
              <i class="fab fa-twitter"/>
            </a>
          </li>
          <li>
            <a
              href="http://www.facebook.com/sharer.php?u=http%3A%2F%2Fokayama.open-seminar.org%2F&amp;t=%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BB%E3%83%9F%E3%83%8A%E3%83%BC%E5%B2%A1%E5%B1%B12020"
              onclick="window.open(this.href, 'fbsharewindow', 'width=550, height=450, personalbar=0, toolbar=0, scrollbars=1, resizable=!'); return false;">
              <i class="fab fa-facebook-f"/>
            </a>
          </li>
        </ul>
      </div>
      <div class="siimple-jumbotron-detail"><a href="#"><div class="siimple-btn siimple-btn--blue entry">お申込み開始までしばらくお待ちください</div></a></div>
    </div>
    <div class="siimple-content siimple-content--medium siimple--mt-5">
      <!-- theme -->
      <h2 id="theme">テーマ</h2>
      <p>【エンジニアリング x ○○】（えんじにありんぐ かける なんか）</p>
      <p>
        エンジニアリング、「エンジニアとしての経験」は、現在世の中でとても必要とされています。<br>
        実際に、エンジニアリングと "なんか" との掛け合わせにより、かけがえのない価値を生み出している。という事例も増えてきているように思います。
      </p>
      <p>
        一方で、先が見えにくい現代社会において、エンジニアリングを突き詰めたい、という人が、それとは少し異なる分野に踏み込むことがしづらい、という側面もあると思います。<br>
        【エンジニアリング x ○○】（えんじにありんぐ かける なんか）をテーマに掲げたOSO2020で、<br>
        色々な人の【エンジニアリング x ○○】を見聞きしていらだき、みなさんが持っている漠然とした不安が少しでも和らぐこと、<br>
        そしてみなさんもそれぞれの "なんか" を見つけ出してもらえたら、と考えています。
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
        <a
          class="siimple-link"
          href="https://www.ivysquare.co.jp/party/ivyemerald.html">
          倉敷アイビースクエア アイビーエメラルドホール
        </a>
      </p>
      <p>費用：社会人5,000円/学生3,000円</p>
      <div class="siimple-tip siimple-tip--yellow siimple-tip--exclamation">
        ※事前にお申し込みが必要です。
      </div>
      <!-- venue -->
      <h2 id="venue">日時・場所</h2>
      <p>
        2020年5月16日（土） 10:00 - 18:00
        <a
          class="siimple-link"
          href="https://www.ivysquare.co.jp/party/opal.html">
          倉敷アイビースクエア オパール
        </a>
      </p>
      <p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3621195727897!2d133.77197651522943!3d34.595003580461736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35515638418ebc0b%3A0x25f474cc4b0f0cfc!2z5YCJ5pW344Ki44Kk44OT44O844K544Kv44Ko44Ki!5e0!3m2!1sja!2sjp!4v1582428852853!5m2!1sja!2sjp"
          width="100%"
          height="400"
          frameborder="0"
          style="border:0"
          allowfullscreen/>
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
      titleTemplate: 'オープンセミナー2020@岡山'
    }
  }
}
</script>
<style scoped>
.top_social_buttons {margin: 20px; padding: 0px}
.top_social_buttons li { display: inline; margin: 20px; }
.top_social_buttons li i { width: 40px; height: 40px; line-height: 40px; border-style: none; -webkit-border-radius: 50%; -moz-border-radius: 50%; border-radius: 50%; background-color: #4894f0; color: #fff; margin: auto; font-size: 1.2em; transition: 0.5s;}
.top_social_buttons li i:hover { color: #4894f0; background-color: #fff;}

.jumbotron {
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: linear-gradient(rgba(64, 64, 64, .7), rgba(64, 64, 64, .7)), url(/images/top.jpg);
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
  font-size: 22px;
}
</style>
