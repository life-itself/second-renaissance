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

export function getOrganizations() {
  const orgs = JSON.parse(readFileSync(DATA_PATHS.organization), 'utf8')
  return orgs
}

export async function transform() {
  const result = JSON.parse(readFileSync(DATA_PATHS.organization_cache), 'utf8')
  let orgs = result.map(transformOrg)
  // orgs = orgs.filter(org => !['NN', 'N'].includes(org.rd_1_status))
  writeFileSync(DATA_PATHS.organization, JSON.stringify(orgs, null, 2))

  // for now just copy
  writeFileSync(DATA_PATHS.activity, readFileSync(DATA_PATHS.activity_cache, 'utf8'))
  writeFileSync(DATA_PATHS.topic, readFileSync(DATA_PATHS.topic_cache, 'utf8'))
}

export function transformOrg(org) {
  org.activity = [org.activity, org.activity_2].filter(item => item)
  org.topic = [org.topic, org.topic_2, org.topic_3].filter(item => item)
  org.logo = {
    url: org['logo.url'],
    cached: org['logo.cached']
  }
  org.image_homepage = {
    url: org.image_homepage
  }
  org.image = {
    url: org['image.url'],
    cached: org['image.cached']
  }
  org.locations = org.locations ? org.locations.split(';').map(loc => loc.trim()) : []
  org.people = org.people ? org.people.split(',').map(loc => loc.trim()) : []
  if (!org.image.url) {
    if (org.logo.url) {
      org.image = org.logo
    } else if (org.image_homepage.url) {
      org.image = org.image_homepage
    }
  }
  const toRemove = [
    'activity_2',
    'topic_2',
    'topic_3',
    'logo.url',
    'logo.cached',
    'image.url',
    'image.cached',
  ]
  toRemove.forEach(e => delete org[e]);
  return org
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
  const orgs = getOrganizations()

  var results = []
  for(const item of orgs) {
    const { status, data } = await mql(item.url,
      {
        screenshot: true,
        // fullPage: true
      }
    )
    data.id = item.id
    results.push(data)
    console.log(`Done: ${item.id}`)
    writeFileSync('./data/cache/orgs-microlink.json', JSON.stringify(results, null, 2))
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

