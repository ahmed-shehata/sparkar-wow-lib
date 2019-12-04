// Spark AR wOw lib

const config = {}

const configure = (mouth) => {
    config.mouth = mouth;
}

const normalize = (val, min, max) => {
    const maxFactor = max / 1;
    return val * (maxFactor - min) + min;
}

const addWowFactor = (sceneObject, minScale, maxScale) => {
    config.mouth.openness.monitor().subscribe((event) => {
        const normalizedScale = normalize(event.newValue, minScale, maxScale);
        sceneObject.transform.scaleX = normalizedScale;
        sceneObject.transform.scaleY = normalizedScale;
        sceneObject.transform.scaleZ = normalizedScale;
    });
}

module.exports = {
    configure,
    addWowFactor,
}