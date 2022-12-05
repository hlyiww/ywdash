import remove from '../src/index'

it('happy path', () => {
  const array = [1, 2, 3, 4]
  const evens = remove(array, (n) => {
    return n % 2 === 0
  })

  expect(array).toEqual([1, 3])
  expect(evens).toEqual([2, 4])
})

it('test 2', () => {
  const arr = [
    {
      name: 'jack',
      age: 20,
    },
    {
      name: 'john',
      age: 16,
    },
  ]

  const jack = remove(arr, (n) => {
    return n.name === 'jack'
  })

  expect(arr).toEqual([{ name: 'john', age: 16 }])

  expect(jack).toEqual([
    {
      name: 'jack',
      age: 20,
    },
  ])
})
