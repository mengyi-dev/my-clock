<template>
  <div class="flex items-center justify-center h-screen">
    <h1 class="text-3xl font-bold md:text-[268px] text-[90px]">
        <span class="bg-white/10 p-2 rounded-md" id='hours'>
          <span>{{hours}}</span>
        </span>
        <span class="bg-white/10 p-2 rounded-md ml-2" id='minutes'>{{minutes}}</span>
        <span class="md:text-[50px] text-[30px] bg-white/10 p-2 rounded-md ml-2" id='second'>{{seconds}}</span>
    </h1>
  </div>
</template>
<script>
  import { useHead } from '@vueuse/head';
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
    useHead({
      noscript: [
        {
          children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TSTT29SH"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`, body: true
        }
      ]
    })
  },
}
</script>
