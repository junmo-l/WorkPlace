<template>
  <div>
    <div class="top-logo">
      <ul>
        <li>Juna'shoes</li>
        <!-- <li>logo</li> -->
      </ul>
    </div>
    <header>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">이준모님</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Logout</a>
              </li>
              <!-- <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li> -->
              <li class="nav-item">
                <a class="nav-link" href="#">Wishlist</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
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
.top-logo {
  /* padding: 10px; */
  /* background-color: antiquewhite; */
  text-align: left;
  font-size: 50px;
}

.top-logo>ul {
  /* list-style: none; */
  margin: 0px 0px 10px 20px;
  padding: 0px;
}

.top-logo>ul>li {
  background-image: url(../../assets/image/logo1.png);
  background-repeat: no-repeat;
  /* line-height: 40px; */
  /* 줄간격 */
  background-position: left center;
  background-size: contain;
  padding-left: 100px;
}

.d-flex {
  position: absolute;
  left: 100px;
}

#navbarSupportedContent {
  position: absolute;
  right: 10px;
}

.btn-outline-success{
  color : black;
  border-color: black;
}
.btn-outline-success:hover{
  color : white;
  background-color: black;
  border-color: black;
}
</style>
