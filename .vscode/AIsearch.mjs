import { flattenDeep, flattenDepth, groupBy, mapValues } from 'lodash';

// Use the 'flattenDeep', 'flatten', and 'flattenDepth' methods from 'lodash' to flatten arrays of nested arrays
const deep = flattenDeep([1, 2, 3, [4, 5, [6, 7]]]);

const specific = flattenDepth([1, 2, 3, [4, 5, [6, 7]]], 2);

console.log(deep); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(shallow); // Output: [1, 2, 3, 4, 5, [6, 7]]
console.log(specific); // Output: [1, 2, 3, 4, 5, 6, 7]

//

// Define an array of nested arrays of objects
const nestedArray = [
  [
    { key: 'foo', value: 'bar' },
    { key: 'foo', value: 'baz' },
    { key: 'qux', value: 'quux' },
  ],
  [
    { key: 'foo', value: 'corge' },
    { key: 'foo', value: 'grault' },
    { key: 'qux', value: 'garply' },
  ],
  [
    { key: 'foo', value: 'waldo' },
    { key: 'foo', value: 'fred' },
    { key: 'qux', value: 'plugh' },
  ],
];

// Flatten the array of nested arrays using the 'flattenDeep' method from 'lodash'
const flattenedArray = flattenDeep(nestedArray);

// Group the objects in the flattened array by their keys using the 'groupBy' method from 'lodash'
const groupedObject = groupBy(flattenedArray, (item) => item.key);

// Transform the grouped object into a new object where the keys of the objects are the query parameters and the values are the corresponding values from the original objects using the 'mapValues' method from 'lodash'
const queryObject = mapValues(groupedObject, (items, key) =>
  items.map((item) => item.value),
);

console.log(queryObject); // Output: {foo: ['bar', 'baz', 'corge', 'grault', 'waldo', 'fred'], qux: ['quux', 'garply', 'plugh']}
