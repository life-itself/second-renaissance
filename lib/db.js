import {readFileSync} from 'fs'


export async function getOrganizations() {
  const file = readFileSync('data/orgs-sample.json', 'utf8')
  const result = JSON.parse(file)
  return result
}
