<template>
  <div class="container mx-auto p-4 max-w-md">

    <div class="mb-10">
      <label for="photo" class="block text-sm font-medium text-blue-gray-900">
        Photo
      </label>
      <div class="mt-1 flex items-center">
        <img class="inline-block h-12 w-12 rounded-full" alt="uploaded image" ref="previewRef" v-show="hasFilePreview">
        <div class="ml-4 flex">
          <!-- <div class="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500">
            <label for="user_photo" class="relative text-sm font-medium text-blue-gray-900 pointer-events-none">
              <span>Change</span>
            </label>
            <input id="user_photo" ref="myFileRef" name="user_photo" type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md">
          </div> -->
          <input ref="myFileRef" type="file" class="hidden" @change="selectFile" :accept="acceptedMimeTypes">
          <cell-button variant="primary" @click="openFileBrowser">{{ currentFile ? "Change": "Add"}} avatar</cell-button>
          <button @click="removeFile" type="button" class="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:outline-none focus:border-blue-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-500">
            Remove
          </button>
          <span>({{ currentFileName }} - {{ currentFileSize }})</span>
          <span>{{ isPreviewable }}</span>
        </div>
        <span class="text-red-600" v-if="currentFileError">{{ currentFileError }}</span>
      </div>
    </div>

    <div>
      <a-input
        label="My label for the input"
        v-model="first_name"
        help="Help text"
      />
      <a-input
        label="My label for the input"
        v-model="first_name"
        help="Help text"
        placeholder="Enter a number"
        type="number"
      />
      <a-input
        label="My password"
        v-model="first_name"
        type="password"
      />

      <a-textarea
        label="Description"
        rows="8"
        v-model="first_name"
        placeholder="Describe yourself"
      />

      <a-select
        :options="drinksByCategories"
        v-model="drink4"
        class="my-10"
        :categories="categories"
        help="We will only use this for spam"
      />

      <a-select
        :options="drinks"
        v-model="drink2"
        class="my-10"
        help="We will only use this for spam"
      />

      <a-select
        label="Drink 3"
        :options="drinksByCategories"
        :categories="categories"
        v-model="drink3"
        help="You can select multiple drinks"
        multiple
      />

      <a-select
        label="Drink (lié aux checkboxes)"
        :options="drinks"
        v-model="drink"
        help="You can select multiple drinks"
        multiple
      />

      <!-- <div class="mt-4 sm:mt-0 sm:col-span-2">
        <div class="max-w-lg space-y-4">
          <div class="relative flex items-start" v-for="drink in normalizedOptions" :key="drink.value">
            <div class="flex items-center h-5">
              <input @change="toggleOption(drink)" id="comments" name="comments" type="checkbox" :checked="isSelected(drink)" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </div>
            <div class="ml-3 text-sm">
              <label for="comments" class="font-medium text-gray-700">{{ drink.label }}</label>
            </div>
          </div>
        </div>
      </div> -->
      <a-checkbox
        help="Help text"
        v-model="acceptConditions"
      >
        <template #label>
          <span>My checkbox test</span>
        </template>
        J'accepte les CGU
      </a-checkbox>

      <a-checkbox
        v-model="acceptAds"
        :values="['does_not_accept_ads', 'accept_ads']"
      >
        J'accepte les pubs
      </a-checkbox>

      <span>{{ acceptAds }}</span>

      <a-checkbox-group
        label="Checkbox group"
        help="A help text"
        :options="drinks"
        v-model="drink"
      />

      <a-radio-group
        label="Radio group"
        help="An other help text"
        :options="drinks"
        v-model="drink2"
      />

      <div class="my-5">{{ drink }}</div>
      <div class="my-5">{{ drink2 }}</div>
      <div class="my-5">{{ drink3 }}</div>

      <fieldset>
        <legend class="sr-only">
          Pricing plans
        </legend>
        <div class="relative bg-white rounded-md -space-y-px">
          <label
            v-for="plan in normalizedOptions"
            :key="plan.value"
            @click="selectOption(plan)"
            class="relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3"
            :class="isExternalSelected(plan) ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200'"
          >
            <div class="flex items-center text-sm">
              <input type="radio" name="pricing_plan" :value="plan.value" :checked="isExternalSelected(plan)" class="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="pricing-plans-1-label" aria-describedby="pricing-plans-1-description-0 pricing-plans-1-description-1">
              <span id="pricing-plans-1-label" class="ml-3 font-medium text-gray-900">{{ plan.label }}</span>
            </div>
            <p id="pricing-plans-1-description-0" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
              <span class="font-medium" :class="isExternalSelected(plan) ? 'text-indigo-900' : 'text-gray-900'">$99 / mo</span>
              <span :class="isExternalSelected(plan) ? 'text-indigo-700' : 'text-gray-500'">($990 / yr)</span>
            </p>
            <p id="pricing-plans-1-description-1" :class="isExternalSelected(plan) ? 'text-indigo-700' : 'text-gray-500'" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right">Up to 25 active job postings</p>
          </label>
        </div>
      </fieldset>

      <div class="flex items-center space-x-2">
        <!-- <span v-for="option in normalizedOptions" :key="option.value" @click="selectOption(option)" :class="'text-indigo-900' && isSelected(option)">{{ option.label }}</span> -->
        <span v-for="option in normalizedOptions" :key="option.value" @click="toggleOption(option)">{{ option.label }} <span v-if="isExternalSelected(option)">(x)</span></span>
      </div>
      <span>choice: {{ externalValue }}</span>

      <!-- <cell-button mode="dashed">Test button</cell-button> -->
      <div class="bg-blue-300">
        <cell-button mode="link">Test button link</cell-button>
      </div>

      <!-- <cell-button rounded variant="primary" block >A</cell-button> -->
      <!-- <button @click="toggleSwitch(true)" type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false">
        <span
          :class="flag ? 'translate-x-5' : 'translate-x-0'"
          class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
        ></span>
      </button> -->

    </div>
  </div>
