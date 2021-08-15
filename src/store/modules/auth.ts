
// import { UsersState,User } from './../../types/types';
import {GetterTree,MutationTree,ActionTree} from 'vuex';
import axios from 'axios';
import { AuthState, authLogin } from '../../types/types';
import Swal from 'sweetalert2';
import router from '@/router';

type UserGetter = GetterTree<AuthState, any>

const state: AuthState = {
    authUsu:{email:'Erik',password:'123'},
    loginUsuario:{id:'',email:''}

}

const getters: UserGetter={

    getAuthUsu: state=>state.authUsu,

    getLoginUsu: state=>state.loginUsuario,

}

const mutations: MutationTree<AuthState>={

    addAuthUsu(state,newUser){
        state.authUsu=newUser;          
    },
    addLoginUsu(state,newUser){
    
      state.loginUsuario=newUser;  
     
  
  },
  

}

const actions: ActionTree<AuthState,any>={

    async addAuthUserAsync ({commit,state}){
        let apiAuth;

        let post = {
          email: state.authUsu.email,
          password: state.authUsu.password
        };
        try {
          apiAuth = await axios.post('http://localhost:3000/api/auth',post)
          .then(({data}) => {
  
            localStorage.setItem('x-token',JSON.stringify(data.token));
            axios.defaults.headers.common['x-token'] = data.token;
            // let userLogin : authLogin={ id:data.id, email:data.user }
  
            commit('addLoginUsu',{ id:data.id, email:data.user });
            // commit('setchecking',true);
            router.push('/');
          });
  
        }catch (error) {
          apiAuth = error.response;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text :apiAuth.data.msg+ ",intente nuevamente",
  
          })
        }

    }


}


export const auth = {
    state,
    getters,
    mutations,
    actions
  }
