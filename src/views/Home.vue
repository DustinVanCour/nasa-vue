<template>
  <div class="home">
    <div class="row">
      <div class="col">
        <h1>Nasa Photo Fun!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
      </div>
      <div class="col-auto">
        <form @submit.prevent="searchPhotos">
          <div class="form-row">
            <div class="col-auto">
              <input class="form-control" type="date" placeholder="" v-model="query"></div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary">Search</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row">
      <div class="col" id="card-area">
        <div class="card" style="width: 50rem;">
          <img :src="image.url" class="card-img-top" alt="...">
          <div class="card-body">
            <h3 class="card-title"><strong>{{image.title}}</strong></h3>
            <p class="card-text">{{image.explanation}}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'home',
    data() {
      return {
        query: ""
      }
    },
    methods: {
      searchPhotos() {
        this.$store.dispatch("searchApi", this.query);
      }
    },
    components: {

    },
    computed: {
      image() {
        return this.$store.state.image
      }
    },
  }
</script>

<style>
  h1 {
    font-family: 'Baloo Da', cursive;
    text-align: center;
  }

  form {
    font-family: 'Baloo Da', cursive;
    margin-bottom: 1rem;
  }

  #card-area {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>