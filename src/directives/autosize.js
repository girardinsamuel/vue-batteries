import Vue from 'vue'
import autosize from 'autosize'

export default {
  bind: function() {
    var self = this
    Vue.nextTick(function() {
      autosize(self.$el)
    })
  },

  update: function(value) {
    var self = this
    Vue.nextTick(function() {
      self.$el.value = value
      autosize.update(self.$el)
    })
  },

  unbind: function() {
    autosize.destroy(this.$el)
  }
}
