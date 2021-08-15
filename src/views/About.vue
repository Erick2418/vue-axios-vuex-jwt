<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr class="light-blue darken-2">
           <th class="white--text">ID</th>
           <th class="white--text">firstname</th>
            <th class="white--text">fecha</th>
            <th class="white--text">correo</th>
            <th class="white--text">telefono</th>
            <th class="white--text text-center">sueldo</th>
            <th class="white--text text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.indexOf"
        >
          <th>{{item.id}}</th>
          <th>{{item.firstname}}</th>
          <th>{{item.fecha}}</th>
          <th>{{item.correo}}</th>
          <th>{{item.telefono}}</th>
          <th>{{item.sueldo}}</th>
           <td>
              <v-btn class="teal accent-4" dark @click="formEditar(item.id,item.fecha,item.correo,item.telefono,item.sueldo)">Editar</v-btn>
              <v-btn class="error" dark @click="borrar(item.id)">Borrar</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<script lang="ts">

  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import {State, Getter,Mutation,Action } from 'vuex-class'
  import {User} from './../types/types'

@Component
  export default class About extends Vue {

    @State users!: User[];
      // items=[]

    @Getter getUsers!: User[]
// addUsers
    @Mutation addUsers:any;

    @Action addUsersAsync:any;


    @Action deleteUsersAsync:any;




    async created() {
      await this.addUsersAsync(); //traigo a los usuarios de axios
      //  this.addUsers();//traigo los usaruios
      this.handleUsersItems(); // monto los items en la tabla
    }
        items:any=[]// lo agrego desde el mounted, con el metodo setusertable
        
      async borrar(id:string){
         await this.deleteUsersAsync(id);

           await this.addUsersAsync(); //traigo a los usuarios de axios
          this.handleUsersItems(); // monto los items en la tabla
       }
      formEditar(user:any){
        console.log(user);
      } 

    mounted(){
     
     
    }
      editItem (item:string) {
        // this.editedIndex = this.desserts.indexOf(item)
        // this.editedItem = Object.assign({}, item)
        // this.dialog = true
      }
    handleUsersItems(){
      this.items=this.getUsers;
    }


  }



</script>