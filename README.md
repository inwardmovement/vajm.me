## To develop locally
1. Clone the repository.
2. Setup [Hugo](https://gohugo.io/) (see version in [`.github/workflows/deploy-main.yml`](/.github/workflows/deploy-main.yml)).
3. Setup [Node.js](https://nodejs.org/) (see version in [`.github/workflows/deploy-main.yml`](/.github/workflows/deploy-main.yml)), for example via NVS :
    1. Setup [NVS](https://github.com/jasongin/nvs).
    2. Run `nvs auto` from the project's root directory, and then run it again everytime you open the project.
    3. (optional) If you don't want to run `nvs auto` everytime you open the project, run `nvs link`.
5. Run `npm run dev` from the project's root directory to start the development server.
