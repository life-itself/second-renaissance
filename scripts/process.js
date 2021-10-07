import {getMicroLinkInfo} from './sheet.js'
import * as sheet from './sheet.js'

// retrieve
// data from google spreadsheet and cache in data/cache/orgs-spreadsheet.csv
//
// convert this to standard structure

// extras
// retrieve microlink
// merge microlink

(async() => {
  // await getMicroLinkInfo()
  await sheet.transform()
})();

