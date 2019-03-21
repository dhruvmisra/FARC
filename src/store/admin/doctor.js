import axios from '../../axios-admin';

const state = {
    dId: -1,
    doctors: []
};

const getters = {
    dId(state) {
        return state.dId;
    },
    doctors(state) {
        return state.doctors;
    }
};

const mutations = {
    'SET_DID': (state, id) => {
        state.dId = id;
    },
    'INC_DID': (state) => {
        state.dId++;
    },
    'SET_DOCTORS': (state, docs) => {
        state.doctors = docs;
    }
};

const actions = {
    loadDId({commit}) {
        axios.get('globalState.json')
            .then(res => {
                commit('SET_DID', res.data.globalDId);
            })
            .catch(err => console.log(err));
    },
    saveDId({commit, state}) {
        axios.patch('globalState.json', {
                globalDId: state.dId
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    },
    incrementDId({commit}) {
        commit('INC_DID');
    },
    addDoctor({commit, dispatch, rootState}, data) {
        axios.post('doctors.json', data)
            .then(res => console.log(res))
            .then(() => {
                dispatch('incrementDId');
                dispatch('saveDId');
                rootState.success = true;
            })
            .catch(err => console.log(err));
    },
    loadDoctors({commit}) {
        const docs = [];
        axios.get('doctors.json')
            .then(res => {  
                console.log('action: ', res.data);
                for(let property in res.data) {
                    docs.push(res.data[property]);
                }
                commit('SET_DOCTORS', docs);
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