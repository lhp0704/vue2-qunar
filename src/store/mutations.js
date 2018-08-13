import * as types from './mutation-types'

const mutations = {
  [types.SET_CURRENT_CITY](state, item) {
    state.currentCity = item;
    try {
      localStorage.currentCity = item;
    } catch (e) {}
  }
}

export default mutations
