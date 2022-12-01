<template>
    <div>
        <Header />
        <Nuxt />
    </div>
</template>

<script>

import Header from "~/components/Header.vue";

export default {
    name: 'default',
    components: {
        Header
    }
}

</script>

<style>
body{
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

form{
    padding: 20px;
    background-color: rgb(87, 169, 231);
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: auto;
    gap: 15px;
    justify-content: center;
    align-items: center;
}

input {
    height: 40px;
    width: 100%;
    font-size: 19px;
}

button {
    font-size: 20px;
    display: flex;
    cursor: pointer;
}

</style>