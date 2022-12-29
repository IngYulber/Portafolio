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
        <button class="btn btn-outline-danger" @click="downloadCV()">
          <i class="icon-down-circled2"></i>Download My CV
        </button>
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
            <a class="social-link" target="_blank" href=""
              ><i class="ti-twitter" aria-hidden="true"></i
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
        <div class="row">
          <div class="col-1 text-danger pt-1">
            <i class="ti-archive icon-lg"></i>
          </div>
          <div class="col-10 ml-auto mr-3">
            <h6>Web Scraping</h6>
            <p class="subtitle">visit pages and collect information.</p>
            <hr />
          </div>
        </div>
        <div class="row">
          <div class="col-1 text-danger pt-1">
            <i class="ti-briefcase icon-lg"></i>
          </div>
          <div class="col-10 ml-auto mr-3">
            <h6>Web Development</h6>
            <p class="subtitle">make and development web apps.</p>
            <hr />
          </div>
        </div>
        <div class="row">
          <div class="col-1 text-danger pt-1">
            <i class="ti-hummer icon-lg"></i>
          </div>
          <div class="col-10 ml-auto mr-3">
            <h6>Dataset</h6>
            <p class="subtitle">fetch data and make dataset.</p>
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
  methods: {
    downloadCV() {
      window.open('../assets/document/cv.pdf', '_blank');
    },
  },
};
</script>

<style>
</style>