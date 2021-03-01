<template>
  <q-page padding>
    <div>
      <h5>Input</h5>
      <div class="row">
        <q-input
          class="col-2"
          v-model="texto"
          label="Digite um texto"
          clearable
          @input="val => texto = $useful.sanitizeAndCapitalize(val)"
          :hint="texto"
          :rules="[val => !!val || 'O campo é obrigatorio!']"
        />
        <q-input
          class="col-2"
          v-model="texto"
          label="Digite um texto"
          clearable
          type="textarea"
          @input="val => texto = $useful.sanitizeAndCapitalize(val)"
          :hint="texto"
        />

      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      texto: ''
    }
  }
}
</script>
