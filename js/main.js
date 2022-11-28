
const { createApp } = Vue;

createApp({
    data() {
      return {
        title : "Vue Hello!!",
        image : "https://picsum.photos/400/400",
      }
    }       
  }).mount('#app');