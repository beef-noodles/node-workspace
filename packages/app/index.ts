import _ from 'lodash'
import { add } from '@node-workspace/shared-lib';

const someValues = _.filter([1,2,3,4,5],(value) => {
    return [3,4].includes(value)
})

const result = add(someValues[0], someValues[1]);
console.log('Result:', result);