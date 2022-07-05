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
            <td class="siimple-table-cell">13:30 - 13:40</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">オープニング</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">13:40 - 14:20</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('minodriven')">
              <span v-html="timetable.timetable['minodriven'].title" /><br>{{ timetable.timetable['minodriven'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">14:20 - 14:25</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">幕間</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">14:25 - 15:05</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('koremura')">
              <span v-html="timetable.timetable['sawada'].title" /><br>{{ timetable.timetable['sawada'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">15:05 - 15:20</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">15:20 - 16:00</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('miyao')">
              <span v-html="timetable.timetable['miyao'].title" /><br>{{ timetable.timetable['miyao'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">16:00 - 16:05</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">幕間</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">16:05 - 16:45</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('kuroda')">
              <span v-html="timetable.timetable['kuroda'].title" /><br>{{ timetable.timetable['kuroda'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">16:45 - 17:00</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">17:00 - 17:40</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('kondo')">
              <span v-html="timetable.timetable['kondo'].title" /><br>{{ timetable.timetable['kondo'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">17:40 - 17:45</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">幕間</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">17:45 - 18:25</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('tohoho')">
              <span v-html="timetable.timetable['tohoho'].title" /><br>{{ timetable.timetable['tohoho'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">18:25 - 18:35</td>
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
  .theme { font-weight: bold; }
</style>
