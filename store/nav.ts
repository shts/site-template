import { ActionTree, ActionContext, MutationTree, GetterTree } from 'vuex'

export const name = 'nav'
export const namespaced = true

export interface NavState {
  current: number
}

export const state = (): NavState => ({
  current: 0
})

export const actions: ActionTree<NavState, {}> = {
  setNav(context: ActionContext<NavState, {}>, nav: number) {
    context.commit('SET_NAV', nav)
  }
}

export const mutations: MutationTree<NavState> = {
  SET_NAV(state: NavState, nav: number) {
    state.current = nav
  }
}
