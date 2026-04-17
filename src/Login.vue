<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '../src/components/base/BaseButton.vue'
import BaseInput from '../src/components/base/BaseButton.vue'
import { useRouter } from 'vue-router'
const username = ref('')
const password = ref('')
const router = useRouter()
function goToMain(){
  router.push('/restaurant')
  console.log("this is working!")
}
</script>
<template>
  <div class="login_screen">
  <h1 class="title" id="logintitle">Book A Bowl! </h1>
  <img src="/src/images/Logo.png">
  <div class="form">
    <BaseInput v-model="username" label="Username" placeholder="username" class="login_field" />
    <BaseInput v-model="password" label="Password" placeholder="password" type="password" class="login_field"/>
    <BaseButton class="login_button"  @click="goToMain" >Login</BaseButton>
    </div>
    <BaseButton class="login_button"  @click="goToMain" >Guest Mode</BaseButton>
  </div>
    <router-view />
</template>
