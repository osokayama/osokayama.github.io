<template>
  <div>
    <app-header/>
    <div class="siimple-content siimple-content--medium siimple--mt-5">
      <div class="siimple-box page-title">
        <div class="siimple-box-title"><i class="far fa-user-circle"></i> 登壇者</div>
      </div>
      <table class="siimple-table siimple-table--border">
        <tbody class="siimple-table-body">
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('morishita')">
              {{ timetable.timetable['morishita'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('matsuura')">
              {{ timetable.timetable['matsuura'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('koki')">
              {{ timetable.timetable['koki'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('tanabe')">
              {{ timetable.timetable['tanabe'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('nishihara')">
              {{ timetable.timetable['nishihara'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('takahashi')">
              {{ timetable.timetable['takahashi'].name }}
            </td>
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
      title: '登壇者'
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
    font-size: 1.3em;
    font-weight: bold;
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
