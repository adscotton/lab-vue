<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.clearAuth()
  router.push('/login')
}
</script>

<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <RouterLink to="/" class="navbar-brand">Vue Login Lab</RouterLink>

        <div>
          <!-- Navbar BEFORE login -->
          <template v-if="!auth.user">
            <RouterLink to="/" class="btn btn-outline-light btn-sm me-2">Home</RouterLink>
            <RouterLink to="/login" class="btn btn-outline-light btn-sm me-2">Login</RouterLink>
            <RouterLink to="/dashboard" class="btn btn-outline-light btn-sm">Dashboard</RouterLink>
          </template>

          <!-- Navbar AFTER login -->
          <template v-else>
            <RouterLink to="/" class="btn btn-outline-light btn-sm me-2">Home</RouterLink>
            <RouterLink to="/dashboard" class="btn btn-outline-light btn-sm me-2">Dashboard</RouterLink>
            <button @click="logout" class="btn btn-outline-light btn-sm me-2">Logout</button>
            <span class="text-light">Hello, {{ auth.user.username }}!</span>
          </template>
        </div>
      </div>
    </nav>

    <main class="container py-4">
      <RouterView />
    </main>
  </div>
</template>
