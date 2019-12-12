<template>
  <div>
    <Header id="header"></Header>
    <section class="search-sec">
      <div class="container">
        <form novalidate="novalidate">
      <div class="row-one">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-md-2 col-md-offset-1 ">
              <div class="form-control search-slt ">
                <v-select v-model="select" :items="transpo" :rules="[v => !!v || 'Item is required']" label="Options" select return-object required></v-select>
              </div>
            </div>
            <div class="col-md-2 ">
              <div class="form-control search-slt ">
                <v-text-field type="text" v-model="location" name="input-10-1" label="location" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-control search-slt">
                <v-text-field type="date" v-model="dater" :prepend-icon="'mdi-calendar'" name="input-10-1" label="date reserved" />
              </div>
            </div>
            <div class="col-md-2 ">
              <div class="form-control search-slt ">
                <v-text-field label="date returned" type="date" v-model="date" :prepend-icon="'mdi-calendar'" name="input-10-1" />
              </div>
            </div>
            <div class="col-md-2">
              <button type="button" class="btn btn-primary wrn-btn" @click="search()"><a>Search</a></button>
            </div>
          </div>
        </div>
      </div>
    </form>
      </div>
    </section>
  </div>
</template>
<style scoped>
  .search-slt {
    width: 90%;
    height: 70px;
    font-family: Raleway-SemiBold;
  }
  .wrn-btn {
    font-size: 30px;
    width: 200px;
    height: 70px;
    font-family: Raleway-SemiBold;
  }
  .datepicker {
    font-size: 20px;
    font-family: Raleway-SemiBold;
  }
  option {
    font-family: Raleway-SemiBold;
  }
  .v-text-field .v-input__prepend-inner, .v-text-field .v-input__append-inner {
    margin-top: 29px;
  }
  .row-one[data-v-109177d0][data-v-109177d0][data-v-109177d0][data-v-109177d0] {
    margin-right: -5%;
    margin-left: 5%;
    margin-top: 5%;
}
.row[data-v-753901df][data-v-753901df] {
    margin-right: -20%;
    margin-left: 7%;
}
  .col-lg-3 {
    -ms-flex: 0 0 25%;
    -webkit-box-flex: 0;
    flex: 0 0 20%;
    width: 5%;
  }
  .v-input input {
    height: 40px;
}
  .row[data-v-753901df] {
    margin-right: -15%;
    margin-left: -4%;
}

  .container {
    width: 100%;
    margin-top: 270px;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
  }
  .v-menu__content {
    position: absolute;
    display: inline-block;
    border-radius: 4px;
    max-width: 80%;
    overflow-y: auto;
    overflow-x: hidden;
    contain: content;
    will-change: transform;
  }
</style>
<script>
  import Header from "../components/Header.vue";
  export default {
    components: {
      Header
    },
    props: [],
    mounted() {
    },
    data() {
      return {
        valid: true,
        // locationRules: [v => !!v || "Location is required"],
        select: "",
        transpo: ["car", "motorcycle", "van", "bus", "boat"],
        date: "",
        dater: "",
        location: "",
      };
    },
    filters: {
      capitalize: function(value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    computed: {
      tranpo() {
        return this.$store.state.options.options;
      }
    },
    methods: {
      search() {
        this.$router.push(`/mainpage/${this.select}`);
      }
    }
  };
</script>