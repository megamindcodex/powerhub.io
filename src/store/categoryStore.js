import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { endpoint } from "../constant/endpoint";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({
    categories: ref([]),
    loading: ref([]),
  }),
  getters: {
    categoryLength: (state) => state.categories.length,
  },
  actions: {
    async getCategories() {
      try {
        const res = await axios.get(`${endpoint}/api/deployedCategories`);

        if (res.status === 200) {
          this.categories = res.data;
          // console.log(res.data);
        }
      } catch (err) {
        // message.value = res.data;
        console.log("Error getting categories", err, err.message);
      }
    },
  },
});
