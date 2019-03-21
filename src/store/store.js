import Vue from 'vue'
import Vuex from 'vuex'

import Departments from './admin/dept'
import Doctors from './admin/doctor'
import Hospitals from './admin/hospital'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        success: false
    },
    getters: {
        success(state) {
            return state.success;
        }
    },
    mutations: {
        'SUCCESS_FALSE': (state) => {
            state.success = false;
        }
    },
    actions: {
        successFalse({commit}) {
            commit('SUCCESS_FALSE');
        }
    },
    modules: [
        Departments,
        Doctors,
        Hospitals
    ]
});
