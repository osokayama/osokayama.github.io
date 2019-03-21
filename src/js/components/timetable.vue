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
            <td class="siimple-table-cell">10:10 - 11:10</td>
            <td class="siimple-table-cell">60分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('jnchito')">
              {{ timetable.timetable['jnchito'].title }}<br>{{ timetable.timetable['jnchito'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">11:10 - 11:20</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              rowspan="7"
              class="siimple-table-cell">
              11:20 - 12:10
            </td>
            <td
              rowspan="7"
              class="siimple-table-cell">
              50分
            </td>
            <td class="siimple-table-cell">スポンサーセッション</td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('nakamura')">
              {{ timetable.timetable['nakamura'].title }}<br>{{ timetable.timetable['nakamura'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('tanaka')">
              {{ timetable.timetable['tanaka'].title }}<br>{{ timetable.timetable['tanaka'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('nakayama')">
              {{ timetable.timetable['nakayama'].title }}<br>{{ timetable.timetable['nakayama'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('makowis')">
              {{ timetable.timetable['makowis'].title }}<br>{{ timetable.timetable['makowis'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('kotanin')">
              {{ timetable.timetable['kotanin'].title }}<br>{{ timetable.timetable['kotanin'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">PR動画<br>Forkwell</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">12:10 - 13:30</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">昼休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">13:30 - 14:00</td>
            <td class="siimple-table-cell">30分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('murakami')">
              {{ timetable.timetable['murakami'].title }}<br>{{ timetable.timetable['murakami'].name }}
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
              @click="show('hira')">
              {{ timetable.timetable['hira'].title }}<br>{{ timetable.timetable['hira'].name }}
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
              @click="show('maekawa')">
              {{ timetable.timetable['maekawa'].title }}<br>{{ timetable.timetable['maekawa'].name }}
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
              @click="show('minatogawa')">
              {{ timetable.timetable['minatogawa'].title }}<br>{{ timetable.timetable['minatogawa'].name }}
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
              @click="show('ikeike443')">
              {{ timetable.timetable['ikeike443'].title }}<br>{{ timetable.timetable['ikeike443'].name }}
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
</style>
