function scopeTest(outerArg){
 var outerVar = 'balls2';

       function outerFunc(){
         return 'blah';
       }

       function test(innerArg){
          var innerVar = 'wilbur',
          j = innerArg;

          function innerFunc(b){
            return b;
          }

          console.log('outerArg from inside', outerArg);
          console.log('outerVar from inside', outerVar);
          console.log('outerFunc from inside', outerFunc);
          console.log('execute outerFunc from inside', outerFunc());
          console.log('innerFunc(\'thing\')', innerFunc('thing'));

       }

       test('bing');

        try{
          console.log(innerVar);
        }catch(e){
          console.log(e);
        }

        try{
          console.log(innerArg);
        }catch(e){
          console.log(e);
        }
        try{
          console.log(innerFunc('nob'));
        }catch(e){
          console.log(e);
        }
}

scopeTest('balls');
