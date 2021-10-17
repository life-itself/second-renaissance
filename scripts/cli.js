import * as etl from './etl.js'


(async() => {
  await etl.retrieve()
  await etl.transform()

  // await etl.getMicroLinkInfo()
  // mergeMicroLink()
})();

