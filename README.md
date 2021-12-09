Mapping the ecosystem of sensemaking and culture-making.

## Content workflow

* Data for the app is stored locally in json files in `/data/` subdirectory.
* Data is managed
* Data is syncced via a script and then committed to git. See "Rebuilding the local database" below for how to do this.

```mermaid
graph TD


```

## Developers

This is a Next.JS based app.

* `git clone`
* `yarn install`
* `yarn dev`


### (Re)Building the local database

* Get an API key for access to google sheets and set up config in a local `.env` file as per https://andreaskeller.name/blog/nextjs-google-sheets-cms. You need to set the following variables:

  ```
  GOOGLE_SHEETS_CLIENT_EMAIL=
  GOOGLE_SHEETS_PRIVATE_KEY=
  SPREADSHEET_ID=
  ```
* Run `node scripts/cli.js`
* Files should have changed in `./data/` (assuming there is new data)
* [Optional] You can then commit this new data to push it live to the production site
