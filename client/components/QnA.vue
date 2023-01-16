<template>
    <div>
      <div class="accordion">
        <div v-for="(faq, i) in faqs" :key="i">
          <div class="accordion-item">
            <div class="accordion-item-header" @click="toggleOpen(i)" :class="{ 'active': faq.open }">
              {{ faq.question }}
            </div>
            <div class="accordion-item-body" v-if="faq.open">
              <div class="accordion-item-body-content">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqs: [
          { id: 1, question: "What is Introgami?", answer: "Introgami is an origami platform.", open: false },
          { id: 2, question: "How do I create an account?", answer: "You can create an account by clicking the 'Sign Up' button on the homepage.", open: false },
          { id: 3, question: "Can I share my origami creations on Introgami?", answer: "Yes, you can share your origami creations on Introgami by creating a project and publishing it.", open: false }
        ]
      }
    },
    methods: {
      toggleOpen(index) {
        this.faqs = this.faqs.map((faq, i) => {
          if (index === i) {
            faq.open = !faq.open;
          } else {
            faq.open = false;
          }
          return faq;
        });
      }
    }
  }
  </script>
   

<style lang="css" scoped> 
@import "@/assets/styles/qna.css";
@import "@/assets/styles/global.css";

</style>
