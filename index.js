// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value});
}

function deleteFromDriverByKey(object, key){
  const newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(object, key){
  delete object[key];
  return object;
}
