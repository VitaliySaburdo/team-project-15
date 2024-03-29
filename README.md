# Food Sta

## Table of contents

- [Technologies](#Technologies)
- [Team](#Team)
- [How to Install and Run the Project](#How-to-Install-and-Run-the-Project)
- [How to Use the Project](#How-to-Use-the-Project)

## Introduction

#### I present to your attention the team project it's website of the service for ordering restaurant dishes.

## Team

- :man:
  [**Team Lead Frontend & Developer:** Saburdo Vitaliy](https://github.com/VitaliySaburdo)
- :woman:
  [**Scrum master & Developer Frontend :** Nataliiy Chervonnykh](https://github.com/NataliiyChervonnykh)
- :man: [**Developer Frontend:** Evgeny Veliki](https://github.com/EvgenyVeliki)
- :woman: [**Developer Frontend:** Olga Shapran](https://github.com/OlgaShapran)
- :man: [**Developer Frontend:** NytrammartyN](https://github.com/NytrammartyN)

## Technologies

This project was created with Parcel. For dating and setting additional features
[refer to documentation](https://parceljs.org/).

The following libraries and technologies are used in the project:

- Parcel;
- Sass (mixins, placeholders);
- Adaptive layout;
- JS;
- AOS aniamtion library;
- Swiper slider;

## How to Install and Run the Project

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Install the basic project dependencies with the `npm install` command.
3. Start development mode by running the `npm start` command.
4. Go to [http://localhost:1234](http://localhost:1234) in your browser. This
   page will automatically reload after saving changes to project files.

## How to Use the Project

### Deploy

The production version of the project will be automatically linted, built and
deploy to GitHub Pages, in the `gh-pages` branch, every time it is updated
branch `main`. For example, after a direct push or an accepted pull request. For
this it is necessary to edit the `homepage` field in the `package.json` file,
replace `your_username` and `your_repo_name` with your own, and push the changes
to GitHub.

### Deployment status

The deployment status of the latest commit is displayed with an icon next to its
ID. ![Deploy status](./assets/status.png)

- **Yellow color** - the project is being built and deployed.
- **Green color** - deployment completed successfully.
- **Red color** - an error occurred during linting, build or deployment.

More detailed information about the status can be viewed by clicking on the
icon, and in drop-down window to follow the link `Details`.

## How it works

![How it works](./assets/how-it-works.png)

1. After each push to the `main` branch of the GitHub repository, a special
   script (GitHub Action) from `.github/workflows/deploy.yml` file.
2. All repository files are copied to the server where the project is
   initialized and passes linting and assembly before deployment.
3. If all steps were successful, the assembled production version of the project
   files goes to the `gh-pages` branch. Otherwise, in the execution log The
   script will indicate what the problem is.
