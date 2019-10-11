<template>
  <div class="sub-list-root">
    <p class="sub-list-title">{{ listTitle }}</p>
    <ul class="sub-list">
      <li
        v-for="l in list"
        :key="l"
        class="list-item"
      >
       {{ l }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SubList extends Vue {
  @Prop() listTitle: string | undefined
  @Prop() list: string[] | undefined
}
</script>

<style scoped>
  .sub-list-root {
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 16px;
  }
  .sub-list-title {
    font-weight: bold;
    text-align: center;
    font-size: 1em;
    color: var(--main-text);
  }
  .sub-list {
    padding: 0;
    list-style: none;
    color: var(--main-text);
  }
  .list-item {
    padding: 8px;
    margin: 8px;
  }
</style>
