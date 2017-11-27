
class CsoundNode extends AudioWorkletNode {

  constructor(context, options) {
    options = options || {};
    options.numberOfInputs  = 1;
    options.numberOfOutputs = 2;
    options.channelCount = 2;

    super(context, 'Csound', options);

    this.port.start();
  }


  static importScripts() {
    return new Promise( (resolve) => {

      window.audioWorklet.addModule('libcsound.base64.js').then(() => 
        window.audioWorklet.addModule('libcsound.js')).then(() =>
          window.audioWorklet.addModule('CsoundObj.js')).then(() =>
            window.audioWorklet.addModule('CsoundProcessor.js')).then(() => {
              setTimeout( function () { resolve(); }, 500);
            }) });      

  }

}

