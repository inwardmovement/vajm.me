import git from "git-repo-info"

// prettier-ignore
export default {
  title: "vajm.me",
  description: "Poèmes",
  version: git().abbreviatedSha.substring(0, 7)
    + " "
    + git().commitMessage
}
