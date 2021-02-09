<template>
  <header class="siimple-navbar siimple-navbar--navy siimple-navbar--medium">
    <div class="siimple-layout--left">
      <nuxt-link
        class="siimple-navbar-title"
        to="./">
        <img src="images/logo_white.svg">
      </nuxt-link>
    </div>
    <div class="siimple-layout--right bars">
      <a
        class="siimple-navbar-link"
        @click="toggleCanvas();">
        <i class="fas fa-bars"/>
      </a>
    </div>
    <div
      id="menus"
      class="siimple-layout--right menus">
      <nuxt-link
        v-for="menu in menus"
        :key="menu.text"
        :to="menu.url"
        class="siimple-navbar-link">
        {{ menu.text }}
      </nuxt-link>
    </div>
  </header>
</template>
<script>
import $ from 'jquery'
import HeaderData from '@/data/header_data'

export default {
  data: function () {
    return HeaderData
  },
  mounted: function () {
    this.$nextTick(function () {
      $(window).resize(this.resize)
      this.resize()
    })
  },
  methods: {
    resize () {
      var win = $(window).width()
      var p = 765
      if (win > p) {
        $('#menus').show()
      } else {
        $('#menus').hide()
      }
    },
    toggleCanvas () {
      console.log('toggleCanvas')
      $('#menus').slideToggle()
    }
  }
}
</script>
<style scoped>
.siimple-navbar-title img {
  width: 90px;
  height: 60px;
  line-height: 60px;
}

@media screen and (max-width: 792px) {
  .siimple-navbar {
    min-height: 60px;
    height: auto;
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
  }
  .siimple-navbar .menus {
    background-color: #57607c;
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    float: none;
  }
  .siimple-navbar .menus .siimple-navbar-link {
    background-color: #57607c;
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
  }
}
@media screen and (min-width: 792px) {
  .siimple-navbar .bars {
    display: none;
  }
}
</style>
