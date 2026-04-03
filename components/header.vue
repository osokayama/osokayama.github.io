<template>
  <header class="siimple-navbar siimple-navbar--navy siimple-navbar--medium">
    <div class="siimple-layout--left">
      <nuxt-link
        class="siimple-navbar-title"
        to="/">
        <img src="@/assets/images/logo_white.svg">
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
      v-show="menuVisible"
      class="siimple-layout--right menus">
      <nuxt-link
        v-for="menu in menus"
        :key="menu.text"
        :to="`/${menu.url}`"
        class="siimple-navbar-link">
        {{ menu.text }}
      </nuxt-link>
    </div>
  </header>
</template>
<script>
import HeaderData from '@/data/header_data'

export default {
  data: function () {
    return {
      ...HeaderData,
      menuVisible: false
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.resize)
      this.resize()
    })
  },
  beforeUnmount: function () {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize () {
      var win = window.innerWidth
      var p = 792
      if (win > p) {
        this.menuVisible = true
      } else {
        this.menuVisible = false
      }
    },
    toggleCanvas () {
      this.menuVisible = !this.menuVisible
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
