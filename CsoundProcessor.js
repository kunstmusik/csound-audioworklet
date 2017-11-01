/* 
 * 
 */

//'use strict';

class CsoundProcessor extends AudioWorkletProcessor {

  constructor(options) {
    super(options);

    console.log("OPTIONS: " + options);

  }

  process(inputs, outputs, parameters) {

    return true;
  } 
}

registerProcessor('Csound', CsoundProcessor);
