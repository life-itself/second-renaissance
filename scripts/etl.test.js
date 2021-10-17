import * as etl from './etl.js'
import topic from '../data/topic.json'
import activity from '../data/activity.json'

test('we have rightish amount of data in production org', () => {
  const orgs = etl.getOrganizations()
  expect(orgs.length).toBeGreaterThan(100)
  expect(orgs[0]['name']).toBe('Life Itself')
})

test('we have rightish amount of data in production topic', () => {
  expect(topic.length).toEqual(11)
  expect(topic[2]['name']).toBe('Development & Growth')
})

test('we have rightish amount of data in activities', () => {
  expect(activity.length).toEqual(10)
  expect(activity[0]['name']).toBe('Advocacy & Activism')
})

test('transform org does what it should', () => {
  const out = etl.transformOrg(lifeItself)
  expect(out).toEqual(lifeItselfTidied);
});


const lifeItself = {
  "name": "Life Itself",
  "id": "life-itself",
  "rd_1_focus": "YY",
  "ch_focus": "",
  "focus_notes": "",
  "info_status": "COMPLETE",
  "url": "https://lifeitself.us",
  "logo": "https://lifeitself.us/wp-content/uploads/2020/12/life-itself-logo.svg",
  "logo_cached": "https://res.cloudinary.com/ds7qslkd0/image/upload/v1633363990/Ecosystem%20Mapping/life-itself-logo_syl7ai.svg",
  "image_curated": "",
  "image_homepage": "",
  "description": "We are pragmatic utopians, committed to practical action for a radically wiser, weller world. \n\nWe create coliving hubs, start businesses, do research and engage in activism to pioneer a wiser culture. We are ordinary people who choose an extra-ordinary path, treading the middle way between Plum Village and Silicon Valley.\n\nDespite our wealth and technologies, we are struggling at both a personal and collective levels. Personally, we are are not truly happy, satisfied and at peace; collectively we are failing to act powerfully on issues ranging from climate change to health. We believe the roots of both of these lie in our culture – which is grounded in materialism, technology and individualism – and thus a breakthrough requires a transformation in culture: the views, values, beliefs, practices that underlie our collective way of being.\n\nReal change requires us to work, and even live, together – hence creating co-living spaces and businesses; and to share ideas through writing and events, ultimately engaging in politics and social change.\n\nWe balance the spiritual and the rational. We like meditation as much as we like getting things done. We want meaningful work and a meaningful life. We value the environment and technology, art and science. We take action, both personal and political. We’re the middle way between the suit and the hippy, between the billionaire and the monk.\n\n\n",
  "tagline": "",
  "activity orig": "",
  "activity": "Spaces & infrastructure",
  "activity_2": "Research & Policy",
  "topic": "Development & Growth",
  "topic_2": "Community",
  "topic_3": "",
  "regions": "EU",
  "locations": "Bergerac, FR; Berlin, DE; London, GB",
  "started": "2015",
  "ended": "",
  "active": "Y",
  "people": "",
  "notes_data_entry": "",
  "twitter": "",
  "instagram": "",
  "facebook": ""
}

const lifeItselfTidied = {
  "name": "Life Itself",
  "id": "life-itself",
  "rd_1_focus": "YY",
  "ch_focus": "",
  "focus_notes": "",
  "info_status": "COMPLETE",
  "url": "https://lifeitself.us",
  "logo": {
    url: "https://lifeitself.us/wp-content/uploads/2020/12/life-itself-logo.svg",
    cached: "https://res.cloudinary.com/ds7qslkd0/image/upload/v1633363990/Ecosystem%20Mapping/life-itself-logo_syl7ai.svg"
  },
  "image": {
    url: "https://lifeitself.us/wp-content/uploads/2020/12/life-itself-logo.svg",
    cached: "https://res.cloudinary.com/ds7qslkd0/image/upload/v1633363990/Ecosystem%20Mapping/life-itself-logo_syl7ai.svg"
  },
  "image_homepage": {
    url: ""
  },
  "description": "We are pragmatic utopians, committed to practical action for a radically wiser, weller world. \n\nWe create coliving hubs, start businesses, do research and engage in activism to pioneer a wiser culture. We are ordinary people who choose an extra-ordinary path, treading the middle way between Plum Village and Silicon Valley.\n\nDespite our wealth and technologies, we are struggling at both a personal and collective levels. Personally, we are are not truly happy, satisfied and at peace; collectively we are failing to act powerfully on issues ranging from climate change to health. We believe the roots of both of these lie in our culture – which is grounded in materialism, technology and individualism – and thus a breakthrough requires a transformation in culture: the views, values, beliefs, practices that underlie our collective way of being.\n\nReal change requires us to work, and even live, together – hence creating co-living spaces and businesses; and to share ideas through writing and events, ultimately engaging in politics and social change.\n\nWe balance the spiritual and the rational. We like meditation as much as we like getting things done. We want meaningful work and a meaningful life. We value the environment and technology, art and science. We take action, both personal and political. We’re the middle way between the suit and the hippy, between the billionaire and the monk.\n\n\n",
  "tagline": "",
  "activity orig": "",
  "activity": ["Spaces & infrastructure", "Research & Policy"],
  "topic": ["Development & Growth", "Community" ],
  "regions": "EU",
  "locations": ["Bergerac, FR", "Berlin, DE", "London, GB"],
  "started": "2015",
  "ended": "",
  "active": "Y",
  "people": [],
  "notes_data_entry": "",
  "twitter": "",
  "instagram": "",
  "facebook": ""
}
