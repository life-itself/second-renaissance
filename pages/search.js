import React, { useState } from 'react'
import Fuse from 'fuse.js'

import orgs from '../data/organization.json'
import topics from '../data/topic.json'
import activitys from '../data/activity.json'
import OrgList from '../components/OrgList.js'


const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const sortedSearchResults = searchResults.sort((resultA, resultB) => {
    return resultA.score - resultB.score;
  });
  // extra org from search result
  // which looks like { item: ..., refIndex: ..., score: ... }
  // also return all orgs if empty search query
  var sortedOrgs = orgs
  if (searchQuery) {
    sortedOrgs = sortedSearchResults.map((result) => result.item)
  }

  const searchIndex = new Fuse(orgs, {
    includeScore: true,
    threshold: 0.4,
    keys: ['name'],
  })

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery)
    const results = searchIndex.search(searchQuery)
    setSearchResults(results)
  }

  // TODO: compute facet counts for topics and activitys and show them
  const facets = {
  }

  return (
    <>
      <section className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <input
          type="search"
          name="search"
          className=""
          value={searchQuery}
          onChange={(event) => handleSearch(event.target.value)}
        />

        <p>
          Profiles found: {sortedOrgs.length}
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-2 text-sm">
          <div className="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6">
            <fieldset>
              <legend className="block font-medium">Topic</legend>
              <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                {topics.map((option, optionIdx) => (
                  <div key={option.slug} className="flex items-center text-base sm:text-sm">
                    <input
                      id={`price-${optionIdx}`}
                      name="price[]"
                      defaultValue={option.slug}
                      type="checkbox"
                      className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-yellow-600 focus:ring-yellow-500"
                      defaultChecked={option.checked}
                    />
                    <label htmlFor={`price-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                      {option.name}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="block font-medium">Activity</legend>
              <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                {activitys.map((option, optionIdx) => (
                  <div key={option.slug} className="flex items-center text-base sm:text-sm">
                    <input
                      id={`color-${optionIdx}`}
                      name="color[]"
                      defaultValue={option.slug}
                      type="checkbox"
                      className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-yellow-600 focus:ring-yellow-500"
                      defaultChecked={option.checked}
                    />
                    <label htmlFor={`color-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                      {option.name}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
        </div>

        <OrgList orgs={sortedOrgs} />
      </section>
    </>
  )
}

Search.propTypes = {}

export default Search
