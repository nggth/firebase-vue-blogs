<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/logodesign1.png"
                    alt="Logo"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item>
                <router-link to="/home">Home</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/blogs">Blogs</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/createblogs">Create Blogs</router-link>
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div>
                    <router-link to="/login">Login/Register</router-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
    font-size: 1.1rem;
}
</style>