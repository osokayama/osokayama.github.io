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
              @click="show('daiksy')">
              {{ timetable.timetable['daiksy'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('tamacona')">
              {{ timetable.timetable['tamacona'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('lucas')">
              {{ timetable.timetable['lucas'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('soudai')">
              {{ timetable.timetable['soudai'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('miyake')">
              {{ timetable.timetable['miyake'].name }}
            </td>
          </tr>
          <tr class="siimple-table-row session">
            <td
              class="siimple-table-cell hover"
              @click="show('umeta')">
              {{ timetable.timetable['umeta'].name }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <app-footer/>
  </div>
</template>
<script setup>
useHead({ title: '登壇者' })
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
