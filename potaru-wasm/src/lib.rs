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
pub fn help() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str("-> available built-in commands:"));
    ary.push(&JsValue::from_str("💓 whoami cd ls cat pwd help clear exit"));
    return ary;
}

#[wasm_bindgen]
pub fn whoami_call() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str("💓 let jumang: jumangObject = {"));
    ary.push(&JsValue::from_str("💓   pronouns: he | him,"));
    ary.push(&JsValue::from_str("💓   born: 28/12/2000,"));
    ary.push(&JsValue::from_str("💓   code: [rust, go, react],"));
    ary.push(&JsValue::from_str("💓   i_believe: we are our own god"));
    ary.push(&JsValue::from_str("💓 };"));
    return ary;
}
