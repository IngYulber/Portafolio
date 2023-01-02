<template>
  <section class="section bg-dark text-center">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-6 col-lg-3">
          <div class="row">
            <div class="col-5 text-right text-light border-right py-3">
              <div class="m-auto"><i class="ti-alarm-clock icon-xl"></i></div>
            </div>
            <div class="col-7 text-left py-3">
              <h1 class="text-danger font-weight-bold font40">2021</h1>
              <p class="text-light mb-1">Start of activities</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="row">
            <div class="col-5 text-right text-light border-right py-3">
              <div class="m-auto"><i class="ti-layers-alt icon-xl"></i></div>
            </div>
            <div class="col-7 text-left py-3">
              <h1 class="text-danger font-weight-bold font40">50</h1>
              <p class="text-light mb-1">Project Finished</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="row">
            <div class="col-5 text-right text-light border-right py-3">
              <div class="m-auto"><i class="ti-github icon-xl"></i></div>
            </div>
            <div class="col-7 text-left py-3">
              <h1 class="text-danger font-weight-bold font40">
                {{ contributions }}
              </h1>
              <p class="text-light mb-1">Contributions </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="row">
            <div class="col-5 text-right text-light border-right py-3">
              <div class="m-auto"><i class="ti-bag icon-xl"></i></div>
            </div>
            <div class="col-7 text-left py-3">
              <h1 class="text-danger font-weight-bold font40">
                {{ numberRepos }}
              </h1>
              <p class="text-light mb-1">Repositories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { octokitMixin } from "../mixins/octokitMixin";
export default {
  name: "InfoPage",
  data() {
    return {
      octokit: this.createOctokitClient(process.env.VUE_APP_GITHUB_TOKEN),
      numberRepos: 0,
      contributions:{},
    };
  },
  mixins: [octokitMixin],
  methods: {

    getContributions: async function() {
    const headers = {
        'Authorization': `bearer ${process.env.VUE_APP_GITHUB_TOKEN}`,
    }
    const body = {
        "query": `query {
            user(login: "${process.env.VUE_APP_USERNAME_GITHUB}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }`
    }
    const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
    const data = await response.json()
    return data["data"]["user"]["contributionsCollection"]["contributionCalendar"]["totalContributions"]
}
  },

  async created() {
    const { data: repos } = await this.octokit.request("GET /user/repos", {});
    this.contributions = await this.getContributions();
    this.numberRepos = repos.length;
  },
};
</script>

<style>
</style>