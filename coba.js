// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka.
// Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut,
//  Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6.
//  Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6,
//  sehingga function akan me-return 2.

/*const digitPerkalianMinimum =(angka) =>{
    let jml=[];
    
    for(i=0; i <= angka;i++){
        for(j=0; j<=angka; j++){
        if((i*j) === angka){
            let hasil=(""+i+j);
            jml.push(hasil);
            }
        }
        }

        let str = jml.toString();
        let splt = str.split(",");
        splt.length;
        
        
        
        
        //return str.split(",");
        //return splt.min;
       
   
  
  }
  *\
  

 /*function digitPerkalianMinimum(angka) {
    // you can only write your code here!
      var MultiplicationCheck = [];
          for(let i = 0; i <= angka, i++) {
          for(let a = 0; a <= angka, a++){
          if(i * a = angka) {
          MultiplicationCheck.push(i);
      }
      }
  
  }
  return MultiplicationCheck;
  }*/
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2