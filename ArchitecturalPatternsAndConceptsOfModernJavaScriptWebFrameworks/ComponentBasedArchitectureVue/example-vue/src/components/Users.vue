<template>
    <div class="users">
        <ul>
            <li v-for="user in users">
                {{ user.firstName }}
                {{ user.lastName }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Users",
    data() {
        return {
            users: [ 
                { firstName: "firstName1", lastName: "lastName1" },
                { firstName: "firstName2", lastName: "lastName2" },
                { firstName: "firstName3", lastName: "lastName3" },
                { firstName: "firstName4", lastName: "lastName4" },
                { firstName: "firstName5", lastName: "lastName5" },
            ]
        }
    }
</script>