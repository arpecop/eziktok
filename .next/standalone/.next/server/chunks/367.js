"use strict";
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 6367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bl": () => (/* reexport */ external_aws_amplify_.API),
  "wT": () => (/* reexport */ external_aws_amplify_.graphqlOperation),
  "P$": () => (/* reexport */ mutations_namespaceObject),
  "o$": () => (/* reexport */ queries_namespaceObject)
});

// UNUSED EXPORTS: DataStore, St

// NAMESPACE OBJECT: ./src/graphql/mutations.ts
var mutations_namespaceObject = {};
__webpack_require__.r(mutations_namespaceObject);
__webpack_require__.d(mutations_namespaceObject, {
  "Vl": () => (createAd)
});

// NAMESPACE OBJECT: ./src/graphql/queries.ts
var queries_namespaceObject = {};
__webpack_require__.r(queries_namespaceObject);
__webpack_require__.d(queries_namespaceObject, {
  "KH": () => (adsBySortID),
  "_l": () => (getAd)
});

// EXTERNAL MODULE: external "aws-amplify"
var external_aws_amplify_ = __webpack_require__(5581);
;// CONCATENATED MODULE: ./src/graphql/mutations.ts
/* tslint:disable */ /* eslint-disable */ // this is an auto generated file. This will be overwritten
const createSort = /* GraphQL */ (/* unused pure expression or super */ null && (`
  mutation CreateSort(
    $input: CreateSortInput!
    $condition: ModelSortConditionInput
  ) {
    createSort(input: $input, condition: $condition) {
      id
      type
      uid
      title
      description
      images
      oneone {
        id
        cat
        condition
        currency
        data
        date
        description
        images
        parrent
        phone
        physical
        price
        query
        slug
        source
        title
        type
        uid
        sortID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      onemany {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      sortOneoneId
    }
  }
`));
const updateSort = /* GraphQL */ (/* unused pure expression or super */ null && (`
  mutation UpdateSort(
    $input: UpdateSortInput!
    $condition: ModelSortConditionInput
  ) {
    updateSort(input: $input, condition: $condition) {
      id
      type
      uid
      title
      description
      images
      oneone {
        id
        cat
        condition
        currency
        data
        date
        description
        images
        parrent
        phone
        physical
        price
        query
        slug
        source
        title
        type
        uid
        sortID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      onemany {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      sortOneoneId
    }
  }
`));
const deleteSort = /* GraphQL */ (/* unused pure expression or super */ null && (`
  mutation DeleteSort(
    $input: DeleteSortInput!
    $condition: ModelSortConditionInput
  ) {
    deleteSort(input: $input, condition: $condition) {
      id
      type
      uid
      title
      description
      images
      oneone {
        id
        cat
        condition
        currency
        data
        date
        description
        images
        parrent
        phone
        physical
        price
        query
        slug
        source
        title
        type
        uid
        sortID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      onemany {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      sortOneoneId
    }
  }
`));
const createAd = /* GraphQL */ `
  mutation CreateAd($input: CreateAdInput!, $condition: ModelAdConditionInput) {
    createAd(input: $input, condition: $condition) {
      id
      cat
      condition
      currency
      data
      date
      description
      images
      parrent
      phone
      physical
      price
      query
      slug
      source
      title
      type
      uid
      sortID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
const updateAd = /* GraphQL */ (/* unused pure expression or super */ null && (`
  mutation UpdateAd($input: UpdateAdInput!, $condition: ModelAdConditionInput) {
    updateAd(input: $input, condition: $condition) {
      id
      cat
      condition
      currency
      data
      date
      description
      images
      parrent
      phone
      physical
      price
      query
      slug
      source
      title
      type
      uid
      sortID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`));
const deleteAd = /* GraphQL */ (/* unused pure expression or super */ null && (`
  mutation DeleteAd($input: DeleteAdInput!, $condition: ModelAdConditionInput) {
    deleteAd(input: $input, condition: $condition) {
      id
      cat
      condition
      currency
      data
      date
      description
      images
      parrent
      phone
      physical
      price
      query
      slug
      source
      title
      type
      uid
      sortID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`));

;// CONCATENATED MODULE: ./src/graphql/queries.ts
/* tslint:disable */ /* eslint-disable */ // this is an auto generated file. This will be overwritten
const getSort = /* GraphQL */ (/* unused pure expression or super */ null && (`
  query GetSort($id: ID!) {
    getSort(id: $id) {
      id
      type
      uid
      title
      description
      images
      oneone {
        id
        cat
        condition
        currency
        data
        date
        description
        images
        parrent
        phone
        physical
        price
        query
        slug
        source
        title
        type
        uid
        sortID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      onemany {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      sortOneoneId
    }
  }
`));
const listSorts = /* GraphQL */ (/* unused pure expression or super */ null && (`
  query ListSorts(
    $filter: ModelSortFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSorts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        uid
        title
        description
        images
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sortOneoneId
      }
      nextToken
      startedAt
    }
  }
`));
const syncSorts = /* GraphQL */ (/* unused pure expression or super */ null && (`
  query SyncSorts(
    $filter: ModelSortFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSorts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        uid
        title
        description
        images
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sortOneoneId
      }
      nextToken
      startedAt
    }
  }
`));
const getAd = /* GraphQL */ `
  query GetAd($id: ID!) {
    getAd(id: $id) {
      id
      cat
      condition
      currency
      data
      date
      description
      images
      parrent
      phone
      physical
      price
      query
      slug
      source
      title
      type
      uid
      sortID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
const listAds = /* GraphQL */ (/* unused pure expression or super */ null && (`
  query ListAds($filter: ModelAdFilterInput, $limit: Int, $nextToken: String) {
    listAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cat
        condition
        currency
        data
        date
        description
        images
        parrent
        phone
        physical
        price
        query
        slug
        source
        title
        type
        uid
        sortID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`));
const syncAds = /* GraphQL */ (/* unused pure expression or super */ null && (`
  query SyncAds(
    $filter: ModelAdFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        cat
        condition
        currency
        data
        date
        description
        images
        parrent
        phone
        physical
        price
        query
        slug
        source
        title
        type
        uid
        sortID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`));
const adsBySortID = /* GraphQL */ `
  query AdsBySortID(
    $sortID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAdFilterInput
    $limit: Int
    $nextToken: String
  ) {
    adsBySortID(
      sortID: $sortID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cat
        condition
        currency
        data
        date
        description
        images
        parrent
        phone
        physical
        price
        query
        slug
        source
        title
        type
        uid
        sortID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;

;// CONCATENATED MODULE: ./components/db/index.ts



external_aws_amplify_.Amplify.configure({
    aws_project_region: "eu-west-1",
    aws_cognito_identity_pool_id: "eu-west-1:2f394adb-6fe3-42e6-9cfb-e552b456a0a8",
    aws_cognito_region: "eu-west-1",
    aws_user_files_s3_bucket: "eziktok-s3",
    aws_user_files_s3_bucket_region: "us-east-1"
});
external_aws_amplify_.API.configure({
    aws_appsync_graphqlEndpoint: "https://f64iubro75ad5lc77hqjepavdu.appsync-api.eu-west-1.amazonaws.com/graphql",
    aws_appsync_region: "eu-west-1",
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: "da2-cqo7gn4b4fcbfcl2miw67inaxy"
});
/* create a todo */ 


/***/ })

};
;