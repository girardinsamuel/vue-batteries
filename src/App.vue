<template>
<div class="container mx-auto">
  <!-- <a-alert status="error">
    I am an alert
    <template #close="{ close, className }">
      <button :class="className" @click="close">Close</button>
    </template>
  </a-alert>
  <a-alert v-model="visible">
    <template #content="{ className }">
      <div>
        <p :class="className">I am an alert</p>
      </div>
    </template>
    <template #close="{ close, className }">
      <button :class="className" @click="close">Close</button>
    </template>
  </a-alert>
  <button @click="toggle">toggle</button> -->
  <!-- <a-alert v-model="visible2">I am not visible</a-alert> -->
  <!-- <my-switch
    v-model="state"
  >
    J'accepte ?
  </my-switch> -->
  <!-- <my-switch @change="onChange" label="J'accepte ou pas?" />
  <my-switch @change="onChange" label="J'accepte ou pas? reverse" reverse />
  <my-switch @change="onChange" label="J'accepte ou pas?" :values="['non', 'oui']" /> -->
  <!-- <my-switch @change="onChange" label="J'accepte ou pas? reverse" :values="['non', 'oui']" reverse status="error" help="error message" /> -->
  <!-- <a-switch v-model="state" name="answer_1" help="Help text">I am a switch !</a-switch>
  <a-switch v-model="state">I am a switch !
    <template #help="{ className, checked }">
      <span :class="className">Help text from slot {{ checked }}</span>
    </template>
  </a-switch> -->
  <!-- <a-switch v-model="state" :values="['Non', 'Oui']" reverse>I am a switch !</a-switch> -->
  <!-- <a-input label="First name" disabled />
  <a-input label="Last name" v-model="last_name" status="success" status-icon help="oh oh" />
  <Form :validation-schema="schema" @submit="submit" >
    <custom-input label="E-mail" type="email" name="email" status-icon help="normal help" />
    <a-button >Submit</a-button>
  </Form>
  <a-input label="Password" type="password" v-model="password" status="error" />
  <a-input type="text">
    <template #leading="{className}">
      <div :class="className">
        <a-icon name="user"/>
      </div>
    </template>
  </a-input> -->
  <!-- <cell-button><template #leading>L</template>Text</cell-button> -->
  <!-- <cell-button trailing-icon="search" leading-icon="user" loading-mode="trailing" :loading="true">Text</cell-button> -->
  <!-- <cell-icon name="search" /> -->
  <!-- <cell-alert status="error" v-model="visible">Alert text can be long !</cell-alert> -->
  <!-- <a-input label="Password" type="password" v-model="password" status="error" leading-icon="user" />
  <a-input label="Text" type="text" v-model="password" status="error" trailing-icon="user" /> -->
  <VForm :validation-schema="schema" @submit="submit" >
    <my-input label="Test label" type="email" name="email" v-model="email" help="use your personal email" trailing-icon="loading" />
    <my-textarea label="Test text" name="description" v-model="description" help="talk about you" />
    <my-input label="Password" type="password" name="password" v-model="password" help="choose a strong one (Aa1#)" />
    <my-switch label="J'accepte ou pas?" help="youhou some help" name="accept" v-model="accept" :values="['non', 'oui']" />
    <my-select label="Nationality" help="select your country" name="nationality" :options="['A', 'B', 'C']" leading-icon="users" placeholder="Select your nationality" />
    <my-radio label="Newsletter" help="no spam !" name="newsletter" v-model="newsletter" />
    <!-- <my-checkbox label="Consent ?" help="no spam !" name="consent" v-model="consent" /> -->
    <!-- <my-select label="Nationality 2"  help="select your country" name="nationality2" v-model="nationality2" :options="['A', 'B', 'C']" placeholder="Select your nationality" trailing-icon="users" multiple/> -->
    <cell-button >Submit</cell-button>
  </VForm>

  <!-- <TogglableGroup
    class="flex items-center"
    v-model="drinks"
  >
    <my-radio name="drinks" label="Tea" value="tea" @change="updateDrinks" />
    <my-radio name="drinks" label="Coffee" value="coffee" @change="updateDrinks"  />
    <my-radio name="drinks" label="Water" value="water" @change="updateDrinks" />
  </TogglableGroup> -->
  <!-- <my-checkbox label="Consent ?" name="drinks" value="yes" unchecked-value="no" @change="updateDrinks" v-model="drinks" />
  <my-checkbox label="A" name="ooh" value="a" v-model="result" />
  <my-checkbox label="B" name="ooh" value="b" v-model="result" /> -->
  <my-checkbox label="Subscribe to newsletter ?" name="ooh" v-model="subscribe" :help="subscribe ? 'Happy :)': ''" :status="subscribe ? 'success' : null">Yes !</my-checkbox>
  <my-checkbox label="Consent ?" name="consent3" v-model="consent" value="accepted" unchecked-value="not_accepted" >I consent to cgu.</my-checkbox>
  <input-group v-model="food" type="radio" name="food" :options="['pork', 'chicken', 'beef']" label="Choose some food" />
  <input-group v-model="drinks" type="checkbox" name="drinks" layout="horizontal" :options="['tea', 'coffee', 'water', 'juice']" label="Choose a drink" />

  </div>
</template>

<script>
import MyInput from "./MyInput.vue"
import MySwitch from "./Switch.vue"
import MySelect from "./MySelect.vue"
import MyTextarea from "./MyTextarea.vue"
import MyRadio from "./MyRadio.vue"
import MyCheckbox from "./MyCheckbox.vue"
import InputGroup from "./InputGroup.vue"

import { Form as VForm } from "vee-validate"
import * as Yup from "yup"
export default {
  name: "App",
  components: {
    MyInput,
    MySwitch,
    MySelect,
    MyTextarea,
    MyRadio,
    MyCheckbox,
    InputGroup,
    VForm,
  },
  data () {
    return {
      visible: true,
      visible2: false,
      state: false,
      newsletter: false,
      subscribe: false,
      consent: "accepted",
      drinks: null,
      result: [],
      food: [],
      // nationality: "B",
      // nationality2: null,
      last_name: "Dupont",
      description: "Hello",
      accept: "non",
      email: "test",
      password: "",
      schema: Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        accept: Yup.mixed().oneOf(["oui"]),
        nationality: Yup.string().required(),
        description: Yup.string().required().min(10),
      }),
    }
  },
  methods: {
    toggle () {
      this.visible = !this.visible
    },
    submit (values) {
      console.log("submitted: ", values)
    },
    updateDrinks (value) {
      console.log(value)
    },
    // onChange (value) {
    //   console.log(value)
    // },
  },
}
</script>
