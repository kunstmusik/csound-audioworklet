/* 
 * 
 */

//'use strict';

class CsoundProcessor extends AudioWorkletProcessor {

  constructor(options) {
    super(options);


    this.port.onmessage = evt => {

    };
    this.port.start();
    
    console.log("OPTIONS: " + options);

  }

  process(inputs, outputs, parameters) {

    return true;
  } 
}

var importObject = { imports: { print: arg => console.log(arg) } };

// Load WASM
//fetch('libcsound.wasm').then(response =>
//  response.arrayBuffer()
//).then(bytes =>
//  WebAssembly.instantiate(bytes, importObject)
//).then(result =>
//  //registerProcessor('Csound', CsoundProcessor)
//    //result.instance.exports.exported_func()
//);


  registerProcessor('Csound', CsoundProcessor);
