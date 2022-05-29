// prettier-ignore
export default {
  title: "vajm.me",
  description: "Poèmes",
  netlify: import.meta.env.NETLIFY,
  version: import.meta.env.NETLIFY && (import.meta.env.COMMIT_REF).substring(0, 7)
}
