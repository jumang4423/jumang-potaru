const wasm = import("../../../potaru-wasm/pkg/potaru_wasm.js")

interface Props {
}

const ConsoleLog = (d: Props) => {
    wasm.then(mod => {
        mod.contribute_log()
    });
    return (null)
}

export default ConsoleLog