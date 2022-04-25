<template>
  <main class="container m-1">
    <div class="calendar-header">
      <a href="#" @click="onClickPrevYear()">◀◀</a>
      <a class="ms-5" href="#" @click="onClickPrevMonth()">◀</a>
      <span class="ms-5 me-5">
        {{ currentYear }}년 {{ currentMonth + 1 }}월
      </span>
      <a class="me-5" href="#" @click="onClickNextMonth()">▶</a>
      <a href="#" @click="onClickNextYear()">▶▶</a>
    </div>

    <table class="table">
      <thead class="">
        <th v-for="day in days" :key="day">{{ day }}</th>
      </thead>
      <tbody class="">
        <tr v-for="weekDates in monthDates" :key="weekDates">
          <td v-for="date in weekDates" :key="date">
            <span v-if="date !== 0">{{ date }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const days = ["일", "월", "화", "수", "목", "금", "토"];

    const currentYear = ref(2022);
    const currentMonth = ref(3); // 4월, 1월은 0부터 시작
    const currentDate = 22; // 0은 마지막 날짜, 1은 1일
    const monthDates = ref([]);

    // 그 달의 처음 요일, computed로 바꿔야 할듯?
    const firstDay = new Date(
      currentYear.value,
      currentMonth.value,
      1
    ).getDay();

    // 그 달의 총 일수
    const totalDate = new Date(
      currentYear.value,
      currentMonth.value + 1,
      0
    ).getDate();

    const makeDates = () => {
      const array = [];
      let day = firstDay;
      let date = 1;
      while (date <= totalDate) {
        let weekDates = [];
        while (day <= 6 && date <= totalDate) {
          weekDates.push(date);
          date++;
          day++;
        }
        day = 0;
        array.push(weekDates);
      }
      return array;
    };

    const padDates = (monthDates) => {
      let firstWeek = monthDates[0];
      let lastWeek = monthDates[monthDates.length - 1];

      while (firstWeek.length !== 7) {
        firstWeek.unshift(0);
      }

      while (lastWeek.length !== 7) {
        lastWeek.push(0);
      }

      return monthDates;
    };

    const init = () => {
      monthDates.value = padDates(makeDates());
      console.log(monthDates.value);
    };

    init();

    const onClickPrevYear = () => {
      currentYear.value -= 1;
      init();
    };

    const onClickNextYear = () => {
      currentYear.value += 1;
      init();
    };

    const onClickPrevMonth = () => {
      if (currentMonth.value <= 0) {
        currentMonth.value = 11;
        currentYear.value -= 1;
      } else {
        currentMonth.value -= 1;
      }
      init();
    };

    const onClickNextMonth = () => {
      if (currentMonth.value >= 11) {
        currentMonth.value = 0;
        currentYear.value += 1;
      } else {
        currentMonth.value += 1;
      }
      init();
    };

    return {
      days,
      currentYear,
      currentMonth,
      monthDates,
      onClickPrevYear,
      onClickNextYear,
      onClickPrevMonth,
      onClickNextMonth,
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
