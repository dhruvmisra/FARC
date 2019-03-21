import axios from '../../axios-admin';

const state = {
    hId: -1,
    hospitals: []
};

const getters = {
    hId(state) {
        return state.hId;
    },
    hospitals(state) {
        return state.hospitals;
    }
};

const mutations = {
    'SET_HID': (state, id) => {
        state.hId = id;
    },
    'INC_HID': (state) => {
        state.hId++;
    },
    'SET_HOSPITALS': (state, hosps) => {
        state.hospitals = hosps;
    }
};

const actions = {
    loadHId({commit}) {
        axios.get('globalState.json')
            .then(res => {
                commit('SET_HID', res.data.globalHId);
            })
            .catch(err => console.log(err));
    },
    saveHId({commit, state}) {
        axios.patch('globalState.json', {
                globalHId: state.hId
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    },
    incrementHId({commit}) {
        commit('INC_HID');
    },
    addHospital({commit, dispatch, rootState}, data) {
        axios.post('hospitals.json', data)
            .then(res => console.log(res))
            .then(() => {
                dispatch('incrementHId');
                dispatch('saveHId');
                rootState.success = true;
            })
            .catch(err => console.log(err));
    },
    loadHospital({commit}) {
        const hosps = [];
        axios.get('hospitals.json')
            .then(res => {  
                console.log('action: ', res.data);
                for(let property in res.data) {
                    hosps.push(res.data[property]);
                }
                commit('SET_HOSPITALS', hosps);
            })
            .catch(err => console.log(err));
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};