import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import AddDept from './components/admin/AddDept'
import AddDoctor from './components/admin/AddDoctor'
import AddHospital from './components/admin/AddHospital'
import ShowDept from './components/admin/ShowDept'
import ShowDoctor from './components/admin/ShowDoctor'
import ShowHospital from './components/admin/ShowHospital'

import Department from './components/Department'
import Doctor from './components/Doctor'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/admin/add/dept', component: AddDept },
    { path: '/admin/add/doctor', component: AddDoctor },
    { path: '/admin/add/hospital', component: AddHospital },
    { path: '/admin/show/dept', component: ShowDept },
    { path: '/admin/show/doctor', component: ShowDoctor },
    { path: '/admin/show/hospital', component: ShowHospital },
    { path: '/dept/:id', component: Department },
    { path: '/doctor/:id', component: Doctor },
];

export default new VueRouter({
    routes,
    mode: 'history'
});

