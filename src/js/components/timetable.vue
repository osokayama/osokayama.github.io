<template>
  <div>
    <speaker-modal
      :visible="visible"
      :title="title"
      :name="name"
      :affiliation="affiliation"
      :image="image"
      :detail="detail"
      :twitter="twitter"
      :facebook="facebook"
      :github="github"
      :external="external"
      :profile="profile"
      @hide="hide"/>
    <app-header/>
    <div class="siimple-content content">
      <div class="siimple-box page-title">
        <div class="siimple-box-title"><i class="far fa-clock"/> タイムテーブル</div>
      </div>
      <table class="siimple-table siimple-table--border">
        <tbody class="siimple-table-body">
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">9:30 - 10:00</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">受付</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">10:00 - 10:10</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">オープニング</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">10:10 - 11:00</td>
            <td class="siimple-table-cell">50分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('nakazawa')">
              {{ timetable.timetable['nakazawa'].title }}<br>{{ timetable.timetable['nakazawa'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">11:10 - 11:20</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              rowspan="6"
              class="siimple-table-cell">
              11:10 - 12:00
            </td>
            <td
              rowspan="6"
              class="siimple-table-cell">
              50分
            </td>
            <td class="siimple-table-cell">スポンサーセッション</td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('tbd2')">
              {{ timetable.timetable['tbd2'].title }}<br>{{ timetable.timetable['tbd2'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('tbd3')">
              {{ timetable.timetable['tbd3'].title }}<br>{{ timetable.timetable['tbd3'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('tbd4')">
              {{ timetable.timetable['tbd4'].title }}<br>{{ timetable.timetable['tbd4'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('tbd5')">
              {{ timetable.timetable['tbd5'].title }}<br>{{ timetable.timetable['tbd5'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('tbd6')">
              {{ timetable.timetable['tbd6'].title }}<br>{{ timetable.timetable['tbd6'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">12:00 - 13:30</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">昼休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">13:30 - 14:00</td>
            <td class="siimple-table-cell">30分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('hatsuya')">
              {{ timetable.timetable['hatsuya'].title }}<br>{{ timetable.timetable['hatsuya'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">14:00 - 14:10</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">14:10 - 14:40</td>
            <td class="siimple-table-cell">30分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('yamamoto')">
              {{ timetable.timetable['yamamoto'].title }}<br>{{ timetable.timetable['yamamoto'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">14:40 - 14:55</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">14:55 - 15:25</td>
            <td class="siimple-table-cell">30分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('takano')">
              {{ timetable.timetable['takano'].title }}<br>{{ timetable.timetable['takano'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">15:25 - 15:40</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">15:40 - 16:40</td>
            <td class="siimple-table-cell">60分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('hashimoto')">
              {{ timetable.timetable['hashimoto'].title }}<br>{{ timetable.timetable['hashimoto'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">16:40 - 16:55</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">16:55 - 17:55</td>
            <td class="siimple-table-cell">60分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('iwakiri')">
              {{ timetable.timetable['iwakiri'].title }}<br>{{ timetable.timetable['iwakiri'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">17:55 - 18:30</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">クロージング</td>
          </tr>
        </tbody>
      </table>
    </div>
    <app-footer/>
  </div>
</template>
<script>
import SpeakerModal from './speaker_modal'
import AppHeader from './header'
import AppFooter from './footer'
import TimetableData from '../data/timetable_data'

export default {
  components: { SpeakerModal, AppHeader, AppFooter },
  data: function () {
    return {
      visible: false,
      title: '',
      name: '',
      affiliation: '',
      image: '',
      detail: '',
      twitter: '',
      facebook: '',
      github: '',
      external: '',
      profile: '',
      timetable: TimetableData
    }
  },
  mounted () {
    if (!location.hash) return
    const speaker = location.hash.split('#')[1]
    this.show(speaker)
  },
  methods: {
    show (speaker) {
      if (!this.timetable.timetable[speaker]) return
      document.location.hash = speaker
      this.title = this.timetable.timetable[speaker].title
      this.name = this.timetable.timetable[speaker].name
      this.affiliation = this.timetable.timetable[speaker].affiliation
      this.image = this.timetable.timetable[speaker].image
      this.detail = this.timetable.timetable[speaker].detail
      this.twitter = this.timetable.timetable[speaker].twitter
      this.facebook = this.timetable.timetable[speaker].facebook
      this.github = this.timetable.timetable[speaker].github
      this.external = this.timetable.timetable[speaker].external
      this.profile = this.timetable.timetable[speaker].profile
      this.visible = true
    },
    hide () {
      document.location.hash = ''
      this.visible = false
      this.title = ''
      this.name = ''
      this.affiliation = ''
      this.image = ''
      this.detail = ''
      this.twitter = ''
      this.facebook = ''
      this.github = ''
      this.external = ''
      this.profile = ''
    }
  }
}
</script>
<style scoped>
  td.siimple-table-cell {
    overflow-wrap: break-word;
    white-space: normal;
  }
  .siimple-table { margin-left: 10px; margin-right: 10px; width: calc(100% - 20px); }
</style>
