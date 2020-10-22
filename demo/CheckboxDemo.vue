<template>
  <div class="container px-4 mx-auto">
    <TestCheckbox v-model="myVal" />
    <p>Value: {{ myVal }}</p>
    <TestCheckbox v-model="myVal2" :values="['unchecked', 'checked']" />
    <p>Value: {{ myVal2 }}</p>
    <TestRadio
      v-model="myVal2"
      name="radio-test"
      id="id-radio-test"
      :values="['unchecked', 'checked']"
    />
    <p>Value: {{ myVal2 }}</p>

    <!-- <input type="radio" value="checked" v-model="myVal2" /> -->
    <TestCheckboxGroup
      v-model="model"
      name="checkbox-group"
      :options="options2"
      label-attr-name="text"
    />

    <TestCheckboxGroup
      v-model="modelRadio"
      type="radio"
      name="radio-group"
      :options="options2"
      label-attr-name="text"
    />

    <TestCheckboxGroup
      v-model="group"
      name="checkbox-group-2"
      :options="options"
    >
      <template v-slot="{ name, option, value, update }">
        <input
          type="checkbox"
          :name="name"
          :id="`id-${option}`"
          :value="value"
          @change="update"
        />
        {{ option }}
      </template>
    </TestCheckboxGroup>

    <!-- <t-checkbox-group
      v-model="model"
      name="checkbox-group"
      :options="options"
    /> -->
  </div>
</template>

<script>
import TestCheckbox from './TestCheckbox.vue'
import TestCheckboxGroup from './TestCheckboxGroup.vue'
import TestRadio from './TestRadio.vue'

export default {
  components: {
    TestCheckbox,
    TestRadio,
    TestCheckboxGroup
  },
  data() {
    return {
      myVal: false,
      myVal2: 'unchecked',
      options: ['Opt1', 'Opt2', 'Opt3'],
      options2: [
        { value: 1, text: 'Option 1' },
        { value: 2, text: 'Option 2' },
        { value: 3, text: 'Option 3' }
      ],
      group: ['Opt1', 'Opt2'],
      model: [1],
      modelRadio: 3
    }
  },
  methods: {
    updateGroup(value) {
      debugger
      this.group = value
    }
  }
}
</script>
