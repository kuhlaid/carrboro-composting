# About this code

This repository was started in August of 2024 and uses [Docusaurus](https://docusaurus.io), a modern static website generator. The idea behind the repository is to provide a knowledgebase guide into understanding and working with the Carrboro Composting publicly available data.

## Why Docusaurus

The reason for Docusaurus is it is a CMS framework with integrations for things such as site search and the ability to easily prop up a test environment on [Vercel](https://vercel.com) or similar cloud virtual hosting solutions such as [StackBlitz](https://stackblitz.com/) without the need to create a coding environment locally (which can be pain for developers who simply wish to help with documentation and not have to worry about installing software dependencies which might not work with their computer setup).

Other benefits are:

- The Docusaurus framework automatically checks for broken links in your documents when you build the code (whether you are building locally or letting Vercel build for you). This is great for quality assurance.
- Looking good from the start, means a framework that has been designed by professional graphic artists for accessibility and out-of-the-box visual appeal. You can simply focus on content and not c creating a site from scratch.

## Using the code locally

See Docusaurus documentation for this. Try using StackBlitz as an alternative (which is free but slow to rebuild the site) or some other virtual service first, to save you the headache of installing dependencies on your computer. Although, if you run builds locally (yarn build) then you are able to find broken links or errors faster, so there are advantages to testing locally.

For me, I open a WSL command and paste the following command to ensure I am in the correct directory before I try to run Docusausus (this will vary for you):
`cd "/mnt/c/Users/pgale/LocalDev/carrrboro-composting"`

To clone the repository locally use:

`git clone --config core.autocrlf=false https://github.com/kuhlaid/carrrboro-composting`

Use `yarn install` to install the node modules defined in the package.json file.

Then use `yarn build` to check everything builds correctly and then `yarn run serve` to see how the new site looks and navigates.

**Technical Note: If you are testing Docusaurus locally and the command line that serves the Docusaurus site is closed unexpectedly, it is best to simply log out of the computer and log back so you can start the site using a new instance (since `port in use` issues will be difficult to resolve otherwise).**

## Update or add packages

Use Yarn via https://yarnpkg.com/getting-started/install. When adding something like a search module to the package.json script, run `yarn up` to update the packages or `yarn add` to add a package.

To run the build first run `yarn run build` then `yarn run serve` (this is ideal because it builds the site search locally).

## Using this code on Vercel

The easiest way to use this code (for your own project or to help contribute to this documentation) is to fork this repository in GitHub then log into Vercel.com and create a new project using your forked repo. You can use Vercel as a cloud testing environment, to help you avoid the need to setup NodeJs and NPM on your local computer (but you could do that as well). Vercel will build from your GitHub code repository and set up a test site. This allows you to simply make changes to your forked repository code in GitHub.com, and see the changes in Vercel as you make code updates. 

Note, several application settings are set as environment variables. The `.env.example` file contains place-holder values for the environment. You will need to add these variables to your Vercel project since you do not want sensitive environment API keys or passwords published/embedded in your repository code. After deploying the code to Vercel from GitHub, a link to your test site on Vercel will be included on your main repository page on GitHub.

## DocSearch scrapper (DOES NOT WORK even though everything looks like it configured correctly)

Review the documentation at https://docsearch.algolia.com/docs/legacy/run-your-own/ or https://docsearch.algolia.com/docs/legacy/config-file

- Log into Algolia and select or create the application we want to use (which in this case is Carrrboro Composting)
- Next we need to create the index for this application and give the index a name
- Next add an API needs the ACL addObject, editSettings and deleteIndex.

the `Search-Only API Key` and copy that to our environment file.
