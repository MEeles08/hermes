const { createClient } = require('@sanity/client')

const Sanity = {};

Sanity.client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: '2023-10-01',
    useCdn: true
});

module.exports = { Sanity };