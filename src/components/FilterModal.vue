<template>
  <div class="modal-wrapper">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">자격증 검색 정보 선택</h5>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="closeModal()"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="saveModal()">
            저장 및 적용
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close-modal", "save-modal"],

  setup(props, { emit }) {
    const closeModal = () => {
      emit("close-modal");
    };

    const saveModal = () => {
      emit("save-modal");
    };

    return {
      closeModal,
      saveModal,
    };
  },
};
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); */
}
</style>
