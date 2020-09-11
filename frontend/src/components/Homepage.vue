<template lang="html">
  <div class="homepage">
    <v-container>
      <v-row>
        <v-col>
          <v-select placeholder="hello"></v-select>
          <GroceryList/>
          <GroceryList/>
        </v-col>
        <v-col>
          <GroceryList/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import GroceryList from './GroceryList.vue';
export default {
  components: {
    GroceryList
  }
}
</script>

<style lang="css" scoped>
</style>
