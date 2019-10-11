<template>
  <div class="card-root">
    <p class="card-list-title">{{ cardListTitle }}</p>
    <ul class="card-list">
      <li
        v-for="card in cards"
        :key="card"
        class="card"
      >
        <div class="card-inner">
          <img style="" src="http://d2dcan0armyq93.cloudfront.net/photo/odai/600/3e550cbd66336b1d253ca9b4cdd1ef51_600.jpg" alt="">
          <div style="padding-left: 16px; vertical-align: center;">
            <a class="date" href="#" style="display: block">2019.09.01</a>
            <a class="description" href="#" style="display: block">{{ card }}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardList extends Vue {
  @Prop() cardListTitle: string | undefined
  @Prop() cards: string[] | undefined
}
</script>

<style scoped>
  .card-root {
  }
  .card-list-title {
    text-align: center;
    font-size: 1em;
    color: var(--main-text);
    font-weight: bold;
  }
  .card-list {
    padding: 0;
    list-style: none;
    color: var(--main-text);
  }
  .card {
    border: 1px solid var(--border);
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
    padding: 8px;
    margin: 16px;
  }
  .card-inner {
    display: flex;
  }
  .date {
    font-size: .8em;
    color: var(--sub-text);
    text-decoration: none;
  }
  .description {
    color: var(--main-text);
    text-decoration: none;
  }
  img {
    height: 5vw;
    width: 5vw;
    object-fit: cover;
  }
</style>
