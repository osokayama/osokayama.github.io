<template>
  <div class="modal">
    <div
      :class="{'visible': visible}"
      class="modal-overlay">
      <div class="modal-content">
        <div class="modal-close">
          <div
            class="siimple-close"
            @click="hide()"/>
        </div>
        <h1>{{ title }}</h1>
        <p v-html="detail"/>
        <div class="speaker_profile">
          <div class="speaker_photo">
            <img
              :src="'images/speakers/' + image"
              :alt="`講演者：${name}のプロフィール写真`">
          </div>
          <div class="speaker_info">
            <h2>{{ name }}</h2>
            <p>{{ affiliation }}</p>
            <ul class="speaker_social_icons">
              <li v-if="twitter">
                <a :href="twitter">
                  <i
                    class="fab fa-twitter"
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
              <li v-if="external">
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    visible: { type: Boolean, default: false },
    title: { type: String, default: '' },
    name: { type: String, default: '' },
    affiliation: { type: String, default: '' },
    image: { type: String, default: '' },
    detail: { type: String, default: '' },
    twitter: { type: String, default: '' },
    facebook: { type: String, default: '' },
    github: { type: String, default: '' },
    external: { type: String, default: '' },
    profile: { type: String, default: '' }
  },
  methods: {
    hide () {
      this.$emit('hide')
    }
  }
}
</script>
<style scoped>
.modal-overlay {
  display: flex;
  justify-content: center;
  overflow: auto;
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  opacity: 0;
  transition: opacity 0.3s, transform 0s 0.3s;
  transform: scale(0);
}

.modal-content {
  font-size: 1.2em;
  align-self: center;
  width: 90%;
  max-width: 800px;
  max-height: 90%;
  padding: 30px 30px 15px;
  box-sizing: border-box;
  background: #fff;
  line-height: 1.4em;
  transform: scale(0.3);
  transition: 0.3s;
  overflow-y: scroll;
}

.modal-content h1 {
  line-height: 1.5em;
}

.modal-close {
  width: 100%;
  text-align: right;
}

.modal .modal-overlay.visible {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.3s;
}

.modal .modal-overlay.visible .modal-content {
  transform: scale(1);
}

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
}
.speaker_social_icons { padding-left: 0; margin-bottom: 10px; }
.speaker_social_icons li { display: inline; text-align: center; margin-right: 5px; background-color: #fff; }
.speaker_social_icons li i { width: 32px; height: 32px; line-height: 32px; border: solid 1px; -webkit-border-radius: 50%; -moz-border-radius: 50%; border-radius: 50%; background-color: #4894f0; color: #fff; margin: auto; font-size: 1.0em; transition: 0.5s; }
.speaker_social_icons li i:hover { border: solid 1px; color: #4894f0; background-color: #fff; }
</style>
