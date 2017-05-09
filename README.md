# Angular-beforeEach-async-issue-demonstration
An issue related to calling async inside beforeEach in a fresh Angular4 installation 

In a fresh `Angular4.0.0` installed via `ng new` with an 1.0.0 `angular-cli`, inside a jasmine spec, a call to `async` function from `@angular/core/testing` inside the `beforeEach` hooks breaks subsequent `async` calls within specs.

Two files demonstrating this behaviour are provided as `src/app/async.working.spec.ts` and `src/app/async.issue.spec.ts`. The file `app.component.spec.ts` was deleted for better testing reports output. Rest of the project remains as `ng new` generates it.

Just `npm test` to test it out. 

