const copyArray = target => [...target]
const pipe = (...fns) => target => fns.reduce((acc, cur) => cur(acc), target)
const map = fn => targets => targets.map(fn)
const sort = fn =>
  pipe(
    copyArray,
    targets => targets.sort(fn),
  )
const take = nums =>
  pipe(
    copyArray,
    targets => targets.splice(0, nums),
  )
const pluck = propKey => map(a => a[propKey])

const kClosest = (points, k) =>
  pipe(
    map(([x, y]) => ({
      distance: Math.pow(x, 2) + Math.pow(y, 2),
      cords: [x, y],
    })),
    sort((a, b) => a.distance - b.distance),
    take(k),
    pluck('cords'),
  )(points)

kClosest([[-2, 2], [3, 4]], 1) //? [ [-2,2] ]

kClosest([[1, 3], [-2, 2]], 1) //?
