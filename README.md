# ionic2-angular2-google-maps-example

Example of angula2-google-maps component usage in ionic2

It was very problematic for me to init angular2-google-maps component in Ionic2 application, because 
Ionic **build** task fails for angular2-google-maps module.

The issue is caused by Angular2 ahead of time compilation called **ngc**, which is used for Ionic2 production build
See this code https://github.com/driftyco/ionic-app-scripts/blob/master/src/build.ts#L51

The work around was to add --dev flag in **package.json** file for **build** task.
https://github.com/modularcoder/ionic2-angular2-google-maps-example/blob/master/package.json#L7


There's an issue open in angular2-google-maps component repo, which is still not closed
https://github.com/SebastianM/angular2-google-maps/issues/629#issuecomment-252029693
