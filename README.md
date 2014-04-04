# TOC
   - [sc-md5](#sc-md5)
<a name=""></a>
 
<a name="sc-md5"></a>
# sc-md5
The main point for this module is to be able to convert anything that can be `JSON.stringify` to an md5 hash. Specifically an `object`.

```js
var hash = md5( {
  name: "David",
  age: 30
} );
hash.should.equal( "0699d2ce6d18ca8c8a993c6905e3bf9d" );
```

