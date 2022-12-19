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
  background-color: #252433;
  color: white;
}

.danger {
    color: red;
}

.auto {
    margin: auto;
}

.bg-black{
    background-color: rgb(44, 40, 40);
}

.bg-dark-grey {
    background-color: rgb(68, 68, 68);
}

.bg-dark-blue {
    background-color: #37355e;
}

.bg-grey{
    background-color: rgb(174, 174, 174);
}

.bg-white {
    background-color: rgb(255, 255, 255);
}

.bg-blue {
    background: linear-gradient(103.9deg, rgb(12, 166, 180) 3%, rgb(86, 118, 216) 93.9%);
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

form p {
    width: 100%;
    margin: 0;
    color: red;
}

input {
    height: 40px;
    width: 100%;
    font-size: 19px;
    box-sizing: border-box;
    outline: none;
}

label {
    width: 100%;
    font-size: 20px;
}

select {
    outline: none;
    width: 100%;
    height: 40px;
}

button {
    font-size: 20px;
    display: flex;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    font-weight: bold;
}

a{
    text-decoration: none;
}

.btn-primary {
    background: linear-gradient(to right, #3dd0d8 0%, rgba(124, 105, 227, 0.64) 100%);
    transition: all 0.3s ease-out;
    color: white;
}

.btn-secondary {
    background: linear-gradient(to right, #32d001 0%, rgba(169, 231, 0, 0.64) 100%);
    color: white;
}

.btn-danger {
    background: rgb(255, 51, 0);
    color: white;
}

</style>