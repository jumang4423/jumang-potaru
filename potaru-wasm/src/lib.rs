use js_sys::Array;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn welcome_nysh() -> String {
    return "-> welcome to nysh! is the shell written in rust".to_owned();
}

#[wasm_bindgen]
pub fn available_command() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str("whoami"));
    ary.push(&JsValue::from_str("cd"));
    ary.push(&JsValue::from_str("ls(==la)"));
    ary.push(&JsValue::from_str("cat"));
    ary.push(&JsValue::from_str("..(==cd ..)"));
    ary.push(&JsValue::from_str("welcome"));
    ary.push(&JsValue::from_str("pwd"));
    ary.push(&JsValue::from_str("help"));
    ary.push(&JsValue::from_str("clear"));
    ary.push(&JsValue::from_str("exit"));

    return ary;
}

#[wasm_bindgen]
pub fn help() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str("-> available built-in commands:"));
    ary.push(&JsValue::from_str(
        format!("🐱 {:?}", available_command().join(" ")).as_str()
    ));
    ary.push(&JsValue::from_str("-! press shift key to auto-complete"));
    return ary;
}

#[wasm_bindgen]
pub fn whoami_call() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str("🐱 let jumang: jumangObject = {"));
    ary.push(&JsValue::from_str("🐱 _ pronouns: he | him,"));
    ary.push(&JsValue::from_str("🐱 _ born: 28/12/2000,"));
    ary.push(&JsValue::from_str("🐱 _ code: [rust, go, react],"));
    ary.push(&JsValue::from_str("🐱 _ i_believe: we are our own god"));
    ary.push(&JsValue::from_str("🐱 };"));
    return ary;
}

// #[wasm_bindgen]
// // command arg -> Parse it
// // auto_complete("cd", "b") -> "cd bin"
// pub fn auto_complete(
//     mut temporary_command_input: String,
//     mut maybe_args_also: Option<String>,
// ) -> String {
    
//     match maybe_args_also {
//         Some(arg) => {
//             // yes arg
//             print!("");
//         },
//         None => {
//             print!("");
//         }
//     }

//     "unko".to_owned()
// }
