<template>
    <div class="pa-16" style="max-width:100vh;">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="firstname"
            :counter="10"
            :rules="firstnameRules"
            label="firstname"
            required
            ></v-text-field>

            <!-- <InputDate/> -->

            <v-text-field
            v-model="correo"
            :rules="correoRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="telefono"
            :counter="10"
            :rules="telefonoRules"
            label="Telefono"
            prefix="$"
            required
            ></v-text-field>

            <v-text-field
            v-model="sueldo"
            :counter="10"
            :rules="sueldoRules"
            label="Sueldo"
            prefix="$"
            type="number"
            required
            ></v-text-field>
           
                    

            <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Aceptar Terminos y Condiciones"
            required
            ></v-checkbox>

            <!-- <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >
            Validate
            </v-btn> -->
            
           
           
            <v-btn
            color="warning"
            @click="submit"
            >
            Registrar
            </v-btn>
           
        </v-form>
    </div>
  
</template>


<script lang="ts">
import Vue from 'vue'
export default {
    data: () => ({
      valid: false,
      firstname: '',
      firstnameRules: [
        (v:string) => !!v || 'Name is required',//esto es para que no sea undefine
        (v:string)  => (v && v.length <= 15) || 'Name must be less than 15 characters',
        (v:string) =>  /[A-Za-z ]+/.test(v) ||  'Not number'
        // [A-Za-z ]+
      ],
      correo: '',
      correoRules: [
        (v:string)  => !!v || 'E-mail is required',
       (v:string)  => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      sueldo: '',
      sueldoRules: [
        (v:string)  => !!v || 'Sueldo is required',
        (v:string)  => /[0-9]+/.test(v) || 'Sueldo must be valid',
      ],
      telefono: '',
      telefonoRules: [
        (v:string)  => !!v || 'Telefono is required',
        (v:string)  => /09+[0123456789]{1,9}/.test(v) || 'Telefono must be valid',
      ],
      select: null,
      checkbox: false,
    }),
    // mounted(){
    //   this.getUser();
    // },
    created(){
      //  this.postUserApi();
    },
    // computed:{
   
    //   ...mapState('usuario',['fecha_state']),
    // },
    methods: {
    //    ...mapActions('usuario',['setPersona']),
    //    ...mapMutations('usuario',['establecerFecha']),
    //   ...mapActions('usuario',['postUserApi']),
     
     
     
      submit () {
        //   const usuarioNew=(this.firstname,this.correo,this.fecha_state,this.sueldo,this.telefono);
        //   console.log( usuarioNew);
          // this.postUserApi();
      },
    },
     components: {
    //   InputDate,
    //   ...mapState('usuario',['personas']),
    },
    
}
</script>


