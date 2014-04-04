exports.data = {
  tests: [ {
    object: {
      a: "a",
      b: [
        [ 1 ], true, 1, 1.1, -1, {
          a: "a"
        }, "a", null, undefined
      ]
    },
    stringified: '{"a":"a","b":[[1],true,1,1.1,-1,{"a":"a"},"a",null,null]}',
    hashed: 'b54392eaf71939faccfbd8f368c3a8ee'
  }, {
    object: {
      a: "a",
      b: true,
      c: false,
      d: null,
      e: undefined,
      f: 0
    },
    stringified: '{"a":"a","b":true,"c":false,"d":null,"f":0}',
    hashed: 'a4de93c01b5c482a8e427c5f609eb02d'
  }, {
    object: {
      a: "a",
      b: 1,
      c: 1.123456,
      d: -1,
      e: -1.123456,
      f: 1e10
    },
    stringified: '{"a":"a","b":1,"c":1.123456,"d":-1,"e":-1.123456,"f":10000000000}',
    hashed: 'fb679a414b972443b4df4eb10b6b6c78'
  }, {
    object: {
      a: "a",
      b: {
        a: "aa",
        b: {
          a: "aaa",
          c: {
            a: "aaaa",
            d: {
              a: "aaaaa",
              e: {}
            }
          }
        }
      }
    },
    stringified: '{"a":"a","b":{"a":"aa","b":{"a":"aaa","c":{"a":"aaaa","d":{"a":"aaaaa","e":{}}}}}}',
    hashed: '9585e166e65a74499ceb9bfca9b91bcd'
  }, {
    object: {
      a: "a",
      b: null,
      c: undefined
    },
    stringified: '{"a":"a","b":null}',
    hashed: 'db092b51e5810ecc0722c15910d7d414'
  } ]
}