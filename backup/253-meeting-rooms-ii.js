/**
 * @param {number[][]} intervals
 * @return {number}
 */


var minMeetingRooms1 = function (intervals) {
  const sortedStarts = intervals.map(([s]) => s).sort((a, b) => a - b)
  const sortedEnds = intervals.map(([_, e]) => e).sort((a, b) => a - b)
  
  console.log(sortedStarts, sortedEnds)
  
  let rooms = 0
  let ended = 0
  for (const start of sortedStarts) {
  if (start < sortedEnds[ended]) {
    rooms++
  } else {
    ended++
  }
  }
  
  return rooms
};



// PQ
const minMeetingRooms = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0])
  
  
  if (intervals.length === 0) return 0

  const pq = new PriorityQueue(intervals[0])
  
  for (let i = 1; i < intervals.length; i++) {
  
  // If current meeting starts before min ends
  if (intervals[i][0] >= pq.peek()[1]) {
    pq.poll()
  }
  
  pq.add(intervals[i])
  }
  
  return pq.size()
}


class PriorityQueue {
  constructor(meeting) {
  this.meetings = [meeting]
  }
  
  add(meeting) {
  let added = false

  for (let i = 0; i < this.meetings.length; i++) {
    if (this.meetings[i][1] > meeting[1]) {
    this.meetings.splice(i, 0, meeting)
    added = true
    break
    }
  }
  
  if (!added) this.meetings.push(meeting)
  }
  
  poll() {
  return this.meetings.length > 0 ? this.meetings.shift() : 'Empty queue'
  }
  
  peek() {
  return this.meetings.length > 0 ? this.meetings[0] : 'Empty queue'
  }
  
  size() {
  return this.meetings.length
  }
}

