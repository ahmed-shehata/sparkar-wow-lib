# Spark AR - WoW lib

## Description

Adds the WoW factor to any Spark AR `SceneObject`.

## Usage

```javascript
const WOWLib = require('sparkar-wow-lib');

...

const Scene = require('Scene');
const FaceTracking = require('FaceTracking');

...

const hatObject = Scene.root.find('hat');
const mouth = FaceTracking.face(0).mouth;

// Needs to be configured using mouth from FaceTracking
WOWLib.configure(mouth);

// WOWLib.addWowFactor(sceneObject, minScale, maxScale)
// sceneObject : any object from the Scene
// minScale: minimum scale the object should have when scaling down
// maxScale: maximum scale the object should have when scaling up

WOWLib.addWowFactor(hatObject,0.05,0.1);

```

## Demo

![Spark AR WOW Lib](https://raw.githubusercontent.com/ahmed-shehata/sparkar-wow-lib/master/demo.gif)
