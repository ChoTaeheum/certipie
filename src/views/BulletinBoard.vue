<template>
  <main class="container">
    <div class="d-flex justify-content-between mb-3">
      <div>
        <form class="d-flex align-items-center">
          <label class="me-2">합격 공부비법 검색</label>
          <input class="me-2" type="text" placeholder="자격증 검색" />
          <button class="btn btn-success">검색</button>
        </form>
      </div>

      <div class="buttons">
        <button class="btn btn-primary" @click="pushRegister()">등록</button>
      </div>
    </div>
    <table class="table m-0">
      <thead>
        <tr>
          <th>취득일</th>
          <th>자격증 유형</th>
          <th>자격증 이름</th>
          <th>내용</th>
          <th>스크랩</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in postList">
          <td>{{ item.acqDate }}</td>
          <td>{{ item.certiType }}</td>
          <td>{{ item.certiName }}</td>
          <td>{{ item.content }}</td>
          <td>8회</td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example m-0 p-0">
      <ul class="pagination">
        <li
          class="page-item"
          :class="page === currentPage ? 'active' : ''"
          v-for="page in totalPages"
          :key="page"
        >
          <a
            class="page-link"
            @click="getpostList(page)"
            style="cursor: pointer"
            >{{ page }}</a
          >
        </li>
      </ul>
    </nav>
  </main>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { computed } from "@vue/reactivity";

export default {
  setup() {
    const router = useRouter();
    const postList = ref("");
    const totalPost = ref(0);
    const postLimit = 10;
    const currentPage = ref(1);

    const totalPages = computed(() => {
      return Math.ceil(totalPost.value / postLimit);
    });

    // 게시글 가져오기 (즉시실행함수)
    const getpostList = (page = currentPage.value) => {
      currentPage.value = page;
      axios
        .get(
          `http://localhost:3000/certificate?_page=${currentPage.value}&_limit=${postLimit}`
        ) // npm json-server paginate 참고
        .then((res) => {
          totalPost.value = res.headers["x-total-count"]; // meta 정보는 headers에 저장, 총 게시글 개수 확인
          postList.value = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getpostList();

    const pushRegister = () => {
      router.push({ name: "register" });
    };

    return {
      postList,
      totalPages,
      currentPage,
      pushRegister,
      getpostList,
    };
  },
};
</script>

<style></style>
