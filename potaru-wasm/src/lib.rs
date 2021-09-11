// mods area
// mod file_system;

// file_system::fuck(); devide by mod den read like this
use js_sys::Array;
use std::time::Instant;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn available_command_of_default() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str("whoami"));
    ary.push(&JsValue::from_str("cd"));
    ary.push(&JsValue::from_str("ls"));
    ary.push(&JsValue::from_str("la"));
    ary.push(&JsValue::from_str("pwd"));
    ary.push(&JsValue::from_str("cat"));
    ary.push(&JsValue::from_str(".."));
    ary.push(&JsValue::from_str("help"));
    ary.push(&JsValue::from_str("clear"));
    ary.push(&JsValue::from_str("exit"));
    ary.push(&JsValue::from_str("su_sudo"));
    return ary;
}

#[wasm_bindgen]
pub fn sl() -> String {
    return "-gif https://media.giphy.com/media/EYkWy4vU0zNLO/giphy.gif".to_owned();
}

#[wasm_bindgen]
pub fn available_command_of_wasm() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str("welcome"));
    ary.push(&JsValue::from_str("sl"));
    ary.push(&JsValue::from_str("neofetch"));
    return ary;
}

#[wasm_bindgen]
pub fn help() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str("-> available built-in commands:"));
    ary.push(&JsValue::from_str(
        format!("🐱 builtin: {:?}", available_command_of_default().join(" ")).as_str(),
    ));
    ary.push(&JsValue::from_str(
        format!("🐱 wasm: {:?}", available_command_of_wasm().join(" ")).as_str(),
    ));
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

#[wasm_bindgen]
pub fn neofetch() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str("🐱 jumang@jumang-potaru.dev"));
    ary.push(&JsValue::from_str("🐱 --------------------------------"));
    ary.push(&JsValue::from_str("🐱 OS: chrome"));
    ary.push(&JsValue::from_str("🐱 Shell: nysh wasm edition"));
    ary.push(&JsValue::from_str("🐱 Terminal: nyu shell term"));
    ary.push(&JsValue::from_str("-gif https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fmedia-p.slid.es%2Fuploads%2F164793%2Fimages%2F5512427%2Fpasted-from-clipboard.png"));
    
    return ary;
}

#[wasm_bindgen]
pub fn welcome_nysh() -> Array {
    let ary = Array::new();
    ary.push(&JsValue::from_str(
        "-> welcome to nysh! is the shell written in rust",
    ));
    ary.push(&JsValue::from_str("-o logined as guest currently"));
    return ary;
}
