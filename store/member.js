import MemberService from '~/service/member'

export const state = () => ({
  sidebar: false,
  authUser: null
})

export const mutations = {
  toggleSidebar: function (state) {
    state.sidebar = !state.sidebar
  },
  LOGIN: function (state, user) {
    state.authUser = user
  },
  LOGOUT: function () {
    state.authUser = null
  },
  SET_USER: function (state, user) {
    state.authUser = user
  },
  SET_MENU: function (state, data) {
    state.topMenu = data.topMenu
    state.aside = data.aside
  }
}

export const actions = {
  // nuxtServerInit는 모든 페이지를 서버 렌더링하기 전에 Nuxt.js에 의해 호출
  async nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async signUp({ commit }, { userInfo }) {

    const data = await MemberService.signUp({
      userInfo
    })

    if (data.status != 200) {
      throw new Error(data.message)
    }
    //commit('LOGIN', data.id)
  },
  async signIn({ commit }, { email, password }) {

    const data = await MemberService.signIn({
      email, password
    })

    if (data.status != 200) {
      throw new Error(data.message)
    }
    commit('LOGIN', data)
  },
  async logout({ commit }) {
    await axios.post('/apis/logout').then(() => commit('LOGOUT'))
  }
}

export const getters = {

}