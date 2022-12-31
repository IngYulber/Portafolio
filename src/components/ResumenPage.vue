<template>
  <section class="section" id="resume">
    <div class="container">
      <h2 class="mb-5"><span class="text-danger">My</span> Resume</h2>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <div class="card-header">
              <div class="mt-2">
                <h4>Experience</h4>
                <span class="line"></span>
              </div>
            </div>
            <div class="card-body">
              <div v-for="(item, index) in experiences" v-bind:key="index">
                <h6 class="title text-danger">{{ item.position }}</h6>
                <p>
                  <b>{{ item.place }} | {{ item.duration }}</b>
                </p>
                <ul>
                  <li v-for="funct in item.functions" v-bind:key="funct">
                    {{ funct }}
                  </li>
                </ul>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <div class="card-header">
              <div class="mt-2">
                <h4>Education</h4>
                <span class="line"></span>
              </div>
            </div>
            <div class="card-body">
              <h6 class="title text-danger">Data Science with Python</h6>
              <P><b>Simplilearn | January 2022</b></P>
              <P class="subtitle"
                >The Data Science with Python course taught me to master the
                concepts of Python programming. Through this Python for data
                science training, you will learn data analytics, machine
                learning, data visualization, and web scraping.</P
              >
              <hr />
              <h6 class="title text-danger">Systems Engineer</h6>
              <P><b>Universidad Cesar Vallejo | 2018 - Present</b></P>
              <P class="subtitle"
                >During this I have focused on software development, especially
                on the full stack side. I seek to be able to promote my career
                and participate in interesting projects that can bring added
                value to organizations.</P
              >
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-header">
              <div class="pull-left">
                <h4 class="mt-2">Skills</h4>
                <span class="line"></span>
              </div>
            </div>
            <div class="card-body pb-2">
              <h6>PHP &amp; Lavarel</h6>
              <div class="progress mb-3">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 90%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6>JS &amp; Vue.js</h6>
              <div class="progress mb-3">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 85%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6>HTML &amp; CSS &amp; Bootstrap</h6>
              <div class="progress mb-3">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 80%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6>SQL</h6>
              <div class="progress mb-3">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 90%"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6>Python &amp; Tensorflow</h6>
              <div class="progress mb-3">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 90%"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <div class="pull-left">
                <h4 class="mt-2">Languages</h4>
                <span class="line"></span>
              </div>
            </div>
            <div class="card-body pb-2">
              <h6>Spanish</h6>
              <div class="progress mb-3">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 100%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h6>English</h6>
              <div class="progress mb-3">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 50%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ResumenPage",
  data() {
    return {
      experiences: [
        {
          position: "Developer Full Stack",
          place: "E.T Santa Cruz de Huachipa",
          duration: "September 2022 - December 2022",
          functions: [
            "Develop and test new features",
            "Role and permission management",
            "Migration Development",
            "Develop functional tests",
          ],
        },
        {
          position: "Developer Full Stack",
          place: "Promolider ORG",
          duration: "March 2022 - August 2022",
          functions: [
            "Develop and test APIs",
            "Develop and test new features",
            "Integration of payment gateways",
            "Role and permission management",
            "Migration Development",
            "Develop functional tests",
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>