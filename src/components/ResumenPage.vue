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
              <div v-for="(item, index) in education" v-bind:key="index">
                <h6 class="title text-danger">{{ item.title }}</h6>
                <p>
                  <b>{{ item.place }} | {{ item.duration }}</b>
                </p>
                <p class="subtitle">
                  {{ item.description }}
                </p>
                <hr />
              </div>
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
              <div v-for="(item, index) in skills" v-bind:key="index">
                <h6>
                  {{ item.name }} {{ item.years }}
                </h6>
                <div class="progress mb-3">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    :style="'width:' + item.porcentage"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
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
              <div v-for="(item, index) in languages" v-bind:key="index">
                <h6>{{ item.name }}</h6>
                <div class="progress mb-3">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    :style="'width:' + item.porcentage"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
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

      education: [
        {
          title: "Data Science with Python",
          place: "Simplilearn",
          duration: "January 2022",
          description:
            "The Data Science with Python course taught me to master the concepts of Python programming. Through this Python for data science training, you will learn data analytics, machine learning, data visualization, and web scraping.",
        },
        {
          title: "Systems Engineer",
          place: "Universidad Cesar Vallejo",
          duration: "2018 - 2022",
          description:
            "During this I have focused on software development, especially on the full stack side. I seek to be able to promote my career and participate in interesting projects that can bring added value to organizations.",
        },
      ],

      skills: [
        { name: "PHP & Lavarel", years: "(+1 year)", porcentage: "90%" },
        { name: "JS & Vue.js", years: "(+1 year)", porcentage: "85%" },
        {
          name: "HTML & CSS & Bootstrap",
          years: "(+1 year)",
          porcentage: "85%",
        },
        { name: "SQL", years: "(+1 year)", porcentage: "85%" },
        { name: "Python & Tensorflow", years: "(+1 year)", porcentage: "85%" },
      ],

      languages: [
        { name: "Spanish", porcentage: "90%" },
        { name: "English", porcentage: "40%" },
      ],
    };
  },
};
</script>

<style>
</style>