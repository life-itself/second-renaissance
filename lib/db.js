import {readFileSync} from 'fs'
import { existsSync } from 'fs'

import { markdownToHtml } from '../lib/markdownToHtml.js'


export async function getOrganizations() {
  const file = readFileSync('data/organization.json', 'utf8')
  const all = JSON.parse(file)
  // filter the ones we are not showing atm
  const result = all.filter(item => !(item.rd_1_focus.includes('N') || item.rd_1_focus.includes('?')))
  for (const item of result) {
    item.descriptionHtml = await markdownToHtml(item.description)
  }
  return result
}
