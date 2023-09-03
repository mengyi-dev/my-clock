<template>
  <div class="flex items-center justify-center h-screen">
    <h1 class="text-3xl font-bold md:text-[268px] text-[90px]">
        <span class="bg-white/10 p-2 rounded-md">
          <span>{{hours}}</span>
        </span>
        <span class="bg-white/10 p-2 rounded-md ml-2">{{minutes}}</span>
        <span class="md:text-[50px] text-[30px] bg-white/10 p-2 rounded-md ml-2">{{seconds}}</span>
    </h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hours: null,
      minutes: null,
      seconds: null,
      amPm: null 
    }
  },
  methods: {
    loadTime() {
      let date = new Date()
      this.hours = (date.getHours() < 12 ? '0' : '') + date.getHours()
      this.minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
      this.seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
      this.amPm = this.hours >= 12 ? 'PM' : 'AM';
    }
  },
  mounted() {
    setInterval(() => {
      this.loadTime()
    }, 1000)
  },
}
</script>
