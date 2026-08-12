/**
 * Product Hunt GraphQL API.
 *
 * The token is passed in rather than read from the environment here: whether a
 * missing `PRODUCTHUNT_TOKEN` is a skip or a failure is the feed's call, and
 * `cli/inspect` needs to report it as a skip (exit 2).
 */

import { fetchJson } from "../core/http.ts";

export interface PhProduct {
  id: string;
  name: string;
  tagline: string;
  url: string; // Product Hunt URL
  website: string; // external website
  votesCount: number;
  commentsCount: number;
  createdAt: string;
  topics: string[];
}

interface PhNode {
  id: string;
  name: string;
  tagline: string;
  url: string;
  website: string;
  votesCount: number;
  commentsCount: number;
  createdAt: string;
  topics?: { edges?: Array<{ node: { slug: string; name: string } }> };
}

interface PhResponse {
  data?: { posts?: { edges?: Array<{ node: PhNode }> } };
  errors?: Array<{ message: string }>;
}

const API_URL = "https://api.producthunt.com/v2/api/graphql";

/** The API's complexity limit caps a single page at roughly this many posts. */
const FETCH_COUNT = 20;

const POSTS_QUERY = `
  query GetPosts($first: Int!, $postedAfter: DateTime, $postedBefore: DateTime) {
    posts(first: $first, postedAfter: $postedAfter, postedBefore: $postedBefore, order: VOTES) {
      edges {
        node {
          id
          name
          tagline
          url
          website
          votesCount
          commentsCount
          createdAt
          topics {
            edges {
              node {
                slug
                name
              }
            }
          }
        }
      }
    }
  }
`;

/** A product plus the topic slugs the caller filters on. */
export interface PhProductWithSlugs extends PhProduct {
  topicSlugs: string[];
}

/**
 * Posts in the `[postedAfter, postedBefore]` window, ordered by votes.
 * Throws `HttpError` on transport failure and `Error` on a GraphQL error list.
 */
export async function fetchPosts(
  token: string,
  postedAfter: Date,
  postedBefore: Date,
): Promise<{ products: PhProductWithSlugs[]; totalReturned: number }> {
  const json = await fetchJson<PhResponse>(API_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    json: {
      query: POSTS_QUERY,
      variables: {
        first: FETCH_COUNT,
        postedAfter: postedAfter.toISOString(),
        postedBefore: postedBefore.toISOString(),
      },
    },
  });

  if (json.errors?.length) {
    throw new Error(`Product Hunt API errors: ${json.errors.map((e) => e.message).join("; ")}`);
  }

  const edges = json.data?.posts?.edges ?? [];
  const products = edges.map(({ node }) => ({
    id: node.id,
    name: node.name,
    tagline: node.tagline,
    url: node.url,
    website: node.website || node.url,
    votesCount: node.votesCount,
    commentsCount: node.commentsCount,
    createdAt: node.createdAt,
    topics: node.topics?.edges?.map((e) => e.node.name) ?? [],
    topicSlugs: node.topics?.edges?.map((e) => e.node.slug) ?? [],
  }));

  return { products, totalReturned: edges.length };
}
