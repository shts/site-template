<template>
  <div class="nav-root">
    <div class="title-box">
      <a href="/" class="main-title">{{ mainTitle }}</a>
      <p class="sub-title">{{ subTitle }}</p>
    </div>

    <nav>
      <ul>
        <li
          v-for="(category, index) in categories"
          :key="category"
          :class="getListItemClass(index)"
        >
          <a @click="setNewNav(index)">{{ category }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import * as nav from '~/store/nav'

const NavStore = namespace(nav.name)

@Component
export default class NavHeader extends Vue {
  @NavStore.State current: any
  @NavStore.Action setNav: any

  @Prop() mainTitle: string | undefined
  @Prop() subTitle: string | undefined
  @Prop() categories: string[] | undefined

  goTop() {
    this.$router.push('/')
  }

  getListItemClass(index: number) {
    if (index === Number(this.current)) {
      return 'current'
    } else {
      return ''
    }
  }

  setNewNav(index: number) {
    this.setNav(index)
  }
}
</script>

<style scoped>

  .nav-root {
    background-color: var(--main-background-color);
    margin: 0;
  }

  .title-box {
    padding: 1em;
    text-align: center;
  }

  .main-title {
    font-family: 'Nico Moji';
    font-weight: 500;
    margin: 0;
    font-size: 5em;
    text-decoration: none;
    color: var(--main-text);
  }

  .sub-title {
    margin: 0.3em 0 0;
    font-size: 1em;
  }

  nav {
    border-bottom: 1px solid #ccc;
  }

  nav ul {
    display: table;
    margin: 0 auto;
    padding: 0;
    width: 80%;
    text-align: center;
  }

  nav ul li {
    display: table-cell;
    min-width: 50px;
  }

  nav ul li:first-child {
    border-left: none;
  }

  nav ul li:last-child {
    border-right: none;
  }

  nav ul li a {
    display: block;
    width: 100%;
    padding: 10px 0;
    text-decoration: none;
    color: var(--main-text);
    border-bottom: 3px solid var(--main-background-color);;
  }

  nav ul li a:hover {
    display: block;
    border-bottom: 3px solid var(--color-primary);
  }

  nav ul li.current {
  }

  nav ul li.current a {
    border-bottom: 3px solid var(--color-primary);
  }

</style>
