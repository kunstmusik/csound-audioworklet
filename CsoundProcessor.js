/* 
 * 
 */

'use strict';

class CsoundProcessor extends AudioWorkletProcessor {

  constructor(options) {
    super(options);

  }

  process(inputs, outputs, parameters) {

    return true;
  } 
}


// Load WASM
fetch('libcsound.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, importObject)
).then(result =>
  registerProcessor('Csound', CsoundProcessor)
    //result.instance.exports.exported_func()
);
