import axios from '~/plugins/axios'

export const state = () => ({
  ids: [],
  items: []
})

export const mutations = {
  SETIDS(state, ids) {
    state.ids = ids
  },

  SETITEMS(state, items) {
    state.items = items
  }
}

export const actions = {
  async LOAD_ITEMS({ commit }, dataUrl) {
    const response = await axios.get(dataUrl)
    const ids = response.data
    const tenIds = ids.slice(0, 10)
    const itemPromises = tenIds.map(id => axios.get(`item/${id}.json`))
    const itemsResponses = await Promise.all(itemPromises)
    const items = itemsResponses.map(res => res.data)

    commit('SETITEMS', items)
    // commit('SETIDS', ids)
  }
}
