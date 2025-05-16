<div>
    <div v-for="(arr, key) in array">
      {{ arr  }}
    </div>
</div>

<script setup>
    import { ref, onMounted } from 'vue';

    const name = ref(null);

    const array = [];

   for (let i = 0; i < 10; i++) {
        array.push(`Position ${i} --`); 
    }

    onMounted(() => {
        name.value = "Hi brothers, i'm a onMOuted function";
    });

</script>