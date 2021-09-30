import Tabs from './Tabs.vue'
import Tab from './Tab.vue'

const VueTabsPlugin = {
  install (Vue) {
    Vue.component('tabs', Tabs)
    Vue.component('tab', Tab)
  }
}
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTabsPlugin)
  window.VueTabs = VueTabsPlugin
}

export default VueTabsPlugin

export {
  Tabs,
  Tab
}
