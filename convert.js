fs = require('fs');
let wasmData = fs.readFileSync("libcsound.wasm");

let wasmStr = wasmData.join(",");

let wasmOut = "AudioWorkletGlobalScope.libcsoundWasm = () => new Uint8Array([" + wasmStr + "]);";

fs.writeFileSync("libcsound.wasm.as.js", wasmOut);
