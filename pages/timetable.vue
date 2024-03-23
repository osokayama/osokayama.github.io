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
            <td class="siimple-table-cell">12:30 - 12:40</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">オープニング</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">12:40 - 13:20</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('sueda')">
              <span v-html="timetable.timetable['sueda'].title" /><br>{{ timetable.timetable['sueda'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">13:20 - 13:25</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">幕間</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">13:25 - 14:05</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('littleossa')">
              <span v-html="timetable.timetable['littleossa'].title" /><br>{{ timetable.timetable['littleossa'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">14:05 - 14:20</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">14:20 - 15:00</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('sinmetal')">
              <span v-html="timetable.timetable['sinmetal'].title" /><br>{{ timetable.timetable['sinmetal'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">15:00 - 15:05</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">幕間</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">15:05 - 15:45</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('kondo')">
              <span v-html="timetable.timetable['kondo'].title" /><br>{{ timetable.timetable['kondo'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">15:45 - 16:00</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">16:00 - 16:40</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('nakamichi')">
              <span v-html="timetable.timetable['nakamichi'].title" /><br>{{ timetable.timetable['nakamichi'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">16:40 - 16:45</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">幕間</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">16:45 - 17:25</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('terada')">
              <span v-html="timetable.timetable['terada'].title" /><br>{{ timetable.timetable['terada'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">17:25 - 17:35</td>
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
      navigateTo(`detail/?speaker=${speaker}`)
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
