/*
 * C S O U N D
 *
 * L I C E N S E
 *
 * This software is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 */


const CSOUND_AUDIO_CONTEXT = (function() {

	try {
	    var AudioContext = window.AudioContext || window.webkitAudioContext;
	    return new AudioContext();	
	}
	catch(error) {

	    console.log('Web Audio API is not supported in this browser');
	}
  return null;
}());



/* CsoundObj 
 * This ES6 Class is designed to be compatible with
 * the previous ScriptProcessorNode-based CsoundObj
 */

class CsoundObj {
  constructor() {
    this.audioContext = CSOUND_AUDIO_CONTEXT;

    // exposes node as property, user may access to set port onMessage callback
    // or we can add a setOnMessage(cb) method on CsoundObj...
    this.node = new CsoundNode(this.audioContext);
    this.node.connect(this.audioContext.destination);
  }

  compileCsd(filePath) {
    // not sure what to do about file path...
    // need to see what can be accessed in
    // worklet scope
    this.node.port.postMessage(["compileCsd", filePath]);
  }

  compileOrc(orcString) {
    this.node.port.postMessage(["compileOrc", orcString]);
  }

  setOption(option) {
    this.node.port.postMessage(["setOption", option]);    
  }

  render(filePath) {
  }

  evaluateCode(codeString) {
  }

  readScore(scoreString) {
  }

  setControlChannel(channelName, value) {
  }

  setStringChannel(channelName, value) {

  }

  start() {
    this.node.port.postMessage(["start"]);
  }

  reset() {
  }

  destroy() {
  }

  openAudioOut() {
  }

  closeAudioOut() {
  }

  play() {
  }

  stop() {
  }

}
