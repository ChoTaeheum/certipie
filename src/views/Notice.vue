<template>
  <main style="border: 1px" class="container">
    <form class="row mb-3">
      <div class="col-6">
        <div class="input-group input-group">
          <input
            class="form-control"
            type="text"
            placeholder="자격증 정보 검색"
          />
        </div>
      </div>
      <div class="col-6">
        <div
          class="form-control"
          data-toggle="modal"
          @click="filterToggler()"
          style="cursor: pointer"
        >
          자격증 유형 선택
        </div>
      </div>
    </form>
    <div class="d-flex flex-row">
      <div>
        <DatePicker v-model="date" />
      </div>
      <div class="container bg-light">
        <MainCalendar />
      </div>
    </div>
  </main>
  <FilterModal
    @close-modal="closeModal"
    @save-modal="saveModal"
    v-if="filterToggle"
  />
</template>

<script>
import { ref } from "vue";
import { DatePicker } from "v-calendar";
import FilterModal from "@/components/FilterModal.vue";
import MainCalendar from "@/components/MainCalendar.vue";

export default {
  components: {
    DatePicker,
    FilterModal,
    MainCalendar,
  },
  setup() {
    const filterToggle = ref(false);
    const date = ref(null);

    const filterToggler = () => {
      filterToggle.value = !filterToggle.value;
      console.log("클릭 이벤트");
      console.log(filterToggle.value);
    };

    const closeModal = () => {
      filterToggle.value = false;
    };

    const saveModal = () => {
      // save 하는 로직...
      console.log("무엇인가를 save");
      closeModal();
    };

    return {
      filterToggler,
      filterToggle,
      closeModal,
      saveModal,
      date,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 100%;
}

#search-bar {
  width: 100%;
}
</style>
