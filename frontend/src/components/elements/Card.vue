<template>
    <router-link :to="data.url">
        <div class="box d-flex align-items-start my-2 shadow my-1">
            <!-- Image on the left -->
            <img :src="data.img" :alt="data.title">
            <!-- Text content: title and description -->
            <div>
                <div class="title">{{ data.title }}</div>
                <div class="description">
                    {{ data.description }}
                </div>
            </div>
        </div>   
    </router-link>
</template>

<script>
 export default {
    name: "Card",
    props: {
        data: {
            type: Object,
            required: true
        }
    },
};   

</script>