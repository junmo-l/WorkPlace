<template>
  <div>
    <p>LOGIN</p>
    <form>
      <div class="mb-3">
        <label for="InputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="InputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="InputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="InputPassword1" />
      </div>
      <div class="mb-3 form-check">
        Id/Password 찾기
      </div>
          <button type="button" class="btn btn-primary btn-sm">login</button>
          <button type="button" class="btn btn-secondary btn-sm">sign up</button>
    </form>
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
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped>
div {
  font-size: 10px;
}
p {
  margin: 0 auto;
  margin-top: 5rem;
  font-size: 2.4rem;
  border-bottom: 1px solid rgb(202, 202, 202);
  width: 30rem;
}
form {
  margin: 0 auto;
  width: 30rem;
  margin-top: 2rem;
  position: relative;
}
.mb-3 {
  font-size: 1rem;
}
.form-control {
  margin: 0 auto;
  width: 20rem;
}
.form-check {
  font-size: 0.4rem;
  width: 8rem;
  text-decoration: underline;
  position:absolute;
  right: 4rem;
}
.btn {
  margin-top: 2rem;
  margin-right: 0.3rem;
  width: 6rem;
}
</style>
