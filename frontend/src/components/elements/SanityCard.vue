<template>
    <router-link :to="`/blogs/sanity/${data.slug.current}`">
        <div class="box d-flex align-items-start my-2 shadow my-1" 
            :class="{ activeCard: index == currentIndex }" 
            @click="$emit('setActivePost', data, index)"
            role="button">
            <div>
                <div class="title">{{ data.title }}</div>
                <div class="description">
                    <p>{{ data.description }}</p>
                    <p class="mb-0">Published by {{ data.author.name }}</p>
                </div>
            </div>
        </div>         
    </router-link>
  
</template>

<script>
 export default {
    name: "SanityCard",
    props: {
        data: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        currentIndex: {
            type: Number,
            required: true
        }
    },
};   
</script>