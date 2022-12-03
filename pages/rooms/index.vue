<template>
    <div>
        <h1>Rooms</h1>
        <ul v-for="(rooms, index) in $store.state.rooms" :key="index">
            <li>
                <NuxtLink :to="`/rooms/${index}`">{{rooms}}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'Rooms',
}
</script>