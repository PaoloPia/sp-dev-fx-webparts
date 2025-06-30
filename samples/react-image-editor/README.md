<https://aka.ms/m365/devprogramhttps://aka.ms/m365/devprogramhttps://aka.ms/m365/devprogramhttps://aka.ms/m365/devprogram--->
page_type: sample
products:

- office-sp
languages:
- javascript
- typescript
extensions:
  contentType: samples
  technologies:
  - SharePoint Framework
  platforms:
  - React
  createdDate: 3/17/2021 12:00:00 AM

---

# React Image Editor

## Summary

This solution contains an SPFx web part that shows an HTML Image Editor based on canvas and [Fluent UI](https://developer.microsoft.com/fluentui/).

Key features of the Editor

- Resize
- Crop
- Flip
- Rotate
- Scale
- Filter (Grayscale / Sepia)
- Redo / Undo
- Histoy of Actions

The Placeholder and FilePicker are components from the [sp-dev-fx-controls-react](https://pnp.github.io/sp-dev-fx-controls-react/)

![react-image-editor screenshot](assets/screenshot.png)

![react-image-editor in action](assets/react-image-editor.gif)

## Compatibility

| :warning: Important          |
|:---------------------------|
| Every SPFx version is only compatible with specific version(s) of Node.js. In order to be able to build this sample, please ensure that the version of Node on your workstation matches one of the versions listed in this section. This sample will not work on a different version of Node.|
|Refer to <https://aka.ms/spfx-matrix> for more information on SPFx compatibility.   |

![SPFx 1.21.1](https://img.shields.io/badge/SPFx-1.21.1-green.svg)
![Node.js LTS 22](https://img.shields.io/badge/Node.js-LTS%2022-green.svg)
![Compatible with SharePoint Online](https://img.shields.io/badge/SharePoint%20Online-Compatible-green.svg)
![Does not work with SharePoint 2019](https://img.shields.io/badge/SharePoint%20Server%202019-Incompatible-red.svg "SharePoint Server 2019 requires SPFx 1.4.1 or lower")
![Does not work with SharePoint 2016 (Feature Pack 2)](https://img.shields.io/badge/SharePoint%20Server%202016%20(Feature%20Pack%202)-Incompatible-red.svg "SharePoint Server 2016 Feature Pack 2 requires SPFx 1.1")
![Local Workbench Incompatible](https://img.shields.io/badge/Local%20Workbench-Incompatible-red.svg "The solution requires access to the user's properties")
![Hosted Workbench Compatible (with API permissions)](https://img.shields.io/badge/Hosted%20Workbench-Compatible%20(with%20API%20permissions)-yellow.svg)
![Compatible with Remote Containers](https://img.shields.io/badge/Remote%20Containers-Compatible-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://learn.microsoft.com/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](https://aka.ms/m365/devprogram)

## Prerequisites

> SharePoint Online

## Contributors

- [Peter Paul Kirschner](https://github.com/petkir)
- [Ishai Sagi] (<http://github.com/ishaisagi-hns>)

## Version history

|Version|Date|Comments|
|-------|----|--------|
|2.0.1.0|Mai 5, 2025| SPFx 1.21.1|
|2.0.1.0|Apr 27, 2025|Node Version SPFx 1.21|
|2.0.0.0|Apr 02, 2025|Added properties and accessibility|
|1.1.0.0|Sep 09, 2024|Added properties and accessibility|
|1.0.0.0|Mar 17, 2021|Initial release|

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - `npm install`
  - edit `config\serve.json` set `"initialPage": "https://{tenant}.sharepoint.com/_layouts/15/workbench.aspx"`
  - `gulp serve`

> This sample can also be opened with [VS Code Remote Development](https://code.visualstudio.com/docs/remote/remote-overview). Visit <https://aka.ms/spfx-devcontainer> for further instructions.

## Usage

- PNP Placeholder control if not Configured
- PNP WebPartTitle control  (toggle Show/Hide in property pane)
- PNP FilePicker control to pick Images (is mocked on local workbench)
- Fluent UI Fabric
- PNPJS 4

## Video

[![Building an advanced SPFx Image Editor web part](./assets/video-thumbnail.jpg)](https://www.youtube.com/watch?v=aNvvFz8Ab5Y "Building an advanced SPFx Image Editor web part")

## Help

We do not support samples, but we this community is always willing to help, and we want to improve these samples. We use GitHub to track issues, which makes it easy for  community members to volunteer their time and help resolve issues.

If you're having issues building the solution, please run [spfx doctor](https://pnp.github.io/cli-microsoft365/cmd/spfx/spfx-doctor/) from within the solution folder to diagnose incompatibility issues with your environment.

You can try looking at [issues related to this sample](https://github.com/pnp/sp-dev-fx-webparts/issues?q=label%3A%22sample%3A%20react-image-editor") to see if anybody else is having the same issues.

You can also try looking at [discussions related to this sample](https://github.com/pnp/sp-dev-fx-webparts/discussions?discussions_q=react-image-editor) and see what the community is saying.

If you encounter any issues while using this sample, [create a new issue](https://github.com/pnp/sp-dev-fx-webparts/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected%2Csample%3A%20react-image-editor&template=bug-report.yml&sample=react-image-editor&authors=@petkir&title=react-image-editor%20-%20).

For questions regarding this sample, [create a new question](https://github.com/pnp/sp-dev-fx-webparts/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Aquestion%2Csample%3A%20react-image-editor&template=question.yml&sample=react-image-editor&authors=@petkir&title=react-image-editor%20-%20).

Finally, if you have an idea for improvement, [make a suggestion](https://github.com/pnp/sp-dev-fx-webparts/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Aenhancement%2Csample%3A%20react-image-editor&template=question.yml&sample=react-image-editor&authors=@petkir&title=react-image-editor%20-%20).

## References

- [Getting started with SharePoint Framework](https://learn.microsoft.com/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://learn.microsoft.com/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://learn.microsoft.com/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://learn.microsoft.com/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

<img src="https://m365-visitor-stats.azurewebsites.net/sp-dev-fx-webparts/samples/react-image-editor" />
