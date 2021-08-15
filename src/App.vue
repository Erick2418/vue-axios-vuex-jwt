<template>
  <v-app id="inspire">

    <v-navigation-drawer  v-model="drawer"
      app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
           :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-row  class="d-flex justify-end ">
        <v-btn
          color="error"
          elevation="2"
          
        >Logout</v-btn>
      </v-row>
    </v-app-bar>

    <v-main>
       <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
 export default {
    data: () => ({ 
      drawer: null,
       items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' ,to:'/' },
          { title: 'Photos', icon: 'mdi-image' ,to:'/login' },
          { title: 'About', icon: 'mdi-help-box',to:'/'  },
        ],
        right: null,
    }),
  
    
  }
</script>
