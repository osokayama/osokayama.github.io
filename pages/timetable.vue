<template>
  <div>
    <app-header/>
    <div class="siimple-content siimple-content--medium siimple--mt-5">
      <div class="siimple-box page-title">
        <div class="siimple-box-title"><i class="far fa-clock"/> タイムテーブル</div>
      </div>
      <table class="siimple-table siimple-table--border">
        <tbody class="siimple-table-body">
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">14:00 - 14:10</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">オープニング</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">14:10 - 14:40</td>
            <td class="siimple-table-cell">30分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('fujita')">
              <span v-html="timetable.timetable['fujita'].title" /><br>{{ timetable.timetable['fujita'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">14:40 - 15:30</td>
            <td class="siimple-table-cell">50分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('yoshida')">
              <span v-html="timetable.timetable['yoshida'].title" /><br>{{ timetable.timetable['yoshida'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">15:30 - 15:45</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">15:45 - 16:15</td>
            <td class="siimple-table-cell">30分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('sueda')">
              <span v-html="timetable.timetable['sueda'].title" /><br>{{ timetable.timetable['sueda'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">16:15 - 17:05</td>
            <td class="siimple-table-cell">50分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('tanaka')">
              <span v-html="timetable.timetable['tanaka'].title" /><br>{{ timetable.timetable['tanaka'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">17:05 - 17:20</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">17:20 - 17:50</td>
            <td class="siimple-table-cell">30分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('maeda')">
              <span v-html="timetable.timetable['maeda'].title" /><br>{{ timetable.timetable['maeda'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">17:50 - 18:40</td>
            <td class="siimple-table-cell">50分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('shoji')">
              <span v-html="timetable.timetable['shoji'].title" /><br>{{ timetable.timetable['shoji'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">18:40 - 18:50</td>
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
import AppHeader from '@/components/header'
import AppFooter from '@/components/footer'
import TimetableData from '@/data/timetable_data'

export default {
  components: { AppHeader, AppFooter },
  data: function () {
    return {
      timetable: TimetableData
    }
  },
  head() {
    return {
      title: 'タイムテーブル'
    }
  },
  methods: {
    show (speaker) {
      if (!this.timetable.timetable[speaker]) return
      location.href = `detail.html?speaker=${speaker}`
    },
    hide () {
      this.visible = false
      this.title = ''
      this.name = ''
      this.affiliation = ''
      this.image = ''
      this.detail = ''
      this.twitter = ''
      this.facebook = ''
      this.github = ''
      this.externals = []
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
  td.siimple-table-cell.hover {
    text-decoration: underline;
  }
  td.siimple-table-cell.hover:hover {
    background-color: #fbffff;
    cursor: pointer;
  }
  .siimple-table { margin-left: 10px; margin-right: 10px; width: calc(100% - 20px); }
</style>
