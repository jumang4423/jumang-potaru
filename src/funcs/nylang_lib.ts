type LibType = {
  name: string,
  source: string
}

export const __array__: Array<LibType> = [
  {
    name: "__array__get_two_dimention",
    source:
      `
🍙 __array__get_two_dimention = 🏨 ( array, i, j ) {
  🍙 arr_arr = array [ i ] ;
  💨 arr_arr [ j ] ;
} ;
`
  },
  {
    name: "__array__forEach",
    source:
      `
🍙 __array__forEach = 🏨 (array, closure) {
  🐶 ( 👽 array != [] ) {
    ❌ ("__array__map__allc_array: first argument must be a array");
  }

  🍙 cur_index = 0;
  🌸 (
      🏨 () {
    closure(array[cur_index], cur_index);
          🍙 cur_index = cur_index + 1;
  },
      📏 (array) 
  );
};
`
  },
  {
    name: "__array__map",
    source:
`
🍙 __array__map = 🏨 (array, closure) {
  🐶 ( 👽 array != [] ) {
    ❌ ("__array__map__allc_array: first argument must be a array");
  }

  🍙 cur_index = 0;
  🌸 (
      🏨 () {
          🍙 array = 🗿 (array, closure(array[cur_index], cur_index), cur_index);
          🍙 cur_index = cur_index + 1;
  },
      📏 (array) 
  );

  💨 array;
};
`
  },
  {
    name: "__array__map__allc_array",
    source:
`
🍙 __array__map__allc_array = 🏨 (arr, size, value) {
  🌸 (
    🏨 () {
      🍙 array_of_array = [];
      🌸 (
        🏨 () {
          🍙 array_of_array = 🥌 (array_of_array, value);
    },
      size
      );

      🍙 arr = 🥌 (arr, array_of_array);
  },
    size
  );

  🐶 ( 📏 (arr) != size ) {
    ❌ ("__array__map__allc_array: array size is incorrect");
  }

  🍙 __test_ar_ar = arr[0];
  🐶 (__test_ar_ar[0] != value) {
    ❌ ("__array__map__allc_array: expected value is incorrect");
  }
  💨 arr;
};
`
  },
  {
    name: "__array__sort",
    source:
`
🍙 __array__sort = 🏨 (array) {

  🐶 ( 👽 array != [] ) { 
    ❌ ("__array__sort: give me array");
  }
  🐶 ( 📏 (array) < 1 ) { 
    ❌ ("__array__sort: array size is too small");
  }
  
  🍙 i = 0;
  🍙 j = 0;
  🌸 (
      🏨 () {
          🍙 j = i + 1;
          🌸 (
              🏨 () {
                  🐶 (array[i] > array[j]) {
			        🍙 tmp = array[i];
                      🍙 array = 🗿 (array, array[j], i);
                      🍙 array = 🗿 (array, tmp, j);
      }
                  🍙 j = j + 1;
    },
              📏 (array) - i - 1
          );
          🍙 i = i + 1;
  },
      📏 (array) - 1
  );
  💨 array;
};
`
  },
]

export const __math__: Array<LibType> = [
  {
    name: "__math__calc",
    source:
`
🍙 __math__calc = 🏨 (operator, left, right) {
  🐶 ( 👽 operator != "" ) { 
      ❌ ("__math__calc: given operator is not string");
  }
  🐶 ( 👽 left != 0 ) { 
      ❌ ("__math__calc: given left number is not number");
  }
  🐶 ( 👽 right != 0 ) { 
      ❌ ("__math__calc: given right number is not number");
  }
  🐶 (operator == "+") {
      💨 left + right;
  };
  🐶 (operator == "-") {
      💨 left - right;
  };
  🐶 (operator == "*") {
      💨 left * right;
  };
  🐶 (operator == "/") {
      💨 left / right;
  };
  🐶 (operator == "%") {
      💨 left % right;
  };
  💨 -1;
} ;
`
  },
  {
    name: "__math__pow",
    source:
`
🍙 __math__pow = 🏨 (bot, exp) {
  🍙 ans = 1;

  🌸 (
      🏨 () {
          🍙 ans = ans * bot;
  },
    exp
  );

  💨 ans;
};
`
  },
  {
    name: "__math__sum",
    source:
`
🍙 __math__sum = 🏨 (arr) {
  🍙 i = 0;
  🍙 sum = 0;

  🌸 (
      🏨 () {
          🍙 sum = sum + arr[i];
          🍙 i = i + 1;

          💨 i != 📏(arr);
  }
  );

  💨 sum;
};`
  },
  {
    name: "__math__max",
    source:
`
🍙 __math__max = 🏨 (left, right) {
  🐶 (left > right) {
      💨 left;
  } 😱 {
      💨 right;
  }
};
`
  },
  {
    name: "__math__min",
    source:
`
🍙 __math__min = 🏨 (left, right) {
  🐶 (left < right) {
      💨 left;
  } 😱 {
      💨 right;
  }
};
`
  },
  {
    name: "__math__log",
    source:
`
🍙 __math__max = 🏨 (left, right) {
  🐶 (left > right) {
      💨 left;
  } 😱 {
      💨 right;
  }
};
🍙 __math__log = 🏨 (base, value) {
  🍙 ans = 0;
  🐶 (value == 1) {
      🐶 (base == 1) {
          💨 1;
    } 😱 {
          💨 0;
    }
  }
  🌸 (
      🏨 () {
          🍙 value = value / base;
          🍙 ans = ans + 1;
          💨 __math__max(base, value) == value;
  }
  );
  💨 ans;
};
`
  },
]

