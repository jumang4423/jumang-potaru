const __array__ = 
`
🍄🍄 ( 
  "array operations library!"
) ;

🍄🍄 ( "since 2 dimention value access is not defined yet" ) ;
🍙 __array__get_two_dimention = 🏨 ( array, i, j ) {
  🍙 arr_arr = array [ i ] ;
  💨 arr_arr [ j ] ;
} ;

🍄🍄 ( "do for each for array" ) ;
🍙 __array__forEach = 🏨 ( array, closure ) {

  🐶 ( 👽 array != [] ) {
    ❌ ( "__array__map__allc_array: first argument must be a array" ) ;
  }

  🍙 cur_index = 0 ;
  🌸 (
      🏨 () {
          closure ( array [ cur_index ], cur_index ) ;
          🍙 cur_index = cur_index + 1 ;
      },
      📏 ( array ) 
  ) ;
} ;

🍙 __array__map = 🏨 ( array, closure ) {

  🐶 ( 👽 array != [] ) {
    ❌ ( "__array__map__allc_array: first argument must be a array" ) ;
  }

  🍙 cur_index = 0 ;
  🌸 (
      🏨 () {
          🍙 array = 🗿 ( array, closure ( array [ cur_index ], cur_index ), cur_index ) ;
          🍙 cur_index = cur_index + 1 ;
      },
      📏 ( array ) 
  ) ;

  💨 array ;
} ;

🍄🍄 ( "make empty 2 dimentional array: arr" ) ;
🍙 __array__map__allc_array = 🏨 ( arr, size, value ) {
  🌸 (
    🏨 ( ) {
      🍙 array_of_array = [ ] ;
      🌸 (
        🏨 ( ) {
          🍙 array_of_array = 🥌 ( array_of_array, value ) ;
        },
        size
      ) ;

      🍙 arr = 🥌 ( arr, array_of_array ) ;
    },
    size
  ) ;

  🐶 ( 📏 ( arr ) != size ) {
    ❌ ( "__array__map__allc_array: array size is incorrect" ) ;
  }

  🍙 __test_ar_ar = arr [ 0 ] ;
  🐶 ( __test_ar_ar [ 0 ] != value ) {
    ❌ ( "__array__map__allc_array: expected value is incorrect" ) ;
  }
  💨 arr ;
} ;

🍄🍄 ( "sort number pair of array" ) ;
🍙 __array__sort = 🏨 ( array ) {

  🐶 ( 👽 array != [] ) { 
    ❌ ( "__array__sort: give me array" ) ;
  }
  🐶 ( 📏 ( array ) < 1 ) { 
    ❌ ( "__array__sort: array size is too small" ) ;
  }
  
  🍙 i = 0 ;
  🍙 j = 0 ;
  🌸 (
      🏨 () {
          🍙 j = i + 1 ;
          🌸 (
              🏨 () {
                  🐶 (array [ i ] > array[ j ] ) {
			        🍙 tmp = array [ i ] ;
                      🍙 array = 🗿 ( array, array [ j ], i ) ;
                      🍙 array = 🗿 ( array, tmp, j ) ;
		        }
                  🍙 j = j + 1 ;
              },
              📏 ( array ) - i - 1
          ) ;
          🍙 i = i + 1 ;
      },
      📏 ( array ) - 1
  ) ;
  💨 array ;
} ;
`

