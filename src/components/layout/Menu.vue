<template>
  <q-list>
    <q-item-label header>Menu</q-item-label>
    <q-item
      clickable
      tag="h"
      to="/"
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
      tag="a"
      to="/about"
    >
      <q-item-section avatar>
        <q-icon name="school" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Home</q-item-label>
        <q-item-label caption>Pagina inicial</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style>
</style>
