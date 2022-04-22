<template>
  <div class="container">
    <form>
      <div class="row mb-3">
        <label class="col-2 col-form-label" for="acqDate">취득일</label>
        <div class="col-10">
          <input
            class="form-control"
            type="date"
            id="acqDate"
            v-model="acqDate"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="cerType" class="col-2 col-form-label">자격증 유형</label>
        <div class="col-10">
          <input
            class="form-control"
            list="certiTypeList"
            id="certiType"
            placeholder="자격증 유형을 검색하세요"
            v-model="certiType"
          />
          <datalist id="certiTypeList">
            <option value="국가기술자격증"></option>
            <option value="민간기술자격증"></option>
            <option value="민간언어자격증"></option>
          </datalist>
        </div>
      </div>
      <div class="row mb-3">
        <label for="certiName" class="col-2 col-form-label">자격증 이름</label>
        <div class="col-10">
          <input
            class="form-control"
            list="certiNameList"
            id="certiName"
            placeholder="자격증 이름을 검색하세요"
            v-model="certiName"
          />
          <datalist id="certiNameList">
            <option value="TOEIC Reading & Listening"></option>
            <option value="TOEIC Speaking"></option>
            <option value="IELTS"></option>
          </datalist>
        </div>
      </div>
      <div class="row mb-3">
        <label for="content" class="col-2 col-form-label">내용</label>
        <div class="form-outline col-10">
          <textarea
            class="form-control"
            id="content"
            rows="20"
            v-model="content"
          ></textarea>
        </div>
      </div>
    </form>
    <div class="d-flex">
      <div class="ms-auto">
        <button class="btn btn-primary me-2" @click="submit">제출</button>
        <button class="btn btn-outline-secondary">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const acqDate = ref("");
    const certiType = ref("");
    const certiName = ref("");
    const content = ref("");

    const submit = () => {
      axios
        .post("http://localhost:3000/certificate", {
          acqDate: acqDate.value,
          certiType: certiType.value,
          certiName: certiName.value,
          content: content.value,
        })
        .then((res) => {
          console.log(res);
          router.push({ name: "bulletinBoard" });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      acqDate,
      certiType,
      certiName,
      content,
      submit,
    };
  },
};
</script>

<style></style>
