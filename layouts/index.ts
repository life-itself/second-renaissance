import {
  SimpleLayout,
  DocsLayout,
  UnstyledLayout,
  BlogLayout,
} from "@portaljs/core";

import Profile from "./profile";
import CohereProfile from "./cohere";

export default {
  simple: SimpleLayout,
  docs: DocsLayout,
  unstyled: UnstyledLayout,
  blog: BlogLayout,
  profile: Profile,
  cohere: CohereProfile,
};
