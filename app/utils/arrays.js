export const groupArray = (arr, groupOf) => {
  const groups = []
  let size = 0
  let group = []
  arr.forEach((item, index, items) => {
    if (size >= groupOf) {
      groups.push(group)
      group = []
      size = 0
    }
    group.push(item)
    size++
    if (index === items.length - 1) {
      groups.push(group)
    }
  })
  return groups
}

export const orderObjectBy = (array, field) =>
  Object.keys(array)
    .map(c => array[c])
    .sort((a, b) => {
      if(a[field] < b[field]) return -1
      if(a[field] > b[field]) return 1
      return 0
    })
