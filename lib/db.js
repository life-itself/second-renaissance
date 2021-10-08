import {readFileSync} from 'fs'
import { existsSync } from 'fs'


export async function getOrganizations() {
  const file = readFileSync('data/organization.json', 'utf8')
  const result = JSON.parse(file)
  return result
}
