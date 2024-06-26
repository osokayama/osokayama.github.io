<template>
  <div>
    <app-header/>
    <div class="siimple-content siimple-content--medium siimple--mt-5" v-if="title">
      <div class="siimple-box page-title">
        <div class="siimple-box-title"><i class="fas fa-user"/> 登壇内容・講師詳細</div>
      </div>
      <h1 v-html="title"/>
      <p v-html="detail"/>
      <div class="speaker_profile">
        <div class="speaker_photo">
          <img
            :src="$imagePath(`speakers/${image}`)"
            :alt="`講演者：${name}のプロフィール写真`">
        </div>
        <div class="speaker_info">
          <h2>{{ name }}</h2>
          <p v-html="affiliation"/>
          <ul class="speaker_social_icons">
            <li v-if="twitter">
              <a :href="twitter">
                <i
                  class="fab fa-x-twitter"
                  aria-hidden="true"/>
              </a>
            </li>
            <li v-if="facebook">
              <a :href="facebook">
                <i
                  class="fab fa-facebook"
                  aria-hidden="true"/>
              </a>
            </li>
            <li v-if="github">
              <a :href="github">
                <i
                  class="fab fa-github"
                  aria-hidden="true"/>
              </a>
            </li>
            <li v-for="external in externals" :key="external">
              <a :href="external">
                <i
                  class="fas fa-external-link-alt"
                  aria-hidden="true"/>
              </a>
            </li>
          </ul>
          <p v-html="profile"/>
        </div>
      </div>
      <a href="#" @click="back()">戻る</a>
    </div>
    <app-footer/>
  </div>
</template>
<script>
import AppHeader from '@/components/header'
import AppFooter from '@/components/footer'
import TimetableData from '@/data/timetable_data'

export default {
  components: { AppHeader, AppFooter },
  data: function () {
    return {
      title: '',
      name: '',
      affiliation: '',
      image: '',
      detail: '',
      twitter: '',
      facebook: '',
      github: '',
      externals: [],
      profile: ''
    }
  },
  head() {
    return {
      title: `登壇内容・講師詳細`
    }
  },
  mounted: function () {
    const route = useRoute()
    const speaker = this.getSpeaker(route.query.speaker)
    if (speaker) {
      this.title = speaker.title
      this.name = speaker.name
      this.affiliation = speaker.affiliation
      this.image = speaker.image
      this.detail = speaker.detail
      this.twitter = speaker.twitter
      this.facebook = speaker.facebook
      this.github = speaker.github
      this.externals = speaker.externals
      this.profile = speaker.profile
    }
    document.title = `登壇内容・講師詳細(${speaker ? speaker.name : ''})`
  },
  methods: {
    getSpeaker(speaker) {
      if (!process.browser) return null
      return TimetableData.timetable[speaker]
    },
    back() {
      history.back()
    }
  }
}
</script>
<style scoped>
@media screen and (min-width: 769px) {
  .speaker_profile { display: table; }
  .speaker_photo,.speaker_info { display: table-cell; }
}
.speaker_profile { margin-bottom: 20px; }
.speaker_photo,.speaker_info { vertical-align: top; }
.speaker_photo { padding-right: 20px; }
  .speaker_photo img { width: 120px; -webkit-border-radius: 50%; -moz-border-radius: 50%; border-radius: 50%; }
@media screen and (max-width: 768px) {
  .speaker_photo { margin-bottom: 10px; }
  .modal-content h1 { font-size: 1.5em; }
  .modal-content h2 { font-size: 1.3em; }
}
.speaker_social_icons { padding-left: 0; margin-bottom: 10px; }
.speaker_social_icons li { display: inline; text-align: center; margin-right: 5px; background-color: #fff; }
.speaker_social_icons li i { width: 32px; height: 32px; line-height: 32px; border: solid 1px; -webkit-border-radius: 50%; -moz-border-radius: 50%; border-radius: 50%; background-color: #4894f0; color: #fff; margin: auto; font-size: 1.0em; transition: 0.5s; }
.speaker_social_icons li i:hover { border: solid 1px; color: #4894f0; background-color: #fff; }
</style>
