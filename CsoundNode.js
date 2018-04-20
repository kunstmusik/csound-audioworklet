
class CsoundNode extends AudioWorkletNode {

  constructor(context, options) {
    options = options || {};
    options.numberOfInputs  = 1;
    options.numberOfOutputs = 2;
    options.channelCount = 2;

    super(context, 'Csound', options);

    this.port.start();
  }


  static importScripts(actx) {
    return new Promise( (resolve) => {
      actx.audioWorklet.addModule('libcsound.base64.js').then(() => {
      actx.audioWorklet.addModule('libcsound.js').then(() => {
      actx.audioWorklet.addModule('CsoundObj.js').then(() => {
      actx.audioWorklet.addModule('CsoundProcessor.js').then(() => {
        resolve(); 
      }) 
      }) }) })      
    }) 
  }

}

