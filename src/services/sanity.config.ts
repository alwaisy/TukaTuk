import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "0b1y9ctv",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token: import.meta.env.VITE_SANITY_TOKEN, // or leave blank for unauthenticated usage
  // useCdn: import.meta.env.MODE === "production", // `false` if you want to ensure fresh data
});