</template>

<script>
// import MyInput from "./MyInput.vue"
// import Icon from "./components/Icon2.vue"
// import UsersIcon from "./assets/icons/users.svg"
// import VueIcon from "./assets/icons/vue.svg"
// import MySwitch from "./Switch.vue"
import ASelect from "./ASelect.vue"
// import MyTextarea from "./MyTextarea.vue"
// import MyRadio from "./MyRadio.vue"
// import MyCheckbox from "./MyCheckbox.vue"
// import InputGroup from "./InputGroup.vue"
import useSelect from "../src/core/useSelect"
import useFileUpload from "../src/core/useFileUpload"
// import useFileDnD from "../src/core/useFileDnD"
// import { CellAlert } from "../src/"

// import { Form as VForm } from "vee-validate"
import * as Yup from "yup"
import ACheckboxGroup from "./ACheckboxGroup.vue"
import ARadioGroup from "./ARadioGroup.vue"
import ACheckbox from "./ACheckbox.vue"
import ATextarea from "./ATextarea.vue"
import AInput from "./AInput"
import { ref } from "vue"

export default {
  name: "App",
  components: {
    AInput,
    ATextarea,
    ASelect,
    ACheckboxGroup,
    ARadioGroup,
    ACheckbox,
  },
  setup (props, context) {
    const drinks = ["Tea", "Coffee", "Orange Juice", "Water", "Wine", "Beer", "Soda", "Whisky", "Rhum", "Energy drink", "Kombucha", "Kefir"]
    const drinksByCategories = [
      { category: "hot", value: "tea", label: "Tea" },
      { category: "hot", value: "coffee", label: "Coffee" },
      { category: "cold", value: "water", label: "Water" },
      { category: "cold", value: "wine", label: "Wine" },
    ]
    const categories = [{ value: "hot", label: "Hot" }, { value: "cold", label: "Cold" }]

    const plans = ref(["Startup", "Business", "Enterprise"])
    // const initialValue = ref(["Startup"])
    const initialValue = ref()

    const myFileRef = ref(null)
    const previewRef = ref(null)
    const initialFile = "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
    const placeholderFile = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ctvalleybrewing.com%2Fwp-content%2Fuploads%2F2017%2F04%2Favatar-placeholder.png&f=1&nofb=1"
    return {
      myFileRef,
      previewRef,
      ...useFileUpload(myFileRef, previewRef, initialFile, placeholderFile, "image/*", 2 * 1024 * 1024),
      // ...useFileDnD(myFileRef, previewRef, initialFile, placeholderFile, "image/*", 2 * 1024 * 1024),
      // selectOption,
      // selectedPlan,
      // normalizedOptions,
      // isSelected,
      ...useSelect(context, initialValue, plans),
      // plans,
      drinks,
      categories,
      drinksByCategories,
    }
  },
  data () {
    return {
      acceptConditions: true,
      acceptAds: null,
      visible: true,
      visible2: false,
      state: false,
      newsletter: false,
      subscribe: false,
      consent: "accepted",
      drink: ["Tea", "Water"],
      drink2: "Water",
      drink3: ["tea"],
      drink4: null,
      result: [],
      food: [],
      // nationality: "B",
      // nationality2: null,
      first_name: "Sam",
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
      selecting: false,
    }
  },
  methods: {
    toggle () {
      this.visible = !this.visible
    },
    submit (values) {
      // console.log("submitted: ", values)
    },
    updateDrinks (value) {
      // console.log(value)
    },
    show () {
      console.log("clicked !")
    },
    selectEvent () {
      console.log("selected !")
    },
    update () {
      this.drinks.push({ label: "Whisky", value: "whisky" })
    },
  },
}
</script>

<style>

</style>
