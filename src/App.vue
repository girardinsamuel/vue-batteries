<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Welcome to Your Plugin in Vue.js</h1>
    <!-- <CellAlert2 status="error" /> -->
    <!-- <Alert3 status="error">Alerte avec vue 3 + jsx !!</Alert3> -->
    <MyCustomAlert :closable="false" status="error" v-model="showAlert"
      >Je suis une alerte custom</MyCustomAlert
    >
    <!-- <CellAlert2 :closable="false" status="error"
      >Je suis une alerte 1</CellAlert2
    >
    <CellAlert2
      ><template #content>
        <h3>Je suis une alerte 2</h3>
      </template></CellAlert2
    >
    <CellAlert2>
      Je suis une alerte 3
      <template #close="{close}"
        ><button @click="close">FERMER</button></template
      ></CellAlert2
    > -->
    <!-- <CellAlert2>
      <template #close="{close}">
        <a @click="close">close</a>
      </template>
    </CellAlert2> -->
    <!-- <CellAlert2
      ><template #close="{ close }">
        <a @click="close">close</a>
      </template></CellAlert2
    > -->
    <!-- <AppAlertCustom>Alerte avec vue 3 !!</AppAlertCustom> -->
    <p>testouille</p>
    <!-- Option 0 -->
    <!-- <MyAppAlert class="direct-class">Je suis une app-alerte</MyAppAlert>
    <CellAlert class="direct-class">Je suis une alerte</CellAlert> -->
    <Alert :closable="false" class="direct-class">Je suis une alerte</Alert>
    <Alert :closable="false" :class="['direct-class-with-prop']"
      >Je suis une alerte</Alert
    >
    <button @click="showAlert = !showAlert">toggle following alert</button>
    <Alert :closable="false" v-model="showAlert">Je suis une alerte</Alert>
    <Alert :closable="false" :visible="false">Je suis une alerte cachée</Alert>
    <Alert>Je suis une alerte fermable</Alert>

    <Alert status="error">Je suis une alerte danger</Alert>
    <Alert
      status="error"
      :classes="{
        container: {
          base: 'alert-container',
          error: 'alert-error'
        }
      }"
      >Je suis une alerte danger avec style !</Alert
    >
    <Alert status="success">Je suis une alerte success</Alert>

    <!-- Option 1 -->
    <Alert
      >Je suis une alerte
      <template #close="{close}">
        <a @click="close">close</a>
      </template>
    </Alert>

    <!-- Option 2 -->
    <AppAlert>Coucou</AppAlert>
    <AppAlert :closable="false">Coucou</AppAlert>

    <!-- Option 3 -->
  </div>
</template>

<script>
import MyAlert from './MyAlert.vue'
import MyCustomAlert from './MyCustomAlert.vue'
// import Alert3 from './MyRenderlessAlert.vue'
// import CellAlert2 from './components/CellAlert2'

export default {
  components: {
    AppAlert: MyAlert,
    MyCustomAlert
    // Alert3,
    // CellAlert2
  },
  data() {
    return {
      showAlert: true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
