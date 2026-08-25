---
title: "Tyroll Cue Rig"
type: hardware
summary: "A tactile DMX control surface for stage cues, android choreography, and all the weird little moments in between."
tags: ["DMX", "PCB", "firmware"]
order: 2
repoUrl: "https://github.com/johndoe/replicant-cue-rig"
gallery:
  - "/projects/dmx/render.jpg"
  - "/projects/dmx/pcb.jpg"
  - "/projects/dmx/assembled.jpg"
bom:
  - part: "Enttec USB DMX Pro"
    qty: "1"
    source: "Enttec"
  - part: "10k linear fader"
    qty: "4"
    source: "Adafruit"
  - part: "Custom PCB"
    qty: "1"
    source: "JLCPCB"
  - part: "3D printed enclosure"
    qty: "1"
    source: "self, PETG"
date: 2026-05-15
---

A physical control surface for triggering performance cues with the kind of direct haptic feedback that makes a room feel less like a laptop and more like a stage.

## Why

The problem was simple: software-only cue control felt too abstract for live performance. When something needs to happen in real time, a real fader is a nicer interface than a mouse and a prayer.

## Build

The enclosure was modeled, printed, and fitted around a small custom PCB routing four faders into a DMX-In control pipeline. Firmware handles debounce, channel scaling, and cue recall with enough grace to keep a show running without a panic spiral.

This was the sort of project where a few knobs and a bit of steel make a system feel intentional instead of vaguely haunted.
