<template>
  <div id="root" class="container">

    <tabs>
      <tab name="Services" :selected="true">
        <h1>What we do</h1>
      </tab>
      <tab name="Pricing">
        <h1>How much we do it for</h1>
      </tab>
      <tab name="About Us">
        <h1>Why we do it</h1>
      </tab>
    </tabs>

  </div>
</template>

<script>
  import Tab from './components/Tab'
  import Tabs from './components/Tabs'

  export default {
    name: 'app',
    components: { Tab, Tabs },
    methods: {
      handleError (error) {
        this.error = error
      },
      handleTabChange (tabIndex, newTab, oldTab) {
        console.log(tabIndex, newTab.title, oldTab.title)
      },
      goToSecondTab () {
        this.tabName = 'name2'
      }
    }
  }
</script>

<style>
  body {
    margin-top: 20px;
    background-color: #ecf0f1;
  }

  .card-footer {
    padding: 0px 20px;
  }

  .card {
    border-radius: 6px;
    box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
    background-color: white;
    color: #252422;
    padding: 10px 0;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }

  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }

  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active for <2.1.8 */
  {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-complete-leave-active {
    position: absolute;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
  {
    opacity: 0
  }
</style>
