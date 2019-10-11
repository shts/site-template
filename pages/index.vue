<template>
  <div class="root">
    <div class="column-left">
      <p>これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。</p>
    </div>
    <div class="column-right">
      <card-list
        :card-list-title="cardListTitle"
        :cards="cards"
      ></card-list>
      <sub-list
        :list-title="cardListTitle"
        :list="cards"
      ></sub-list>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CardList from '~/components/CardList.vue'
import SubList from '~/components/SubList.vue'

@Component({
  components: {
    CardList,
    SubList
  }
})
export default class Index extends Vue {
  cardListTitle = '取扱カード一覧'
  cards = [
    'JCBカード',
    '三井住友VISAカード',
    '三菱UFJニコスカード',
    'オリコカード',
    'アメックス',
    'ダイナーズカード',
    '楽天カード',
    'セゾンカード',
    'エポスカード',
  ]
}
</script>

<style scoped>
  .root {
    margin: auto;
    display: flex;
    width: 90%;
    background-color: var(--main-background-color)
  }
  .column-left {
    flex-grow: 2;
  }
  .column-right {
    flex-grow: 8;
    padding: 16px;
  }
</style>
