// prettier-ignore
export default {
  title: "vajm.me",
  description: "Poèmes",
  dev: import.meta.env.DEV,
  staging: import.meta.env.NETLIFY && (
    (import.meta.env.CONTEXT == "deploy-preview") ||
    (import.meta.env.CONTEXT == "branch-deploy")
  ),
  prod: import.meta.env.NETLIFY && (import.meta.env.CONTEXT == "production"),
  prodOrStaging: import.meta.env.NETLIFY && (
    (import.meta.env.CONTEXT == "production") ||
    (import.meta.env.CONTEXT == "deploy-preview") ||
    (import.meta.env.CONTEXT == "branch-deploy")
  ),
  version: import.meta.env.NETLIFY && (import.meta.env.COMMIT_REF).substring(0, 7),
  site: import.meta.env.SITE,
  DEPLOY_PRIME_URL: import.meta.env.DEPLOY_PRIME_URL
}
