import { UsersState,User } from './../../types/types';
import {GetterTree,MutationTree,ActionTree} from 'vuex';
import axios from 'axios';

type UserGetter = GetterTree<UsersState, any>

const state: UsersState = {

    users: []

}

const getters: UserGetter={

    getUsers: state=>state.users,


}

const mutations: MutationTree<UsersState>={

    addUsers(state,newUser){
        state.users=newUser;
    }

}

const actions: ActionTree<UsersState,any>={

    async addUsersAsync ({commit}){

        let apiUsuarios;
        
        try {

            apiUsuarios = await axios.get('http://localhost:3000/api/user',{
                // headers: {
                //   'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6IklzYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2MjkwNDczNzcsImV4cCI6MTYyOTA1NDU3N30.3Lkth_DB2qk28JDf3fSSLRgGTokssCKwP81hvTqPdk8'
                // }
            }).then(({data}) => {
                commit('addUsers',data.users);
            });


        } catch (error) {
            console.log(error);
        }

    }


}


export const users = {
    state,
    getters,
    mutations,
    actions
  }
