<template>
    <router-link v-if="isInternalLink(data.url)" :to="data.url" class="box d-flex align-items-start my-2 shadow my-1">
        <img :src="data.img" :alt="data.title">
        <div>
            <div class="title">{{ data.title }}</div>
            <div class="description">{{ data.description }}</div>
        </div>
    </router-link>
    <a v-else :href="data.url" target="_blank" rel="noopener noreferrer" class="box d-flex align-items-start my-2 shadow my-1">
        <img :src="data.img" :alt="data.title">
        <div>
            <div class="title">{{ data.title }}</div>
            <div class="description">{{ data.description }}</div>
        </div>
    </a>
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
    methods: {
        isInternalLink(url) {
            return url.startsWith('/');
        }
    }
};   

</script>