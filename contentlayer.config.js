import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";
import siteConfig from "./config/siteConfig";
import remarkGfm from "remark-gfm";

const sharedFields = {
  title: { type: "string" },
  layout: { type: "string", default: "docs" }
};

const computedFields = {
  url_path: {
    type: "string",
    resolve: (post) => post._raw.flattenedPath
  },
};

const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "!*(profiles|topics)/**/*.md*",
  contentType: "mdx",
  fields: {
    ...sharedFields,
  },
  computedFields,
}));

const NestedUrl = defineNestedType(() => ({
  name: "NestedUrl",
  fields: {
    url: { type: "string" },
    cached: { type: "string" },
    cached_new: { type: "string" },
  }
}))

const SocialChangeFields = defineNestedType(() => ({
  name: "SocialChange",
  fields: {
    inner: { type: "string" },
    cultural: { type: "string" },
    systems: { type: "string" }
  }
}))

const resolveArrays = ["topic", "activity", "people", "locations"].reduce((el, key) =>
  ({ ...el,[key]: {
    type: "json",
    resolve: (doc) => doc[key] == 0 ? [] : doc[key]
  }}), {}
)

const Profile = defineDocumentType(() => ({
  name: "Profile",
  filePathPattern: "profiles/**/*.md*",
  contentType: "mdx",
  fields: {
    ...sharedFields,
    layout: { type: "string", default: "profile" },
    id: { type: "string" },
    url: { type: "string" },
    tagline: { type: "string" },
    activity: { type: "json" },
    topic: { type: "json" },
    regions: { type: "string" },
    locations: { type: "json" },
    started: { type: "number" },
    ended: { type: "string" },
    active: { type: "string" },
    people: { type: "json" },
    notes_data_entry: { type: "string" },
    facebook: { type: "string" },
    twitter: { type: "string" },
    instagram: { type: "string" },
    linkedin: { type: "string" },
    youtube: { type: "string" },
    blog: { type: "string" },
    logo: { type: "nested", of: NestedUrl },
    image: { type: "nested", of: NestedUrl },
    curation_status: { type: "string" },
    social_change: { type: "nested", of: SocialChangeFields}
  },
  computedFields: {
    ...computedFields,
    ...resolveArrays
  }
}))

const Topic = defineDocumentType(() => ({
  name: "Topic",
  filePathPattern: "topics/**/*.md*",
  contentType: "mdx",
  fields: {
    ...sharedFields,
    id: { type: "string" },
    image: { type: "string" },
    emoji: { type: "json" },
    super_topic: { type: "string" },
  },
  computedFields
}))

const contentLayerExcludeDefaults = ['node_modules', '.git', '.yarn', '.cache', '.next', '.contentlayer', 'package.json', 'tsconfig.json']

export default makeSource({
  contentDirPath: siteConfig.content,
  contentDirExclude: contentLayerExcludeDefaults.concat(['.flowershow', '.obsidian']),
  documentTypes: [Page, Profile, Topic],
  mdx: {
    remarkPlugins: [ remarkGfm ],
    rehypePlugins: []
  }
});