export const __rand__: Array<LibType> = [
  {
    name: "__rand__random_number",
    source:
`
🍙 __rand__random_number = 🏨 () { 
  🍙 random_Num = 0;

  🍙 rnd = 🌹 (1);
          
  🐶 (rnd == "🐧") { 🍙 random_Num = 0; };
  🐶 (rnd == "🦄") { 🍙 random_Num = 1; };
  🐶 (rnd == "🐝") { 🍙 random_Num = 2; };
  🐶 (rnd == "🐹") { 🍙 random_Num = 3; };
  🐶 (rnd == "🐰") { 🍙 random_Num = 4; };
  🐶 (rnd == "🦊") { 🍙 random_Num = 5; };
  🐶 (rnd == "🐼") { 🍙 random_Num = 6; };
  🐶 (rnd == "🐨") { 🍙 random_Num = 7; };
  🐶 (rnd == "🐯") { 🍙 random_Num = 8; };
  🐶 (rnd == "🐷") { 🍙 random_Num = 9; };

  💨 random_Num;
};
`
  },
  {
    name: "__rand__random_number",
    source:
`
🍙 __rand__random_number = 🏨 () { 
  🍙 random_Num = 0;

  🍙 rnd = 🌹 (1);
          
  🐶 (rnd == "🐧") { 🍙 random_Num = 0; };
  🐶 (rnd == "🦄") { 🍙 random_Num = 1; };
  🐶 (rnd == "🐝") { 🍙 random_Num = 2; };
  🐶 (rnd == "🐹") { 🍙 random_Num = 3; };
  🐶 (rnd == "🐰") { 🍙 random_Num = 4; };
  🐶 (rnd == "🦊") { 🍙 random_Num = 5; };
  🐶 (rnd == "🐼") { 🍙 random_Num = 6; };
  🐶 (rnd == "🐨") { 🍙 random_Num = 7; };
  🐶 (rnd == "🐯") { 🍙 random_Num = 8; };
  🐶 (rnd == "🐷") { 🍙 random_Num = 9; };

  💨 random_Num;
};

🍙 __rand__random_num_zero_to_specified_number = 🏨 (num) { 

  🍙 digit = 9;
  🍙 current_digit = 1;
  🍙 return_num = 1;
  🍙 random_Num = 0;
  🍙 con_rand = __rand__random_number() + 1;

  🌸 ( 
      🏨 () {
          🍙 return_num = return_num + current_digit * __rand__random_number();
          🍙 current_digit = current_digit * 10;
  },
    con_rand % digit
  );

  💨 return_num % num;
};
`
  },
  {
    name: "__rand__random_num_zero_to_specified_number",
    source:
`
🍙 __rand__random_number = 🏨 () { 
  🍙 random_Num = 0;

  🍙 rnd = 🌹 (1);
          
  🐶 (rnd == "🐧") { 🍙 random_Num = 0; };
  🐶 (rnd == "🦄") { 🍙 random_Num = 1; };
  🐶 (rnd == "🐝") { 🍙 random_Num = 2; };
  🐶 (rnd == "🐹") { 🍙 random_Num = 3; };
  🐶 (rnd == "🐰") { 🍙 random_Num = 4; };
  🐶 (rnd == "🦊") { 🍙 random_Num = 5; };
  🐶 (rnd == "🐼") { 🍙 random_Num = 6; };
  🐶 (rnd == "🐨") { 🍙 random_Num = 7; };
  🐶 (rnd == "🐯") { 🍙 random_Num = 8; };
  🐶 (rnd == "🐷") { 🍙 random_Num = 9; };

  💨 random_Num;
};

🍙 __rand__random_num_zero_to_specified_number = 🏨 (num) { 

  🍙 digit = 9;
  🍙 current_digit = 1;
  🍙 return_num = 1;
  🍙 random_Num = 0;
  🍙 con_rand = __rand__random_number() + 1;

  🌸 ( 
      🏨 () {
          🍙 return_num = return_num + current_digit * __rand__random_number();
          🍙 current_digit = current_digit * 10;
  },
    con_rand % digit
  );

  💨 return_num % num;
};
`
  },
]

const __test__: Array<LibType> = [
  {
    name: "__test__say_hello",
    source:
`
🍙 __test__say_hello = 🏨 () { 🎤🎶 ("hello, importing succeed!") }; 
`
  }
]

const _imports: Array<LibType> = []
_imports.push(...__array__)
_imports.push(...__math__)
_imports.push(...__rand__)
_imports.push(...__test__)

export const import_nyl = (code: string) => {
  let library = ""
  _imports.forEach((element: LibType) => {
    if (code.includes(element.name)) {
      library = library + element.source
    }
  });
  

  return library
}