import difference from '../../difference/src/index'

const remove = (array: any[], filter: FuncType) => {
  const filterItems = array.filter(filter)
  array.splice(0, array.length, ...difference(array, filterItems))
  return filterItems
}

export default remove
