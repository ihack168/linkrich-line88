const result = await client.fetch(
  `*[_type == "post"] | order(_createdAt desc) [0...3] {
    title,
    tags,
    categories
  }`,
  {},
  { cache: "no-store" }
)

console.log("TEST Sanity tags:", result)