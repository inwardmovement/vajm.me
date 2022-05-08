const fse = require('fs-extra')
const fs = require('fs')
const inquirer = require('inquirer')
const slugify = require('slugify')
const dayjs = require('dayjs')
const { exec } = require('child_process')

const recueil = "erosphere"
let id = 1

slugify.extend({'\'': '-'})

console.clear()
prompt()

function prompt() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "Title"
    },
    {
      type: 'list',
      name: 'feature',
      message: 'feature',
      choices: [
        'false',
        'true'
      ],
    }
  ])
  .then((answers) => {
    let newPoem = [
      slug = `${slugify(answers.title, {
        lower: true,
        locale: 'fr'
      })}`,
      newsSlug = '',
      filename = `./content/${recueil}/${slug}.md`,
      title = answers.title,
      newTitle = '',
      feature = answers.feature,
      date = dayjs().format(),
      frontmatter = `---
title: "${title}"
date: ${date}
feature: ${feature}
---

`
    ]
    checkName(...newPoem)
  })
}

function checkName(slug, newSlug, filename, title, newTitle, feature, date, frontmatter) {
  if (fs.existsSync(filename)) {
    id++
    let newPoem = [
      slug,
      newSlug = `${slugify(title, {
        lower: true,
        locale: 'fr'
      })}-${id}`,
      filename = `./content/${recueil}/${newSlug}.md`,
      title,
      newTitle = `${title} ${id}`,
      feature,
      date,
      frontmatter = `---
title: "${newTitle}"
date: ${date}
feature: ${feature}
---

`
    ]
    checkName(...newPoem)
  } else {
    let file = [
      filename,
      frontmatter
    ]
    createFile(...file)
  }
}

function createFile(filename, frontmatter) {
  fse.outputFile(filename, frontmatter)
  openFile(filename)
}

function openFile(filename) {
  exec('code -rg ' + filename + ':7')
}
