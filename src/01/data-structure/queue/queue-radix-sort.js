/**
 * 使用队列来实现简单数据排序：
 *
 * 对于0-99的数字，基数排序将数据集扫描两次。
 * 第一次按个位数上的数字进行排序
 * 第二次按十位数上的数字进行排序。
 */

const StudyQueue = require('./queue');

function distribute(nums, queues, digit) { // digit 表示十位或个位上的值
    for (const n of nums) {
        if (digit === 1) {
            queues[n%10].enqueue(n)
        } else {
            queues[Math.floor(n/10)].enqueue(n)
        }
    }
}

function collect(queues, nums) {
    let idx = 0
    for (let digit = 0; digit < 10; digit++) {
        while(!queues[digit].isEmpty()) {
            nums[idx++] = queues[digit].dequeue()
        }
    }
}

const queues = []
for(let i = 0; i< 10; i++) {
    queues[i] = new StudyQueue()
}

const nums = []
for(let i = 0; i< 10; i++) {
    nums[i] = Math.floor(Math.random() * 100)
}

const log = console.log
log('Before radix sort:')
log(nums.join(' '))
distribute(nums, queues, 1)
collect(queues, nums)
distribute(nums,queues, 10)
collect(queues, nums)
log('After radix sort:')
log(nums.join(' '))
