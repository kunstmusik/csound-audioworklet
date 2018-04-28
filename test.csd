<CsoundSynthesizer>
<CsOptions>
-odac -m0
</CsOptions>

<CsInstruments>
;; Untitled - no.2
;; Author: Steven Yi <stevenyi@gmail.com>

sr=48000
ksmps=32
nchnls=2
nchnls_i=1
0dbfs=1

gal init 0
gar init 0

opcode alg0, k[], ik[]
  // rand slice that is rand rotated
  inum, kin[] xin
  
  ilen = lenarray:i(kin)
  inum = min:i(inum, ilen)
  istart = int(random(0, ilen))

  kvals[] init inum

  indx = 0

  while (indx < inum) do
    kvals[indx] init i(kin, istart)

    istart = (istart + 1) % inum
    indx += 1
  od 

  kout[] init inum
  indx = 0
  iread = int(random(0, inum))

  while (indx < inum) do
    ival = i(kvals, iread)
    kout[indx] init ival 
    iread = (iread + 1) % inum
    indx += 1
  od

  xout kout
endop

opcode choose, i, i
  iamount xin
  ival = 0

  if(random(0,1) < limit:i(iamount, 0, 1)) then
    ival = 1 
  endif
  xout ival
endop

instr 1
  asig = vco2(0.5, p4)
  asig += vco2(0.15, p4 * 1.5)
  asig = zdf_ladder(asig, expon(12000, p3, 200), 5)
  gal += asig
  gar += asig
endin

instr Mixer

  al, ar reverbsc gal, gar, 0.87, 4000

  al = ntrpol(al, gal, 0.8)
  ar = ntrpol(ar, gar, 0.8)

  outc(al, ar)

  gal = 0
  gar = 0
endin

instr Runner
  knn[] = array(2,5,7,1)

  ilen = lenarray(knn)
  inum = int(random(1, ilen + 1)) 

  kvals[] alg0 inum, knn 

  indx = 0
  istart = 0

  while (indx < inum) do
    inn = i(kvals, indx)
    print inn

    schedule(1, istart, 
      8, 
      cpsmidinn(72 + inn), 
      ampdbfs(-22))
    if(choose(0.75) == 1) then
      istart += random(2, 4) * 4
    else 
      istart += random(0.25, 1) * 4
    endif

    indx += 1
  od

  schedule(p1, random(8, 14), 1)
endin

seed(0)

schedule("Runner", 0, 1)
schedule("Mixer", 0, -1)

</CsInstruments>

<CsScore>
f0 36000
</CsScore>

</CsoundSynthesizer>
