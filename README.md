# The OpenSources REST API!
This REST API serves up data from [the OpenSources project](https://github.com/BigMcLargeHuge/opensources) so that developers can easily access this information from other applications.

See package.json for dependencies.

## API Use
API Call: `http://localhost:3000/sources?domains=["100percentfedup.com","365usanews.com"]`
*Note that there is no space after the comma in the array.

The request array can be any size.

Expected Result:
```
[ { _id: '5b996dd1030e4935f7ae0082',
    website: '100percentfedup.com',
    type: [ 'bias', '', '' ],
    sourceNotes: '' },
  { _id: '5b996dd1030e4935f7ae0083',
    website: '365usanews.com',
    type: [ 'bias', 'conspiracy', '' ],
    sourceNotes: '' } ]

```

If the domains query parameter is not set such as `http://localhost:3000/sources`, then it will return all of the data available. See the examples folder for examples on calling this API in JavaScript and PHP.