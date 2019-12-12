<template>
  <div>
    <Header id="head"></Header>
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
    <div class="card text-center" v-if="filteredList.length == 0"> <br><br>No results found</div>
    <v-card v-else class="d-inline-block" v-for="(item, i) in filteredList" :key="i" cols="12">
      <v-container>
        <v-row justify="space-between">
          <v-col class="col-xs-6 col-sm-3">
            <v-img :src="item.src" style="width:300px;height:240px; border:2px solid grey;"></v-img>
          </v-col>
          <v-col class="col-xs-6 col-sm-3">
            <!-- <div class="vertical"></div> -->
            <v-card-title class="name">{{item.itemname}}</v-card-title>
              <v-rating v-model="rating"></v-rating>
            <hr style="width:200px;height:5px;color:dodgerblue ">
            <v-card-title class="headline">Status:{{item.status}}</v-card-title>
            <v-card-title class="headline">Location:{{item.location1}}</v-card-title>
          </v-col>
          <!-- <div class="vertical"></div> -->
          <v-col class="col-xs-6 col-sm-3">
            <v-card-title>Sitting Capacity:{{item.sitcap}}</v-card-title>
            <v-card-title>Color:{{item.color}}</v-card-title>
            <v-card-title>Brand:{{item.brand}}</v-card-title>
            <v-card-title>Type:{{item.type}}</v-card-title>
          </v-col>
          <!-- <div class="verticalone"></div> -->
          <v-col class="col-xs-6 col-sm-3">
            <v-card-title class="company">Company:{{item.company}}</v-card-title>
            <v-card-title class="price">Price:{{item.price}}</v-card-title>
            <!-- <v-btn class="primary v-on:click="reserved(item._id)">Reserved</v-btn> -->
            <v-btn class="primary" v-on:click="reserved()">Reserved</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card><br><br><br>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from "../components/Header.vue";
