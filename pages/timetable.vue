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
              @click="show('lucas')">
              <span v-html="timetable.timetable['lucas'].title" /><br>{{ timetable.timetable['lucas'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">10:50 - 10:55</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">質疑応答</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">10:55 - 11:05</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">11:05 - 11:45</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('miyake')">
              <span v-html="timetable.timetable['miyake'].title" /><br>{{ timetable.timetable['miyake'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">11:45 - 11:50</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">質疑応答</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">11:50 - 13:00</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">昼休憩</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">13:00 - 13:40</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('tamacona')">
              <span v-html="timetable.timetable['tamacona'].title" /><br>{{ timetable.timetable['tamacona'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">13:40 - 13:45</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">質疑応答</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">13:45 - 14:00</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">14:00 - 14:10</td>
            <td class="siimple-table-cell">10分</td>
            <td class="siimple-table-cell">
              スポンサーセッション {{ timetable.timetable['sponsor1'].company }}<br>
              <span v-if="timetable.timetable['sponsor1'].title"><span v-html="timetable.timetable['sponsor1'].title" /><br>{{ timetable.timetable['sponsor1'].name }}</span>
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">14:10 - 14:15</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">幕間</td>
          </tr>
          <tr class="siimple-table-row session">
            <td class="siimple-table-cell">14:15 - 14:55</td>
            <td class="siimple-table-cell">40分</td>
            <td
              class="siimple-table-cell hover"
              @click="show('umeta')">
              <span v-html="timetable.timetable['umeta'].title" /><br>{{ timetable.timetable['umeta'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">14:55 - 15:00</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">質疑応答</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">15:00 - 15:15</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">15:15 - 15:25</td>
            <td class="siimple-table-cell">10分</td>
            <td class="siimple-table-cell">
              スポンサーセッション {{ timetable.timetable['sponsor2'].company }}<br>
              <span v-if="timetable.timetable['sponsor2'].title"><span v-html="timetable.timetable['sponsor2'].title" /><br>{{ timetable.timetable['sponsor2'].name }}</span>
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
              @click="show('daiksy')">
              <span v-html="timetable.timetable['daiksy'].title" /><br>{{ timetable.timetable['daiksy'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">16:10 - 16:15</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">質疑応答</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">16:15 - 16:30</td>
            <td class="siimple-table-cell">&nbsp;</td>
            <td class="siimple-table-cell">休憩</td>
          </tr>
          <tr class="siimple-table-row">
            <td class="siimple-table-cell">16:30 - 16:40</td>
            <td class="siimple-table-cell">10分</td>
            <td class="siimple-table-cell">
              スポンサーセッション {{ timetable.timetable['sponsor3'].company }}<br>
              <span v-if="timetable.timetable['sponsor3'].title"><span v-html="timetable.timetable['sponsor3'].title" /><br>{{ timetable.timetable['sponsor3'].name }}</span>
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
              @click="show('soudai')">
              <span v-html="timetable.timetable['soudai'].title" /><br>{{ timetable.timetable['soudai'].name }}
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
<script setup>
useHead({ title: 'タイムテーブル' })
</script>
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
  methods: {
    show (speaker) {
      if (!this.timetable.timetable[speaker]) return
      navigateTo(`/detail/?speaker=${speaker}`)
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
