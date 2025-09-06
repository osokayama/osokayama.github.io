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
            <td class="siimple-table-cell">10:00 - 10:10</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">オープニング</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">10:10 - 10:50</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('aknow')">
              <span v-html="timetable.timetable['aknow'].title" /><br>{{ timetable.timetable['aknow'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">10:50 - 10:55</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">質疑応答</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">10:55 - 11:10</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">11:10 - 11:50</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('hsjoihs')">
              <span v-html="timetable.timetable['hsjoihs'].title" /><br>{{ timetable.timetable['hsjoihs'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">11:50 - 11:55</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">質疑応答</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">11:55 - 13:00</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">昼休憩</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">13:00 - 13:10</td>
            <td class="siimple-table-cell">10分</td>
            <td class="siimple-table-cell">
              スポンサーセッション {{ timetable.timetable['psc'].company }}<br>
              <span v-if="timetable.timetable['psc'].title"><span v-html="timetable.timetable['psc'].title" /><br>{{ timetable.timetable['psc'].name }}</span>
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">13:10 - 13:15</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">幕間</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">13:15 - 13:55</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('koba789')">
              <span v-html="timetable.timetable['koba789'].title" /><br>{{ timetable.timetable['koba789'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">13:55 - 14:00</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">質疑応答</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">14:00 - 14:15</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">14:15 - 14:25</td>
            <td class="siimple-table-cell">10分</td>
            <td class="siimple-table-cell">
              スポンサーセッション {{ timetable.timetable['subthread'].company }}<br>
              <span v-if="timetable.timetable['subthread'].title"><span v-html="timetable.timetable['subthread'].title" /><br>{{ timetable.timetable['subthread'].name }}</span>
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">14:25 - 14:30</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">幕間</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">14:30 - 15:10</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('majima')">
              <span v-html="timetable.timetable['majima'].title" /><br>{{ timetable.timetable['majima'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">15:10 - 15:15</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">質疑応答</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">15:15 - 15:30</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">15:30 - 15:40</td>
            <td class="siimple-table-cell">10分</td>
            <td class="siimple-table-cell">
              スポンサーセッション {{ timetable.timetable['serio'].company }}<br>
              <span v-if="timetable.timetable['serio'].title"><span v-html="timetable.timetable['serio'].title" /><br>{{ timetable.timetable['serio'].name }}</span>
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">15:40 - 15:45</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">幕間</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">15:45 - 16:25</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('kiryu')">
              <span v-html="timetable.timetable['kiryu'].title" /><br>{{ timetable.timetable['kiryu'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">16:25 - 16:30</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">質疑応答</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">16:30 - 16:45</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">16:45 - 17:25</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('kyoro')">
              <span v-html="timetable.timetable['kyoro'].title" /><br>{{ timetable.timetable['kyoro'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">17:25 - 17:30</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">質疑応答</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">17:30 - 17:45</td>
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