import AUTH from "..//services/auth";
import ROUTER from "../router";
  export default {
    auth:AUTH,
    components: {
      Header
    },
    props: {
      name: String,
      value: null,
      id: String,
      disabled: Boolean,
      required: Boolean
    },
    data: () => ({
      select: null,
      location: "",
      temp_value: null,
      ratings: [1, 2, 3, 4, 5],
      items: [{
          // _id: 1,
          status: "available",
          location1: "Mandaue,City",
          color: " Blue",
          src: "https://images.dealer.com/ddc/vehicles/2019/Hyundai/Santa%20Fe%20XL/SUV/trim_SE_f0031a/color/Becketts%20Black-RB5-8%2C8%2C8-640-en_US.jpg",
          itemname: "Hyundai XL HY01674",
          price: "P1000 per day",
          brand: " Hyundai ",
          company: " Budget car  Rental",
          sitcap: " 4 persons",
          type: "car"
        },
        {
          location1: "Oslob,Cebu",
          status: "available",
          color: " orange",
          src: "https://www.suzuki-zambia.com/media/gamme/modeles/graph/2524-photo-suzuki-alto-k10.png",
          itemname: "Zuzuki Alto",
          price: "P1500 per day",
          brand: " zuzuki",
          company: "Zuzuki Company",
          sitcap: " 4 persons",
          type: "car"
        },
        {
          location1: "Medellin Cebu",
          status: "available",
          color: " Black",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQs7kaoUewSBHa7T6rUyWHNdqUuKnCwvuAAexV7xdkPy4w4a2D&s",
          itemname: "Honda XRM 125 DS Fi",
          price: "P1000 per day",
          brand: " Honda",
          company: " Motorbike rental ",
          sitcap: " 2 persons",
          type: "motorcycle"
        },
        {
          location1: "Ceby city",
          status: "available",
          color: "Black and Red",
          src: "https://hondaph.com/wp-content/uploads/2019/09/XRM_MOTARD_RED.png",
          itemname: "Yamaha FZi",
          price: "P1500 per day",
          brand: " Yamaha",
          company: "Motorcycle rental ",
          sitcap: " 2 persons",
          type: "motorcycle"
        },
        {
          location1: "Mandaue,City",
          status: "available",
          color: "white",
          src: "http://perthsuretaxi.com/images/ser-img3.jpg",
          itemname: "Taxi Van",
          price: "P2000 per day",
          brand: " toyota",
          company: " Rent a Van Cebu",
          sitcap: " 8 persons",
          type: "van"
        },
        {
          location1: "Cebu City",
          status: "available",
          color: " gray",
          src: "http://toyota.com.ph/wp-content/uploads/2018/06/HH1303-F-01.png",
          itemname: "Foton Trans Van",
          price: "P1000 per day",
          brand: " nissan",
          company: "Mini Van Rental",
          sitcap: " 8 persons",
          type: "van"
        },
        {
          location1: "Mandaue,City",
          status: "available",
          color: " white",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVCmNE5VzQD8YWGKepaPZ6a0ioDKFVB2BDLuWGbZsQu43LR0c&s",
          itemname: "Nathalie Tours",
          price: "P3000 per day",
          brand: " nathalie ",
          company: "nathalie tours",
          sitcap: "34 persons",
          type: "bus"
        },
        {
          location1: "Oslob Cebu",
          status: "available",
          color: " white",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1_fR7ilTwIeH9KDiJDiznNEbT7XDA0v5E98o99689wFKWB5how&s",
          itemname: "Catalina Bus Tour",
          price: "P3500 per day",
          brand: " Catalina",
          company: "Catalina Bus Tours",
          sitcap: "45 persons",
          type: "bus"
        },
        {
          location1: "Medellin",
          status: "available",
          color: " white",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LkhXzxAXZj8qR4D6rM7QJYMeKtUPlQhzoriPu10GPv4mWOYg&s",
          itemname: "Filipino Banka",
          price: "P5000 per day",
          brand: " none",
          company: "Boat Design",
          sitcap: " 8 persons",
          type: "boat"
        },
        {
          location1: "Medellin",
          status: "available",
          color: " white",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxfeR566GQF0vDZJvqq_JZp0ZQAZ-XzCuSkCYVlI717nN-79S&s",
          itemname: "Adventure BAngka",
          price: "P4000 per day",
          brand: " none",
          company: "Rise Above",
          sitcap: " 8 persons",
          type: "boat"
        }
      ],
      transpo: ["car", "motorcycle", "van", "bus", "boat"],
      date: new Date(),
      dater: new Date()
    }),
    computed: {
      filteredList() {
        return this.items.filter(item => {
          if (this.$route.params.filter) {
            return item.type == this.$route.params.filter;
          } else {
            return item;
          }
        });
      },
      tranpo() {
        return this.$store.state.options.options;
      }
    },
    methods: {
      star_over: function(index) {
        var self = this;
        if (!this.disabled) {
          this.temp_value = this.value;
          return (this.value = index);
        }
      },
      star_out: function() {
        var self = this;
        if (!this.disabled) {
          return (this.value = this.temp_value);
        }
      },
      set: function(value) {
        var self = this;
        if (!this.disabled) {
          this.temp_value = value;
          return (this.value = value);
        }
      },
      search() {
        if (this.select !== this.$route.params.filter) {
          ROUTER.push(`/mainpage/${this.select}`);
        }
      },
      reserved() {
        if (!AUTH.getUser.user) {
          ROUTER.push("/login");
        } else {
          ROUTER.push("/reserved");
        }
      },
    mounted() {
      this.select = this.$route.params.filter ? this.$route.params.filter : "";
    },
    filters: {
      capitalize: function(value) {
        if (!value) return "";
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    }
    }
  };
</script>
<style scoped>
  .title {
    font-size: 40px;
    font-family: "Courier New", Courier, monospace;
  }
  .container {
    width: 100%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .name{
    font-style: bold;
    font-size:25px;
  }
  .v-card[data-v-109177d0][data-v-109177d0]:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 4px sp;
    width: 95%;
    margin-top: 50px;
    margin-left: 1%;
}
  .v-btn:not(.v-btn--round).v-size--default[data-v-109177d0][data-v-109177d0] {
    height: 56px;
    min-width: 194px;
    padding: 0 16px;
    margin-left: 75px;
    margin-top: 41px;
}
  .search-slt[data-v-109177d0][data-v-109177d0] {
    width: 90%;
    height: 70px;
    font-family: Raleway-SemiBold;
  }
  .theme--light.v-sheet {
    background-color: #ffffff;
    border-color: #1e90ff;
    height: 290px;
    color: rgba(0, 0, 0, 0.87);
  }
  
  .row-one[data-v-109177d0][data-v-109177d0][data-v-109177d0] {
    margin-right: -1%;
    margin-left: 16%;
    margin-top: 5%;
}
  .search-slt {
    width: 90%;
    height: 70px;
    font-family: Raleway-SemiBold;
  }
  .datepicker {
    font-size: 16px;
    font-family: Raleway-SemiBold;
  }
  .col-lg-3 {
    -ms-flex: 0 0 25%;
    -webkit-box-flex: 0;
    flex: 0 0 20%;
    width: 5%;
  }
  .theme--light.v-select .v-select__selections {
    color: rgba(0, 0, 0, 0.87);
    margin-top: -20px;
    font-size: 25px;
  }
  .wrn-btn {
    font-size: 35px;
    width: 200px;
    height: 70px;
    font-family: Raleway-SemiBold;
  }
  #head {
    background-color: whitesmoke;
  }
  h1,
  h2 {
    font-size: 15px;
  }
  .company,
  .price {
    margin-left: 75px;
  }
  .primary {
    margin-top: 50px;
  }
</style>
