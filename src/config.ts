// prettier-ignore
export default {
  title: "vajm.me",
  description: "Poèmes",
  dev:            import.meta.env.DEV,
  staging:        import.meta.env.NETLIFY && (import.meta.env.CONTEXT == ("deploy-preview" || "branch-deploy")),
  prod:           import.meta.env.NETLIFY && (import.meta.env.CONTEXT == "production"),
  prodOrStaging:  import.meta.env.NETLIFY && (import.meta.env.CONTEXT == ("production" || "deploy-preview" || "branch-deploy")),
  version:        import.meta.env.NETLIFY && (import.meta.env.COMMIT_REF).substring(0, 7),
  context:        import.meta.env.NETLIFY && import.meta.env.CONTEXT
}
