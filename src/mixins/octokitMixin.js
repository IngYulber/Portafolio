import { Octokit } from "octokit";

export const octokitMixin = {
    methods: {
        createOctokitClient(token){
            return new Octokit({
                auth: token
            })
        }
    }
}