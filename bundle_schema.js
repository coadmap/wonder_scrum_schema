const path = require('path');
const fs = require('fs');
const { fileLoader, mergeTypes } = require('merge-graphql-schemas');

const typesArray = fileLoader('schema/**/*.{gql,graphql}', {
    recursive: true
});

const mergedSchema = mergeTypes(typesArray);

fs.writeFileSync('schema.graphql', mergedSchema, {encoding: 'utf8'});