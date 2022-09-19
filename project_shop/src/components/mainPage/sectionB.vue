<template>
  <div>
    <section>
      <div id="im">
        <p>
        <h5>You have to fight to reach your dream</h5>
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
  position: relative;
  line-height: 150px;
  height: 50vh;
  width: 100%;
  /* background-color: #42b983; */
  background-image: url(../../assets/image/889213.jpg);
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
  background-color: aquamarine;
}

p>h5 {
  position: relative;
  top: 40%;
}
</style>
