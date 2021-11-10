import {readFileSync} from 'fs'
import { existsSync } from 'fs'


export async function getOrganizations() {
  const file = readFileSync('data/organization.json', 'utf8')
  const all = JSON.parse(file)
  // filter the ones we are not showing atm
  console.log(all[0].rd_1_focus.includes('Y'))
  const result = all.filter(item => !(item.rd_1_focus.includes('N')))
  return result
}
