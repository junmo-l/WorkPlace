<template>
  <div>
    <p>Sing Up</p>
    <form>
        <div class="form-floating name">
        <input
          type="text"
          class="form-control"
          id="floatingInputGroup1"
          placeholder="Username"
        />
        <label for="floatingInputGroup1">First Name</label>
      </div>
      <div class="form-floating name">
        <input
          type="text"
          class="form-control"
          id="floatingInputGroup2"
          placeholder="Username"
        />
        <label for="floatingInputGroup1">Last Name</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password Check</label>
      </div>
          <button type="button" class="btn btn-primary btn-sm">sing up</button>
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
  width: 40rem;
}
form {
  margin: 0 auto;
  width: 35rem;
  margin-top: 2rem;
  position: relative;
}
label {
  font-size: 1rem;
  color: rgb(184, 183, 183);
}

/* #floatingInputGroup1, #floatingInputGroup2{
    width: 18rem;
    margin-bottom: 1rem;
    display: inline-block;
} */
.name{
    width: 18rem;
    margin-bottom: 1rem;
}
/* #floatingInputGroup1{
    float: left;
} */
 /* #floatingInputGroup2{
    float: right;
} */
.btn {
  margin-top: 2rem;
  margin-right: 0.3rem;
  width: 6rem;
}

</style>