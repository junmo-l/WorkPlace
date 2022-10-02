<template>
  <div>
    <headerT />
    <!-- <sectionB /> -->
    <article>
    <div id="cardCon">
      <div class="card" style="width: 19rem; height: 25rem; ">
        <img src="../../assets/image/nike1.png" class="card-img-top" alt="" style="height: 11rem;">
        <div class="card-body">
          <h5 class="card-title">test title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </article>
  <footerB />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      exampleData: "",
    };
  },
  setup() { },
  created() { },
  mounted() { },
  unmounted() { },
  methods: {},
};
</script>

<style scoped>
article {
  height: 30vh;
  width: 100%;
  margin-bottom: 20px;
}

.card {
  float: left;
  margin: 50px 36px 15px 20px ;
  box-shadow: 1px 1px 7px gray;
}

.card:nth-child(1),
.card:nth-child(8){
  margin-left: 40px
}

.card > img {
  margin-top: 20px;
}

#page_nav {
  /* text-align: center; */
  float: right;
  clear: both;
  margin-right: 10px;
}
.page-link{
  color: black;
}
.btn-primary{
  background-color: black;
  border-color: black;
}
.btn-primary:hover{
  background-color: rgb(46, 44, 44);
  border-color: rgb(46, 44, 44);
}

div{

}
</style>
