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
  color: rgb(17, 18, 27);
}

.bg-black{
    background-color: rgb(44, 40, 40);
}

.bg-dark-grey {
    background-color: rgb(68, 68, 68);
}

.bg-grey{
    background-color: rgb(174, 174, 174);
}

.bg-white {
    background-color: rgb(255, 255, 255);
}

.bg-blue {
    background-color: rgb(87, 169, 231);
}

.text-white {
    color: white;
}

.text-black {
    color: rgb(17, 18, 27);
}

.capitalize {
    text-transform: capitalize; 
}

.container {
    width: 100%;
    padding-right: 25px;
    padding-left: 25px;
    margin-right: auto;
    margin-left: auto;
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