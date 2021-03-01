const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let collected = []
      if (typeof collection === 'object') {
        collected = Object.values(collection)
      } else {
        collected = collection
      }
      collected.forEach(e => {
        return callback(e)
      })
      return collection
    },

    map: function(collection, callback) {
      let collected = []
      if (typeof collection === 'object') {
        collected = Object.values(collection)
      } else {
        collected = collection
      }
      return collected = collected.map(x => callback(x))
    },

    reduce: function(collection, callback, acc) {
      let res
      if (acc) {res = acc} else {res = 0}
      collection.forEach(e => {
        res = callback(res, e, collection)
      })
      return res
    },

    find: function(collection, predicate) {
      return collection.find(e => predicate(e))
    },

    filter: function(collection, predicate){
     let arr = collection.filter(e => predicate(e))
     return arr
    },
    
    size: function(collection) {
      let arr = Object.values(collection).length
      return arr
    },

    first: function(array, index) {
      let result
      if (index) {result = array.slice(0, index)} else {result = array.slice(0)[0]}
      return result
    },

    last: function(array, index) {
      let result
      if (index) {result = array.slice(Math.abs(index) * -1)} else {result = array.slice(-1)[0]}
      return result
    },
    
    compact: function(array) {
      let newArr = []
      for (const value of array) {if (!!value){newArr.push(value)}}
      return newArr
    },

    sortBy: function(array, callback) {
      const arr = array.slice()
      return arr.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, check) {
      let arr = array
      if (check) {arr = array.flat(1)} else { arr = array.flat(Infinity)}
      return arr
    },

    uniq: function(array, isSorted, callback) {
      let arr = Array.from(array)
      if (!!callback) {
        arr = []
        let newArr = []
        array.forEach(e => {
          if (!newArr.includes(callback(e))) {
            newArr.push(callback(e))
            arr.push(e)
          }
        }) 
      }  
      return [...new Set(arr)]
    },

    keys: function(oneObj) {
      let values = Object.keys(oneObj)
      return values
    },

    values: function(oneObj) {
      let values = Object.values(oneObj)
      return values
    },

    functions: function(oneObj) {
      let func = []
      for (const [key, value] of Object.entries(oneObj)) {
        if (typeof value === "function") {func.push(key)}
      }
      return func.sort()
    }

  }
})()

fi.libraryMethod()
