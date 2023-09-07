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
            <td class="siimple-table-cell">13:00 - 13:10</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">オープニング</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">13:10 - 13:50</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('sueda')">
              <span v-html="timetable.timetable['sueda'].title" /><br>{{ timetable.timetable['sueda'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">13:50 - 13:55</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">幕間</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">13:55 - 14:35</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('littleossa')">
              <span v-html="timetable.timetable['littleossa'].title" /><br>{{ timetable.timetable['littleossa'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">14:35 - 14:45</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">14:45 - 15:25</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('sinmetal')">
              <span v-html="timetable.timetable['sinmetal'].title" /><br>{{ timetable.timetable['sinmetal'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">15:25 - 15:30</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">幕間</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">15:30 - 16:10</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('kondo')">
              <span v-html="timetable.timetable['kondo'].title" /><br>{{ timetable.timetable['kondo'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">16:10 - 16:20</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">16:20 - 17:00</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('nakamichi')">
              <span v-html="timetable.timetable['nakamichi'].title" /><br>{{ timetable.timetable['nakamichi'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">17:00 - 17:05</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">幕間</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">17:05 - 17:45</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('terada')">
              <span v-html="timetable.timetable['terada'].title" /><br>{{ timetable.timetable['terada'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">17:45 - 17:55</td>
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
