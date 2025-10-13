<template>
  <div>
    <h2 class="h4 mb-3">Dashboard</h2>
    <div class="alert alert-success">You are logged in.</div>

    <div v-if="auth.user" class="card mb-3">
      <div class="card-body">
        <h5 class="card-title mb-2">
          Welcome, {{ auth.user.name }}
        </h5>
        <p class="mb-0 text-muted">
          Username: {{ auth.user.username }} • Email: {{ auth.user.email }}
        </p>
      </div>
    </div>

    <!-- Logout button -->
    <button class="btn btn-danger" @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()

const logout = () => {
  auth.clearAuth() // We'll define this in the store (see below)
  router.push('/login')
}
</script>
