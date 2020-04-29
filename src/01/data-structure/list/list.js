const log = console.log;

/**
 * 使用数组实现的列表 StudyList
 */
class StudyList {
    listSize = 0;
    pos = 0;
    dataStore = []; // 初始化一个空数组来存储列表元素

    // 给列表添加一个元素
    append(element) {
        this.dataStore[this.listSize++] = element;
    }

    // findIndex
    findIndex(element) {
        return this.dataStore.findIndex(e => e === element)
    }

    // 删除元素
    remove(element) {
        const idx = this.findIndex(element)
        if (idx > 0) {
            this.dataStore.splice(idx, 1)
            this.listSize--

            return true
        }

        return false
    }

    // 返回列表中有多少个元素
    length() {
        return this.listSize
    }

    // 返回列表的字符串形式
    toString(sep = ',') {
        return this.dataStore.join(sep)
    }

    // 在after元素后插入element
    insert(element, after) {
        const afterIdx = this.findIndex(after)

        if (afterIdx > -1) {
            this.dataStore.splice(afterIdx + 1, 0, element)
            this.listSize++

            return true
        }

        return false
    }

    clear() {
        this.dataStore = []
        this.listSize = this.pos = 0
    }

    contains(element) {
        return this.dataStore.includes(element)
    }

    front() {
        this.pos = 0
    }

    end() {
        this.pos = this.listSize - 1
    }

    prev() {
        if (this.pos >= 0) this.pos--
    }

    next() {
        if (this.pos < this.listSize) this.pos++
    }

    currPosition() {
        return this.pos
    }

    moveTo(position) {
        if (position < 0 || position > this.listSize) {
            return false
        }

        this.pos = position
        return true
    }

    getElement() {
        return this.dataStore[this.pos]
    }

    hasNext() {
        return this.pos < this.listSize
    }

    hasPrev() {
        return this.pos >= 0
    }
}

module.exports = StudyList

// const sl = new StudyList()

// sl.append('Cynthia')
// sl.append('Raymond')
// sl.append('Barbara')
// log(sl.toString())
// sl.remove('Raymond')
// log(sl.toString())

// sl.front()
// log(sl.getElement())
// sl.next()
// log(sl.getElement())

// const names = new StudyList()
// names.append('a')
// names.append('b')
// names.append('d')
// names.insert('c', 'b')
// log(names.toString())
// log('正序：')
// for(names.front(); names.hasNext(); names.next()) {
//     log(names.getElement())
// }
// log('反序：')
// for(names.end(); names.hasPrev(); names.prev()) {
//     log(names.getElement())
// }

// Output:
// Cynthia,Raymond,Barbara
// Cynthia,Barbara
// Cynthia
// Barbara
// a,b,c,d
// 正序：
// a
// b
// c
// d
// 反序：
// d
// c
// b
// a
