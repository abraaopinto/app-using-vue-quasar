<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <q-btn flat round icon="help" @click="handleHelp"/>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
    <Menu />

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import 'intro.js/introjs.css'

import Menu from '@/components/layout/Menu.vue'

export default {
  name: 'MainLayout',

  components: {
    Menu
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    handleHelp () {
      const introJS = require('intro.js')
      introJS().start()
    }
  }
}
</script>

<style>
</style>
