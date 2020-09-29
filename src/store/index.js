import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    opcionesjuego:'0',
    palabras:[],
    palabrasSeleccionadas:[]
  },
  mutations: {
    SET_PALABRAS(state,palabras){
      state.palabras=palabras
    },
    SET_PALABRASSELECCIONADAS(state,palabrasSeleccionadas){
      state.palabrasSeleccionadas=palabrasSeleccionadas
    },
    SET_OPCIONES(state,payload){
      state.opcionesjuego=payload.opcionesjuego
    },

  },
  actions: {
  },
  modules: {
  }
})
