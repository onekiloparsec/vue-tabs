<template>
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabs',
    data () {
      return { tabs: [] }
    },
    created () {
      this.tabs = this.$children
    },
    methods: {
      selectTab (selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = (tab.name === selectedTab.name)
        })
      }
    }
  }
</script>

<style>
  .tabs {
    -webkit-overflow-scrolling: touch;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 1rem;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }

  .tabs:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .tabs a {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    color: #4a4a4a;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: -1px;
    padding: 0.5em 1em;
    vertical-align: top;
  }

  .tabs a:hover {
    border-bottom-color: #363636;
    color: #363636;
  }

  .tabs li {
    display: block;
  }

  .tabs li.is-active a {
    border-bottom-color: #00d1b2;
    color: #00d1b2;
  }

  .tabs ul {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .tabs ul.is-left {
    padding-right: 0.75em;
  }

  .tabs ul.is-center {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 0.75em;
    padding-right: 0.75em;
  }

  .tabs ul.is-right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding-left: 0.75em;
  }

  .tabs .icon:first-child {
    margin-right: 0.5em;
  }

  .tabs .icon:last-child {
    margin-left: 0.5em;
  }

  .tabs.is-centered ul {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .tabs.is-right ul {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }

  .tabs.is-boxed a {
    border: 1px solid transparent;
    border-radius: 3px 3px 0 0;
  }

  .tabs.is-boxed a:hover {
    background-color: whitesmoke;
    border-bottom-color: #dbdbdb;
  }

  .tabs.is-boxed li.is-active a {
    background-color: white;
    border-color: #dbdbdb;
    border-bottom-color: transparent !important;
  }

  .tabs.is-fullwidth li {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

  .tabs.is-toggle a {
    border: 1px solid #dbdbdb;
    margin-bottom: 0;
    position: relative;
  }

  .tabs.is-toggle a:hover {
    background-color: whitesmoke;
    border-color: #b5b5b5;
    z-index: 2;
  }

  .tabs.is-toggle li + li {
    margin-left: -1px;
  }

  .tabs.is-toggle li:first-child a {
    border-radius: 3px 0 0 3px;
  }

  .tabs.is-toggle li:last-child a {
    border-radius: 0 3px 3px 0;
  }

  .tabs.is-toggle li.is-active a {
    background-color: #00d1b2;
    border-color: #00d1b2;
    color: #fff;
    z-index: 1;
  }

  .tabs.is-toggle ul {
    border-bottom: none;
  }

  .tabs.is-small {
    font-size: 0.75rem;
  }

  .tabs.is-medium {
    font-size: 1.25rem;
  }

  .tabs.is-large {
    font-size: 1.5rem;
  }
</style>
