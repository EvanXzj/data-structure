/**
 * 总感觉怪怪的
 */
class List {
    constructor() {
        this.listSize = 0
        this.pos = 0
        this.datastore = []     // 初始化一个数据存储列表元素
    }

    append(element) {
        this.datastore[this.listSize++] = element
    }

    find(element) {
        for(let i = 0; i < this.listSize; ++i) {
            if (this.datastore[i] === element) return i
        }

        return -1
    }

    remove(element) {
        const index = this.find(element)

        if (index > 0) {
            this.datastore.splice(index, 1)
            --this.listSize

            return true
        }

        return false
    }

    length() {
        return this.listSize
    }

    toString() {
        return this.datastore
    }

    insert(element, after) {
        const index = this.find(after)

        if (index) {
            this.datastore.splice(index + 1, 0, element)
            ++this.listSize
            return true
        }

        return false
    }

    clear() {
        this.datastore = []
        this.listSize = this.pos = 0
    }

    contains(element) {
        const index = this.find(element)

        if (index > -1) return true

        return false
    }

    front() {
        this.pos = 0
    }

    end() {
        this.pos = this.listSize
    }

    prev() {
        if (this.pos > 0) {
            --this.pos
        }
    }

    next() {
        if (this.pos < this.listSize) {
            ++this.pos
        }
    }

    currPos() {
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
        return this.datastore[this.pos]
    }

    hasNext() {
        return this.pos < this.listSize
    }

    hasPrev() {
        return this.pos >= 0
    }
}
