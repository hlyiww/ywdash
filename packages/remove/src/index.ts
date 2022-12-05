import difference from '../../difference/src/index'

const remove = <T>(array: T[], filter: (n: T) => boolean) => {
  const filterItems = array.filter(filter as FuncType)
  array.splice(0, array.length, ...difference(array, filterItems))
  return filterItems
}

export default remove
