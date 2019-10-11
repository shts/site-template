<template>
  <div>
    <nav-header
      :main-title="mainTitle"
      :sub-title="subTitle"
      :categories="categories"
    ></nav-header>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavHeader from '~/components/NavHeader.vue'

@Component({
  components: {
    NavHeader
  }
})
export default class extends Vue {
  mainTitle = 'みんクレ'
  subTitle = 'みんなのためのクレジットカード情報サイト'
  categories = [
    'トップ',
    'おすすめ',
    'キホン',
    'コラム',
  ]
}
</script>

<style>
</style>
