<template>
  <div class="container-fluid">
    <div id="about" class="row about-section">
      <div class="col-lg-4 about-card">
        <h3 class="font-weight-light">Who am I ?</h3>
        <span class="line mb-5"></span>
        <h5 class="mb-3">A Developer Located In Our Lovely Earth</h5>
        <p class="mt-20">
          I consider myself a proactive, responsible and results-oriented
          professional. My work has provided me with deep knowledge on the
          development of robust systems oriented to the industrial market, from
          the conception of the initial architecture to its final
          implementation.
        </p>
        <a download="CV-INGA.pdf" href="/document/cv.pdf" class="btn btn-outline-danger">
          <i class="icon-down-circled2"></i>Download My CV
        </a>
      </div>
      <div class="col-lg-4 about-card">
        <h3 class="font-weight-light">Personal Info</h3>
        <span class="line mb-5"></span>
        <ul class="mt40 info list-unstyled">
          <li><span>Email</span> : johnyulberingalapa@gmail.com</li>
          <li><span>Phone</span> : + (51) 912719166</li>
          <li><span>LinkedIn</span> : John Inga</li>
          <li><span>Address</span> : Lurigancho - Chosica.</li>
          <li><span>Age</span> : 21 yo</li>
        </ul>
        <ul class="social-icons pt-3">
          <li class="social-item">
            <a
              class="social-link"
              target="_blank"
              href="https://www.facebook.com/0dejohn/"
              ><i class="ti-facebook" aria-hidden="true"></i
            ></a>
          </li>
          <li class="social-item">
            <a
              class="social-link"
              target="_blank"
              href="https://www.linkedin.com/in/john-yulber-inga-lapa/"
              ><i class="ti-linkedin" aria-hidden="true"></i
            ></a>
          </li>
          <li class="social-item">
            <a
              class="social-link"
              target="_blank"
              href="https://www.instagram.com/ing.yulbex/"
              ><i class="ti-instagram" aria-hidden="true"></i
            ></a>
          </li>
          <li class="social-item">
            <a
              class="social-link"
              target="_blank"
              href="https://github.com/yulbex"
              ><i class="ti-github" aria-hidden="true"></i
            ></a>
          </li>
        </ul>
      </div>
      <div class="col-lg-4 about-card">
        <h3 class="font-weight-light">My Hobbies</h3>
        <span class="line mb-5"></span>
        <div class="row" v-for="(item, index) in myHobbies" v-bind:key="index">
          <div class="col-1 text-danger pt-1">
            <i :class="item.icon" class="icon-lg"></i>
          </div>
          <div class="col-10 ml-auto mr-3">
            <h6>{{item.title}}</h6>
            <p class="subtitle">{{item.description}}</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data(){
    return {
      myHobbies:[
        {title:"Web Development", description:"make and development web apps.", icon:"ti-archive"},
        {title:"Dataset", description:"fetch data and make dataset.", icon:"ti-bookmark"},
        {title:"Web Scraping", description:"visit pages and collect information.", icon:"ti-search"},
      ]
    }
  },
  methods: {
    downloadCV() {
    },
  },
};
</script>

<style>
</style>