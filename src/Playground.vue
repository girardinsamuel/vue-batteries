<template>
  <div class="container px-4 mx-auto">
    <p>{{ '123456789' | truncate(5, '...') }}</p>
    <p>{{ 'john' | capitalize }}</p>
    <p>{{ 'john' | uppercase }}</p>
    <p>{{ 'JoHn' | lowercase }}</p>
    <Alert6 title="Alert title">Alert description</Alert6>
    <Alert6 title="Alert title" status="error">Alert description</Alert6>
    <!-- <CellInput label="Prénom" v-model="firstName" />
    <CellInput label="Address">
      <template #help>
        Hint: you can use lat/lng
      </template>
    </CellInput>
    <CellInput label="Password" type="password" />
    <CellInput
      label="Nom"
      value="Doe"
      disabled
      leading-icon="user"
      help="Disabled field"
    />
    <CellInput
      label="Nom"
      value="Doe"
      status="error"
      leading-icon="user"
      trailing-icon="eye"
      :status-icon="true"
      help="Disabled field"
    />
    <CellInput value="Super" status="success" :status-icon="true" />
    <CellInput
      value="Super"
      status="success"
      :status-icon="true"
      :loading="true"
    /> -->
    <!-- <CellSwitch label="Switch label" disabled /> -->
    <CellSwitch label="Switch label" v-model="on" />
    <CellSwitch label="Switch label disabled" v-model="on" disabled />
    <CellSwitch
      label="Switch label"
      v-model="on"
      reverse
      status="error"
      help="Error message"
    />
    <CellSwitch
      :label="switchVal"
      v-model="switchVal"
      :values="['disabled', 'enabled']"
    />
    <CellSwitch
      :label="switchVal"
      v-model="switchVal"
      reverse
      :values="['disabled', 'enabled']"
      help="You need help ?"
      disabled
    />
    <!-- <CellSwitch label="Switch label" v-model="on" reverse /> -->
    <!-- <CellSwitch
      label="Switch label"
      v-model="switchVal"
      :values="['disabled', 'enabled']"
    /> -->

    <CellInput
      @trailing-icon-click="processEvent('click !')"
      placeholder="custom"
    >
      <template #trailingIcon>
        <span class="pr-3 text-gray-500 sm:text-sm sm:leading-5">
          X
        </span>
      </template>
    </CellInput>
    <CellInput
      placeholder="custom"
      :classes-override="{
        container: 'flex',
        input: {
          base:
            'w-full border h-12 px-4 py-2 text-lg leading-tight border-0 rounded-none rounded-r-md shadow-none appearance-none'
        }
      }"
    >
      <template #leading>
        <span
          class="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md sm:text-sm"
        >
          http://
        </span>
      </template>
    </CellInput>

    <CellInput
      placeholder="custom end"
      :classes-override="{
        container: 'flex',
        input: {
          base:
            'w-full border h-12 px-4 py-2 text-lg leading-tight border-0 rounded-none rounded-l-md shadow-none appearance-none'
        }
      }"
    >
      <template #trailing>
        <!-- <span
          class="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md sm:text-sm"
        >
          €
        </span> -->
        <CellButton
          :classes-override="{
            base:
              'inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md sm:text-sm'
          }"
          @click="processEvent('click')"
          leadingIcon="user"
        />
      </template>
    </CellInput>
    <CellButton variant="blue" @click="copyText">Copier</CellButton>
    <CellInput
      label="Prénom"
      v-model="firstName"
      @blur="processEvent('blur')"
      @input="processEvent('input')"
      @keyup="processEvent('keyup.enter')"
      @keyup.enter="processEvent('keyup.enter')"
      @focus="processEvent('focus')"
      name="prenom"
    />
    <p
      class="max-w-xs p-4 overflow-y-scroll text-gray-800 bg-gray-300"
      ref="eventsCellInput"
      style="white-space: pre-line; max-height: 100px;"
    >
      {{ eventsLog }}
    </p>
    <CellTextarea label="Description" :rows="4" readonly />
    <CellTextarea
      v-model="text"
      label="Description"
      :classes="{
        root: 'flex flex-wrap items-center ',
        label: { base: 'mr-2' }
      }"
      status="error"
      help="help text"
    />
    <div class="mb-20"></div>

    <CellButton class="mr-2" variant="blue">Ajouter</CellButton>
    <CellButton mode="outline" variant="blue" class="mr-2"
      >Supprimer</CellButton
    >
    <CellButton mode="link" variant="blue" class="mr-2">Contact</CellButton>
    <CellButton class="mr-2" variant="blue" disabled>Désactivé</CellButton>
    <!-- block -->
    <!-- <CellButton block class="mr-2" variant="blue">Accepter</CellButton>
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
    > -->

    <!-- <CellButton variant="blue">
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
    </CellButton> -->
    <!-- <AlertDebug>Hello there !</AlertDebug> -->
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
// import AlertDebug from './components/AlertDebug.vue'
// import MyCustomAlert from './MyCustomAlert.vue'
// import Alert3 from './MyRenderlessAlert.vue'
// import CellAlert2 from './components/CellAlert2'
import Alert6 from '../demo/examples/Alert6.vue'

export default {
  name: 'Playground',
  components: {
    // AlertDebug
    // AppAlert: MyAlert
    // MyCustomAlert
    // Alert3,
    // CellAlert2
    Alert6
  },
  data() {
    return {
      showAlert: true,
      firstName: 'John',
      eventsLog: '',
      text: 't\nt\nt\nt\nt\nt\n',
      on: false,
      switchVal: 'enabled'
    }
  },
  methods: {
    processEvent(event) {
      this.eventsLog += event + '\n'
    },
    copyText() {
      this.$copy(this.firstName)
      this.processEvent('copied !')
    }
  }
}
</script>
