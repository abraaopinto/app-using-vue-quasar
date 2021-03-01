<template>
  <q-list data-title = " Bem-vindo! " data-intro='Este é o menu da aplicação!'>
    <q-item-label header>Menu</q-item-label>
    <q-item
      clickable
      tag="h"
      to="/"
      data-intro='Item menu para pagina inicial!'
    >
      <q-item-section avatar>
        <q-icon name="school" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Home</q-item-label>
        <q-item-label caption>Pagina inicial</q-item-label>
      </q-item-section>
    </q-item>
    <q-item
      clickable
      tag="h"
      to="/forms"
      data-intro='Item menu para pagina inicial!'
    >
      <q-item-section avatar>
        <q-icon name="school" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Forms</q-item-label>
        <q-item-label caption>Pagina forms</q-item-label>
      </q-item-section>
    </q-item>
    <q-item
      clickable
      tag="a"
      to="/about"
      data-intro='Item menu para pagina About!'
    >
      <q-item-section avatar>
        <q-icon name="school" />
      </q-item-section>
      <q-item-section>
        <q-item-label>About</q-item-label>
        <q-item-label caption>Pagina About</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    mounted () {
      console.log(this.$route)
    }
  }
}
</script>

<style>
</style>
