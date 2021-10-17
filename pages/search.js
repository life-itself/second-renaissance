import React, { useState } from 'react'
import Fuse from 'fuse.js'
import ItemsJS from 'itemsjs'

import orgs from '../data/organization.json'
import topics from '../data/topic.json'
import activitys from '../data/activity.json'
import OrgList from '../components/OrgList.js'


const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery)
  }


  const facets = [
    {
      id: 'topic',
      name: 'Topic'
    },
    {
      id: 'activity',
      name: 'Activity'
    }
  ]

  const searchIndex = new Fuse(orgs, {
    includeScore: true,
    threshold: 0.4,
    keys: ['name'],
  })

  const searchResults = searchIndex.search(searchQuery)

  // configuration for itemsjs faceted search
  const aggregations = {}
  for(const f of facets) {
    aggregations[f.id] = {
      title: f.name,
      size: 20, // set to 20 to be bigger than max size of a facet atm
      conjunction: true  // not sure why
    }
  }
  const itemsjs = ItemsJS(orgs, {
    native_search_enabled: false,
    aggregations: aggregations,
  })

  const sortedSearchResults = searchResults.sort((resultA, resultB) => {
    return resultA.score - resultB.score;
  });
  // orgs from search result
  // search result is { item: org, refIndex: 1, score: ... }
  // return all orgs if empty search query
  var sortedOrgs = orgs
  if (searchQuery) {
    sortedOrgs = sortedSearchResults.map((result) => result.item)
  }

  const searchResults2 = itemsjs.search({
    per_page: 100,
    ids: sortedOrgs.map(v => v.id)
  })

  const facetResults = Object.entries(searchResults2.data.aggregations).map(item => {
    return item[1]
  })

  return (
    <>
      <section className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <input
          type="search"
          name="search"
          placeholder="Search ..."
          className="inline"
          value={searchQuery}
          onChange={(event) => handleSearch(event.target.value)}
        />

        <p className="inline ml-6">
          Profiles found: {sortedOrgs.length}
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-2 text-sm mt-4">
          <div className="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6">
            {facetResults.map(facet => (
            <fieldset>
              <legend className="block font-medium">{facet.title}</legend>
              <div className="pt-2 space-y-1">
                {facet.buckets.map((option, optionIdx) => (
                  <div key={option.id} className="flex items-center text-base sm:text-sm">
                    <input
                      id={`${facet.name}-${optionIdx}`}
                      name="${facet.name}[]"
                      defaultValue={option.key}
                      type="checkbox"
                      className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-yellow-600 focus:ring-yellow-500"
                      defaultChecked={option.checked}
                    />
                    <label htmlFor={`${facet.name}-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                      {option.key} ({option.doc_count})
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
            ))}
          </div>
        </div>

        <OrgList orgs={sortedOrgs} />
      </section>
    </>
  )
}

Search.propTypes = {}

export default Search
