<template>
  <div>
    <footer>
      <div id="footerCon">
        <div class="fRight">
          <p id="copy">@ Unititled.All rights reserved | Design : LJM, JAR</p>
        </div>
      </div>
    </footer>

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
footer {
  clear: both;
  width: 100%;
}

#copy {
  float: right;
  margin-right: 40px;
  margin-top: 30px;
  font-size: 1rem;
  color: rgb(153, 147, 147);
}

.fRight {
  width: 100%;
  margin: 20px 0 0 0;
  float: left;
  left: 50%;
  background: #F8F9FA;
}
</style>
