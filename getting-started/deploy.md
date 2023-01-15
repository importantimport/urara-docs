# Deployment

## GitHub Pages

This project comes with a GitHub Actions script that automatically generates a deployment file that runs after you commit your changes and then commits to the gh-pages branch.

To use it, just set the GitHub Pages deployment branch to gh-pages.

> If the GitHub Actions script does not run automatically after you commit your changes, check to see if there is another branch in your repository, or you can run the script manually.

## Netlify

This project comes with [**Build Profile**](https://github.com/importantimport/urara/blob/main/netlify.toml) for Netlify, so when importing the project, there is no need to fill in the build settings.

To deploy this project on Netlify, you need to have a Netlify account and install the [**Netlify app**](https://github.com/apps/netlify/installations/new) in the desired repository to access the selected repository.

Next, just follow the [**Import an existing project**](https://app.netlify.com/start) page to complete the deployment process.
