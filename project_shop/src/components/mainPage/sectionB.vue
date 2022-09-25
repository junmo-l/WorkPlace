<template>
  <div>
    <section>
      <div id="main">
        <div>
        </div>
      </div>
      <div id="im">
        <p>
        <!-- <h5>Just Do It!</h5> -->
        </p>
      </div>
    </section>
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
section {
  /* position: relative; */
  line-height: 150px;
  height: 700px;
  width: 100%;
  background: black;
}

#main {
  position: relative;
  margin: 0 auto;
  height: 100%;
  width: 1000px;
}

#main > div {
  /* margin: 0 auto; */
  /* text-align: center; */
  height: 100%;
  width: 1000px;
  background-image: url(../../assets/image/mainlogo2.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

p {
  position: absolute;
  top: 50%;
  left: 50%;
  /* margin: -150px 0 0 -150px; */
  transform: translate(-50%, -50%);
  /* left: 50%; */
  height: 20vh;
  width: 20%;
  /* background-color: aquamarine; */
}

p>h5 {
  position: relative;
  top: 40%;
}
</style>
