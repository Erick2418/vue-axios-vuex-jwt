<template>
    <div>
     <v-card>
    <v-card-title>
      Usuarios Registrados
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
    ></v-data-table>
  </v-card>
   <div class="about">

    <!-- <h1>This is an about page {{getUsers}}</h1> -->
    <v-btn @click="handleClick"  color="primary">Onlink</v-btn>
  </div>
  </div>
 

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

    async created() {
      await this.addUsersAsync(); //traigo a los usuarios de axios
      //  this.addUsers();//traigo los usaruios
      this.handleUsersItems(); // monto los items en la tabla
    }
  

        search= ''
        usuario_modelo= [{ id: 1,name: 'Mishell', email: 'Mishell@gmail.com', sueldo: '1500' } ]
        headers= [
          // { text: 'id', align: 'start', sortable: false, value: 'id' },
          { text: 'firstname', align: 'start', sortable: false, value: 'firstname' },
          { text: 'fecha',align: 'start', sortable: false, value: 'fecha' },
          { text: 'correo',align: 'start', sortable: false, value: 'correo' },
          { text: 'telefono',align: 'start', sortable: false, value: 'telefono' },
          { text: 'sueldo',align: 'start', sortable: false, value: 'sueldo' },
        ]
        items:any=[]// lo agrego desde el mounted, con el metodo setusertable

    mounted(){
     
     
    }
    handleUsersItems(){
      this.items=this.getUsers;
    }
    handleClick(){
       
    }
  }



</script>