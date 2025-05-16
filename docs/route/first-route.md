# First route

<div>
   <div v-for="(arr, key) in array">
     {{ arr  }}
   </div>
</div>

<script setup>
    const array = [];

    for (let i = 0; i < 1000; i++) {
        array.push(`oTHER TEXTS  ${i} --`); 
    }
</script>