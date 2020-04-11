<template>
  <div>
    <CellButton class="mr-2" variant="blue">Ajouter</CellButton>
    <CellButton mode="outline" variant="blue" class="mr-2"
      >Supprimer</CellButton
    >
    <CellButton mode="link" variant="blue" class="mr-2">Contact</CellButton>
    <CellButton class="mr-2" variant="blue" disabled>Désactivé</CellButton>
    <!-- block -->
    <CellButton block class="mr-2" variant="blue">Accepter</CellButton>
    <CellButton block class="mr-2" variant="blue" :to="{ name: 'example' }"
      >With vue-router</CellButton
    >

    <CellButton class="mr-2" variant="blue">
      <template #leadingIcon="{leadingIconClass}">
        <CellIcon name="user" :class="leadingIconClass" />
      </template>
      Button with icon</CellButton
    >

    <CellButton class="mr-2" variant="blue" leadingIcon="user"
      >Button with icon</CellButton
    >

    <CellButton variant="blue">
      <template #leadingIcon="{leadingIconClass}">
        <svg
          :class="[leadingIconClass, 'mr-2']"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
      </template>
      Download
    </CellButton>
    <CellButton variant="blue" mode="outline">
      Download
      <template #trailingIcon="{trailingIconClass}">
        <svg
          :class="trailingIconClass"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
      </template>
    </CellButton>
    <CellButton variant="dark">
      <template #trailingIcon="{trailingIconClass}">
        <svg
          :class="trailingIconClass"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
      </template>
    </CellButton>
    <CellButton variant="dark" mode="outline">
      <template #trailingIcon="{trailingIconClass}">
        <svg
          :class="trailingIconClass"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
      </template>
    </CellButton>
    <AlertDebug>Hello there !</AlertDebug>
    <!-- <CellAlert2 status="error" /> -->
    <!-- <Alert3 status="error">Alerte avec vue 3 + jsx !!</Alert3> -->
    <!-- <MyCustomAlert :closable="false" status="error" v-model="showAlert"
      >Je suis une alerte custom</MyCustomAlert
    > -->
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
    <!-- Option 0 -->
    <!-- <MyAppAlert class="direct-class">Je suis une app-alerte</MyAppAlert>
    <CellAlert class="direct-class">Je suis une alerte</CellAlert> -->
    <!-- <Alert :closable="false" class="direct-class">Je suis une alerte</Alert>
    <Alert :closable="false" :class="['direct-class-with-prop']"
      >Je suis une alerte</Alert
    > -->
    <!-- <button @click="showAlert = !showAlert">toggle following alert</button>
    <Alert :closable="false" v-model="showAlert">Je suis une alerte</Alert>
    <Alert :closable="false" :visible="false">Je suis une alerte cachée</Alert>
    <Alert>Je suis une alerte fermable</Alert> -->

    <!-- <Alert status="error">Je suis une alerte danger</Alert>
    <Alert
      status="error"
      :classes="{
        container: {
          base: 'alert-container',
          error: 'alert-error'
        }
      }"
      >Je suis une alerte danger avec style !</Alert
    > -->
    <!-- <Alert status="success">Je suis une alerte success</Alert> -->

    <!-- Option 1 -->
    <!-- <Alert
      >Je suis une alerte
      <template #close="{close}">
        <a @click="close">close</a>
      </template>
    </Alert> -->

    <!-- Option 2 -->
    <!-- <AppAlert>Coucou</AppAlert>
    <AppAlert :closable="false">Coucou</AppAlert> -->

    <!-- Option 3 -->
  </div>
</template>

<script>
import AlertDebug from './components/AlertDebug.vue'
// import MyCustomAlert from './MyCustomAlert.vue'
// import Alert3 from './MyRenderlessAlert.vue'
// import CellAlert2 from './components/CellAlert2'

export default {
  name: 'Playground',
  components: {
    AlertDebug
    // AppAlert: MyAlert
    // MyCustomAlert
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
