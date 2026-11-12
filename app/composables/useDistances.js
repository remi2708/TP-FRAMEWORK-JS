const distances = [
  { format: 'S (sprint)', natation: '750 m', velo: '20 km', course: '5 km' },
  { format: 'M (olympique)', natation: '1,5 km', velo: '40 km', course: '10 km' },
  { format: 'L (half)', natation: '1,9 km', velo: '90 km', course: '21 km' },
  { format: 'XL (Ironman)', natation: '3,8 km', velo: '180 km', course: '42 km' }
]

export function useDistances() {
  return distances
}
