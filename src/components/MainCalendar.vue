<template>
  <main class="container m-1">
    <div class="calendar-header">2022년 5월</div>
    <table class="table">
      <thead class="table-primary">
        <th v-for="day in days" :key="day">{{ day }}</th>
      </thead>
      <tbody class="table-bordered">
        <tr v-for="week in totalWeek" :key="week">
          <td v-for="date in totalDate" :key="date">
            <span>{{ date }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
  setup() {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const months = [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ];

    // 나중에 동적으로 적용
    const currentYear = 2022;
    const currentMonth = 3; // 4월, 1월은 0부터 시작
    const currentDate = 22; // 0은 마지막 날짜, 1은 1일

    const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // 요일
    const lastDay = new Date(currentYear, currentMonth, 0).getDay(); // 요일

    const totalDate = new Date(currentYear, currentMonth, 0).getDate();
    const totalWeek = Math.ceil((firstDay + totalDate) / 7);

    // const

    return {
      days,
      firstDay,
      totalDate,
      totalWeek,
    };
  },
};
</script>

<style scoped>
.calendar-header {
  font: 1.2em "Fira Sans";
  font-weight: bold;
  padding: 10px 0px;
  background-color: cadetblue;
}

td {
  line-height: 60px;
}
</style>
