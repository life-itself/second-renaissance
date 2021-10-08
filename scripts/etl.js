import dotenv from 'dotenv/config'
import { google } from 'googleapis'
import {readFileSync} from 'fs'
import {writeFileSync} from 'fs'
import path from 'path'
import Papa from 'papaparse'
import  mql from '@microlink/mql'


const DATA_DIR = './data'
const DATA_PATHS = {
  organization_cache: 'data/cache/organization.json',
  activity_cache: 'data/cache/activity.json',
  topic_cache: 'data/cache/topic.json',
  organization: 'data/organization.json',
  activity: 'data/activity.json',
  topic: 'data/topic.json',
}

export async function transform() {
  const result = JSON.parse(readFileSync(DATA_PATHS.organization_cache))
  function transformOrg(org) {
    return org
  }
  const orgs = result.map(transformOrg)
  writeFileSync(DATA_PATHS.organization, JSON.stringify(orgs, null, 2))
}

/*
 * Retrieve data from google sheets database to local cache.
 *
 * Only transformation is to lower case headers (in getGoogleSheet)
 */
export async function retrieve() {
  for (const name of ['Organization', 'Activity', 'Topic']) {
    const data = await getGoogleSheet(name)
    const path = DATA_PATHS[name.toLowerCase() + '_cache']
    // NB: JSON.stringify strips keys with undefined values so we have to convert them to ""
    // https://stackoverflow.com/questions/26540706/preserving-undefined-that-json-stringify-otherwise-removes
    writeFileSync(path, JSON.stringify(data,
      (k, v) => v === undefined ? '' : v,
      2)
    )
  }
}

export async function getMicroLinkInfo() {
  const file = readFileSync('data/orgs-spreadsheet.csv', 'utf8')
  const orgSheet = await parseCsvFile(file)

  // console.log(result.data[0])

  var results = []

  for(const item of orgSheet.data) {
    const { status, data } = await mql(item.url,
      {
        screenshot: true,
        // fullPage: true
      }
    )
    data.slug = item.slug
    results.push(data)
    console.log(`Done: ${item.slug}`)
    writeFileSync('../data/orgs-microlink.json', JSON.stringify(results, null, 2))
  }
}

// =================
// Helpers

async function getGoogleSheet(sheetName) {
  const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
  const jwt = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    null,
    // we need to replace the escaped newline characters
    // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
    process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes
  );

  const sheets = google.sheets({ version: "v4", auth: jwt });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: sheetName,
  });

  const rows = response.data.values;

  if (rows.length) {
    // first row is headers
    const headers = rows.shift()

    return rows.map((row) => {
      var result = {}
      for(const index in headers) {
        result[headers[index].toLowerCase()] = row[index]
      }
      return result
    });
  } else {
    return [];
  }
}

const parseCsvFile = (rawFile) => new Promise((resolve, reject) => {
  Papa.parse(rawFile, {
    header: true,
    complete: result => {
      resolve(result);
    },
    error: function(error) {
      reject(error);
    }
  });
});

