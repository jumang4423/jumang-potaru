// mods area
// mod file_system;

// file_system::fuck(); devide by mod den read like this
use js_sys::Array;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn available_command_of_default() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str("nyvim"));
    ary.push(&JsValue::from_str("cd"));
    ary.push(&JsValue::from_str("ls"));
    ary.push(&JsValue::from_str("la"));
    ary.push(&JsValue::from_str("pwd"));
    ary.push(&JsValue::from_str("open"));
    ary.push(&JsValue::from_str("cat"));
    ary.push(&JsValue::from_str(".."));
    ary.push(&JsValue::from_str("help"));
    ary.push(&JsValue::from_str("clear"));
    ary.push(&JsValue::from_str("exit"));
    ary.push(&JsValue::from_str("touch"));
    ary.push(&JsValue::from_str("mkdir"));
    ary.push(&JsValue::from_str("rm"));
    return ary;
}

#[wasm_bindgen]
pub fn sl() -> String {
    return "-gif https://media.giphy.com/media/EYkWy4vU0zNLO/giphy.gif".to_owned();
}

#[wasm_bindgen]
pub fn available_command_of_wasm() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str("sl"));
    ary.push(&JsValue::from_str("nyfetch"));
    ary.push(&JsValue::from_str("nylang"));
    ary.push(&JsValue::from_str("nylisp"));
    ary.push(&JsValue::from_str("whoami"));
    ary.push(&JsValue::from_str("_nylisp_debug"));
    ary.push(&JsValue::from_str("transpiler_rust_nylang"));
    ary.push(&JsValue::from_str("./"));
    ary.push(&JsValue::from_str("_nylang_debug"));
    ary.push(&JsValue::from_str("welcome"));
    return ary;
}

#[wasm_bindgen]
pub fn help() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str("-> available built-in commands:"));
    ary.push(&JsValue::from_str(
        format!("🐱 js: {:?}", available_command_of_default().join(" ")).as_str(),
    ));
    ary.push(&JsValue::from_str(
        format!("🐱 wsm: {:?}", available_command_of_wasm().join(" ")).as_str(),
    ));
    return ary;
}

#[wasm_bindgen]
pub fn whoami_call() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str("🐱 let jumango: jumangoObject = {"));
    ary.push(&JsValue::from_str("🐱 _ pronouns: he | him,"));
    ary.push(&JsValue::from_str("🐱 _ born: 12/28/2000,"));
    ary.push(&JsValue::from_str("🐱 _ code: [lisp, graphql, ],"));
    ary.push(&JsValue::from_str("🐱 _ i_believe: we are our own god"));
    ary.push(&JsValue::from_str("🐱 };"));
    return ary;
}

#[wasm_bindgen]
pub fn nyfetch() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str("🐱 jumango@jumang-potaru.dev"));
    ary.push(&JsValue::from_str("🐱 --------------------------------"));
    ary.push(&JsValue::from_str("🐱 os: web"));
    ary.push(&JsValue::from_str("🐱 shell: nyu shell"));
    ary.push(&JsValue::from_str("🐱 terminal: nyu shell term"));
    ary.push(&JsValue::from_str("-gif https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fmedia-p.slid.es%2Fuploads%2F164793%2Fimages%2F5512427%2Fpasted-from-clipboard.png"));

    return ary;
}

#[wasm_bindgen]
pub fn welcome_nysh() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str(
        "-o welcome to nysh wasm! is the shell written in rust",
    ));
    return ary;
}
