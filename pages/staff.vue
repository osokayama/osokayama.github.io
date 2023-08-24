<template>
  <div>
    <app-header/>
    <div class="siimple-content siimple-content--medium siimple--mt-5">
      <div class="siimple-box page-title">
        <div class="siimple-box-title"><i class="fas fa-users"/> 実行委員会</div>
      </div>
      <div class="siimple-grid oso-staff">
        <div class="siimple-grid-row">
          <div
            v-for="staff in staffs"
            :key="staff.name"
            class="siimple-grid-col siimple-grid-col-sm--6 siimple-grid-col-md--4 siimple-grid-col-lg--3 siimple-grid-col--2">
            <div class="siimple-box siimple-box--navy oso-staff-box">
              <div class="oso-staff-image"><img :src="'images/staff/' + staff.image"></div>
              <div class="oso-staff-name">{{ staff.name }}</div>
              <div class="oso-staff-roll">{{ staff.roll }}</div>
              <div class="oso-staff-sns">
                <div class="siimple-grid oso-staff-sns-icons">
                  <div class="siimple-grid-row">
                    <div
                      v-if="!!staff.twitter"
                      class="siimple-grid-col siimple-grid-col--6 oso-staff-sns-icon">
                      <a :href="staff.twitter">
                        <i
                          class="fab fa-x-twitter"
                          aria-hidden="true"/>
                      </a>
                    </div>
                    <div
                      v-if="!!staff.facebook"
                      class="siimple-grid-col siimple-grid-col--6 oso-staff-sns-icon">
                      <a :href="staff.facebook">
                        <i
                          class="fab fa-facebook-f"
                          aria-hidden="true"/>
                      </a>
                    </div>
                    <div
                      v-if="!!staff.github"
                      class="siimple-grid-col siimple-grid-col--6 oso-staff-sns-icon">
                      <a :href="staff.github">
                        <i
                          class="fab fa-github"
                          aria-hidden="true"/>
                      </a>
                    </div>
                    <div
                      v-if="!!staff.external"
                      class="siimple-grid-col siimple-grid-col--6 oso-staff-sns-icon">
                      <a :href="staff.external">
                        <i
                          class="fas fa-external-link-alt"
                          aria-hidden="true"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer/>
  </div>
</template>
<script>
import AppHeader from '@/components/header'
import AppFooter from '@/components/footer'
import StaffData from '@/data/staff_data'

export default {
  components: { AppHeader, AppFooter },
  data: function () {
    return StaffData
  },
  head() {
    return {
      title: '実行委員会'
    }
  }
}
</script>
<style scoped>
.oso-staff { max-width: 1280px; }
.siimple-box.oso-staff-box { width: 100%; padding-top: 0; padding-right: 0; padding-left: 0; padding-bottom: 40px; }
.oso-staff-image img {
  border-radius: 5px 5px 0 0 / 5px 5px 0 0;
  width: 100%;
  padding-bottom: 10px;
}
.oso-staff-name { font-size: 20px; }
.oso-staff-name,.oso-staff-roll,.oso-staff-sns { padding-left: 10px; padding-right: 10px; padding-bottom: 5px; }
.oso-staff-roll { height: 26px; }
.oso-staff-sns-icons { text-align: center; margin-top: 10px; height: 45px; }
.oso-staff-sns-icons .oso-staff-sns-icon { display: inline; text-align: center; padding-bottom: 10px; }
.oso-staff-sns-icons .oso-staff-sns-icon i { width: 32px; height: 32px; line-height: 32px; border: solid 1px; -webkit-border-radius: 50%; -moz-border-radius: 50%; border-radius: 50%; background-color: #4894f0; color: #fff; margin: auto; font-size: 1.0em; transition: 0.5s; }
.oso-staff-sns-icons .oso-staff-sns-icon i:hover { border: solid 1px; color: #4894f0; background-color: #fff;}
</style>
