# Seed NPM project for Sitecore Marketing Automation custom activity UI

### Description
This is a seed project for creating UI for Sitecore's Marketing Automation custom activity UI. It has things pre-configurerd, so you can focus on implementation rather than doing complicated setup.

## Dependencies
- Node v6.9.1
- NPM v3.10.10

## How to's

### Configure as per your Sitecore instance
- Open package.json and update the path to your sitecore instance. Replace `<SITECORE_INSTANCE>` with your instance name or change the complete path if required. There are 2 places in the file where you need to make this change. First is `publish` in  `scripts` section and another is path to `@sitecore/ma-core` package.
- Execute `npm install` in the root of your project.

### Build your custom activity plugin
- Once you are done with activity implementation, execute `npm run dev`. This will generate `codegen` folder. (This is only required when compiling plugin for first time, after that you can use `npm run build` or `npm run buildandpublish`)
- Add `ActivityDefinition` to the entry point file. In sample project the entry point file is `sample.plugin.ts`.
- Execute `npm run buildandpublish`. This will build your custom activity plugin and also publish it to your sitecore instance `/sitecore/shell/client/Applications/MarketingAutomation/plugins/` location (which you have configured in `package.json` publish script).

### package.json scripts
- `npm run dev`: This script only needs to be executed when compiling your plugin for the first time and you have added ActivityDefinitions in entry point file. After that, this step is take care by other scripts.
- `npm run webpack`: It creates a webpack bundle from the code which is compiled by `npm run dev` command using angular compiler. The bundle is create in `dist` folder in the root of your app.
- `npm run build`: This will execute `npm run dev` and `npm run webpack`.
- `npm run publish`: This will take the webpack bundle and deploy it to your Sitecore instance. The path has to be configured in `package.json`.
- `npm run buildandpublish` This will execute `npm run build` and `npm run publish`.

## Official Sitecore documentation

https://doc.sitecore.com/developers/90/sitecore-experience-platform/en/add-an-activity-type-to-the-marketing-automation-ui.html

## Author
Jaspal Singh
<pal.singh1989@gmail.com>