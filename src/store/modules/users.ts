import { UsersState,User } from './../../types/types';
import {GetterTree,MutationTree,ActionTree} from 'vuex';
import axios from 'axios';
import Swal from 'sweetalert2';

type UserGetter = GetterTree<UsersState, any>

const state: UsersState = {

    users: [],
    user:{
        firstname: '',
        fecha: '', 
        correo: '',
        telefono: '',
        sueldo: '', 
    }
}

const getters: UserGetter={

    getUsers: state=>state.users,
    getUser: state=>state.user,

}

const mutations: MutationTree<UsersState>={

    addUsers(state,newUser){
        state.users=newUser;
    },

    addUser(state,newUser){
        state.user=newUser;        
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

    },

    async getONEUsersAsync ({commit},id:string){
            
        let apiUsuarios;
        
        try {

            apiUsuarios = await axios.get('http://localhost:3000/api/user/'+id).then(({data}) => {
              
            
              commit('addUser',data.results);
            });


        } catch (error) {
            const apiUsuario = error.response;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: apiUsuario.data.msg + ", intente nuevamente",
 
            })
        }

    },


    async RegisterUser ({commit},data){

        let apiUsuarios;

        try {

            apiUsuarios = await axios.post('http://localhost:3000/api/user',
            data
            ).then((data) => {
                console.log(data);
                Swal.fire(
                    'Registro con exito',
                    '',
                    'success'
                  )
            }).catch( err=> {
                const apiUsuario = err.response;
           
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: apiUsuario.data.msg + ", intente nuevamente",
   
                })
            } );
        } catch (error) {
            const apiUsuario = error.response;
           
             Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: apiUsuario.data.msg + ", intente nuevamente",

             })
        }

    },
    
    async deleteUsersAsync ({commit},id:string){
            
        let apiUsuarios;
        
        try {

            apiUsuarios = await axios.delete('http://localhost:3000/api/user/'+id).then(({data}) => {
                Swal.fire(
                    'Elimnacion con exito',
                    '',
                    'success'
                )
            });


        } catch (error) {
            const apiUsuario = error.response;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: apiUsuario.data.msg + ", intente nuevamente",
 
            })
        }

    },

    async EditUser ({commit},data){

        const ids= data.id;
        delete data.id;


        console.log(data);


        let apiUsuarios;
        let datos={
            "firstname":data.firstname,
            "fecha": data.fecha,
            "correo": data.correo,
            "telefono":data.telefono,
            "sueldo": data.sueldo+""
        }
        try {

            apiUsuarios = await axios.put('http://localhost:3000/api/user/'+ids,
            datos
            

            ).then((data) => {
                console.log(data);
                Swal.fire(
                    'Registro con exito',
                    '',
                    'success'
                  )
            }).catch( err=> {
                const apiUsuario = err.response;
                    console.log(apiUsuario)
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: apiUsuario + ", intente nuevamente",
   
                })
            } );
        } catch (error) {
            const apiUsuario = error.response;
           
             Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: apiUsuario.data.msg + ", intente nuevamente",

             })
        }

    },



}


export const users = {
    state,
    getters,
    mutations,
    actions
  }