const __math__ = 
`
🍄🍄 ( 
  "math calculations library!"
) ;

🍄🍄 ( "simple calculator, (operator left right) " ) ;
🍙 __math__calc = 🏨 ( operator, left, right ) {

  🐶 ( 👽 operator != "" ) { 
      ❌ ( "__math__calc: given operator is not string" ) ;
  }

  🐶 ( 👽 left != 0 ) { 
      ❌ ( "__math__calc: given left number is not number" ) ;
  }

  🐶 ( 👽 right != 0 ) { 
      ❌ ( "__math__calc: given right number is not number" ) ;
  }

  🐶 ( operator == "+" ) {
      💨 left + right ;
  } ;

  🐶 ( operator == "-" ) {
      💨 left - right ;
  } ;

  🐶 ( operator == "*" ) {
      💨 left * right ;
  } ;

  🐶 ( operator == "/" ) {
      💨 left / right ;
  } ;

  🐶 ( operator == "%" ) {
      💨 left % right ;
  } ;

  💨 -1 ;
} ;

🍄🍄 ( "generates bot ^ exp" ) ;
🍙 __math__pow = 🏨 ( bot, exp ) {
  🍙 ans = 1;

  🌸 (
      🏨 ( ) {
          🍙 ans = ans * bot ;
      },
      exp
  ) ;

  💨 ans ;
} ;

🍄🍄 ( "generates sum of array" ) ;
🍙 __math__sum = 🏨 ( arr ) {
  🍙 i = 0 ;
  🍙 sum = 0 ;

  🌸 (
      🏨 ( ) {
          🍙 sum = sum + arr[ i ] ;
          🍙 i = i + 1 ;

          💨 i != 📏(arr) ;
      }
  ) ;

  💨 sum ;
} ;

🍄🍄 ( "return larger number" ) ;
🍙 __math__max = 🏨 ( left, right ) {
  🐶 ( left > right ) {
      💨 left ;
  } 😱 {
      💨 right ;
  }
} ;

🍄🍄 ( "return smaller number" ) ;
🍙 __math__min = 🏨 ( left, right ) {
  🐶 ( left < right ) {
      💨 left ;
  } 😱 {
      💨 right ;
  }
} ;

🍄🍄 ( "generates log( base, value )" ) ;
🍙 __math__log = 🏨 ( base, value ) {
  🍙 ans = 0 ;

  🐶 ( value == 1 ) {
      🐶 ( base == 1 ) {
          💨 1 ;
      } 😱 {
          💨 0 ;
      }
  }

  🌸 (
      🏨 ( ) {
          🍙 value = value / base ;
          🍙 ans = ans + 1 ;
          💨 __math__max( base, value ) == value ;
      }
  ) ;

  💨 ans ;
} ;
`

const __rand__ = 
`
🍄🍄 ( 
  "random number generation library!"
) ;

🍄🍄 ( "generates 0 - 9 random number" ) ;
🍙 __rand__random_number = 🏨 ( ) { 
  🍙 random_Num = 0 ;

  🍙 rnd = 🌹 ( 1 ) ;
          
  🐶 ( rnd == "🐧" ) { 🍙 random_Num = 0 ; } ;
  🐶 ( rnd == "🦄" ) { 🍙 random_Num = 1 ; } ;
  🐶 ( rnd == "🐝" ) { 🍙 random_Num = 2 ; } ;
  🐶 ( rnd == "🐹" ) { 🍙 random_Num = 3 ; } ;
  🐶 ( rnd == "🐰" ) { 🍙 random_Num = 4 ; } ;
  🐶 ( rnd == "🦊" ) { 🍙 random_Num = 5 ; } ;
  🐶 ( rnd == "🐼" ) { 🍙 random_Num = 6 ; } ;
  🐶 ( rnd == "🐨" ) { 🍙 random_Num = 7 ; } ;
  🐶 ( rnd == "🐯" ) { 🍙 random_Num = 8 ; } ;
  🐶 ( rnd == "🐷" ) { 🍙 random_Num = 9 ; } ;

  💨 random_Num ;
} ;

🍄🍄 ( "generates random number from 0 to specified number" ) ;
🍙 __rand__random_num_zero_to_specified_number = 🏨 ( num ) { 

  🍙 digit = 9 ;
  🍙 current_digit = 1 ;
  🍙 return_num = 1 ;
  🍙 random_Num = 0 ;
  🍙 con_rand = __rand__random_number ( ) + 1 ;

  🌸 ( 
      🏨 ( ) {
          🍙 return_num = return_num + current_digit * __rand__random_number ( ) ;
          🍙 current_digit = current_digit * 10 ;
      } ,
      con_rand % digit
  ) ;

  💨 return_num % num  ;
} ;
`

const __test__ = 
`
🍄🍄 ( 
  "for import test",
  "you can check you can import functions or not"
) ;

🍙 __test__say_hello = 🏨 ( ) { 🎤🎶 ( "hello, importing succeed!" ) } ;
`

export const imports_nyl = __array__ + __math__ + __rand__ + __test__