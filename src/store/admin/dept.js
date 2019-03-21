import axios from '../../axios-admin';

const state = {
    deptId: -1,
    depts: []
};

const getters = {
    deptId(state) {
        return state.deptId;
    },
    depts(state) {
        return state.depts;
    }
};

const mutations = {
    'SET_DEPTID': (state, id) => {
        state.deptId = id;
    },
    'INC_DEPTID': (state) => {
        state.deptId++;
    },
    'SET_DEPTS': (state, deps) => {
        state.depts = deps;
    }
};

const actions = {
    loadDeptId({commit}) {
        axios.get('globalState.json')
        .then(res => {
            commit('SET_DEPTID', res.data.globalDeptId);
            })
            .catch(err => console.log(err));
    },
    saveDeptId({commit, state}) {
        axios.patch('globalState.json', {
                globalDeptId: state.deptId
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    },
    incrementDeptId({commit}) {
        commit('INC_DEPTID');
    },
    addDept({commit, dispatch, rootState}, data) {
        dispatch('loadDeptId');
        axios.post('departments.json', data)
            .then(res => console.log(res))
            .then(() => {
                dispatch('incrementDeptId');
                dispatch('saveDeptId');
                rootState.success = true;
            })
            .catch(err => console.log(err));
    },
    loadDepts({commit}) {
        const deps = [];
        axios.get('departments.json')
            .then(res => {  
                console.log('action: ', res.data);
                for(let property in res.data) {
                    deps.push(res.data[property]);
                }
                commit('SET_DEPTS', deps);
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