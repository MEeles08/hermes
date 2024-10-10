<template>
    <div class="box d-flex align-items-start my-2 shadow my-1" 
        :class="{ activeCard: index == currentIndex }" 
        @click="$emit('setActiveBlog', data, index)"
        role="button">
        <!-- Image on the left -->
        <img :src="data.imageUrl" :alt="data.title">
        <!-- Text content: title and description -->
        <div>
            <div class="title">{{ data.title }}</div>
            <div v-if="data.artisect" class="description">
                {{ data.artisect }}
            </div>
        </div>
    </div>   
</template>

<script>
 export default {
    name: "BlogCard",
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