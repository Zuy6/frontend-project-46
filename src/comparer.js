import _ from 'lodash';

const comparer = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));

  const sortedKeys = _.sortBy(keys);
  return sortedKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (_.isObject(value1) && _.isObject(value2)) {
      return { key, type: 'nested', children: comparer(value1, value2) };
    }
    if (!_.has(obj1, key)) {
      return { key, type: 'added', value: value2 };
    }
    if (!_.has(obj2, key)) {
      return { key, type: 'removed', value: value1 };
    }
    if (!_.isEqual(value1, value2)) {
      return {
        key,
        type: 'changed',
        oldValue: value1,
        newValue: value2,
      };
    }
    return { key, type: 'unchanged', value: value1 };
  });
};

export default comparer;
