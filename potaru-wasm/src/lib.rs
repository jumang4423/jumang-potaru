use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn console(s: &str, x: &str);
    // Multiple arguments too!
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_many(a: &str, b: &str);
}

// #[wasm_bindgen]
// pub fn take_path_then_translate(x: &str) -> String {
//     match x {
//         "/" => return "MainPage".into(),
//         "/projects" => return "Projects".into(),
//         "/about" => return "About".into(),
//         "/backwash" => return "Backwash".into(),
//         _ => return "404".into(),
//     }
// }

// #[wasm_bindgen]
// pub fn take_path_then_header(x: &str) -> String {
//     match x {
//         "/" => return "ジュマンポータル".into(),
//         "/projects" => return "projects".into(),
//         "/about" => return "about".into(),
//         "/backwash" => return "backwash".into(),
//         _ => return "404".into(),
//     }
// }

#[wasm_bindgen]
pub fn contribute_log() {
    log_many(
        "%cany problems? ur pull request will help me! => ",
        "background:grey; color: white; font-size:17px",
    );
    log_many(
        "%chttps://github.com/jumang4423/jumang-potaru",
        "font-size:17px",
    );
}
