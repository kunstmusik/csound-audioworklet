
class CsoundProcessor extends AudioWorkletProcessor {

  constructor(options) {
    super(options);

    //console.log("Can view libcsoundWasm? " + libcsoundWasm);
  }

  process(inputs, outputs, parameters) {

    return true;
  } 
}

//var Module;
//if (!Module) Module = (typeof Module !== 'undefined' ? Module : null) || {};

//WebAssembly.instantiate(AudioWorkletGlobalScope.libcsoundWasm(), {}).then(res => {
//  console.log("WASM LOADED");
//});

registerProcessor('Csound', CsoundProcessor);
