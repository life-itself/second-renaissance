import { allProfiles } from '../.contentlayer/generated/index.mjs';

export default async function getProfiles() {
	const result = await allProfiles.filter(profile => 
		!(profile.curation_status.includes('N') || profile.curation_status.includes('?'))
	)
	return result
}