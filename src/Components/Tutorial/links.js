let tangramplayurl = 'https://precog.mapzen.com/tangrams/tangram-play/tangram-tutorial/?scene=';
let tutorialurl = 'https://tangrams.github.io/tangram-tutorial/src/Assets/tutorial-files/'
let baseurl = tangramplayurl + tutorialurl;

// Symbol to add consequtive lines is: 9-11
// Symbol to add multiple non-consecutive lines is: 9%2C11

let examples = {
    min: baseurl + 'min.yaml',
    layers: baseurl + 'layers.yaml' + '&lines=2,9',
    layers2: baseurl + 'layers2.yaml' + '&lines=8,12',
    layers3: baseurl + 'layers3.yaml' + '&lines=13',
    styling: baseurl + 'styling.yaml' + '&lines=18-19',
    styling2: baseurl + 'styling2.yaml' + '&lines=15,20',
    styling3: baseurl + 'labels.yaml' + '&lines=28-35',
    styling4: baseurl + 'labels2.yaml' + '&lines=33-34',
    styling5: baseurl + 'labels3.yaml' + '&lines=28-45',
    colors: baseurl + 'colors.yaml',
    filters: baseurl + 'filters.yaml' + '&lines=21-27',
    filters2: baseurl + 'filters2.yaml' + '&lines=21-28',
    filters3: baseurl + 'filters3.yaml' + '&lines=21-27',
    vector: baseurl + 'vector.yaml' + '&lines=4',
    vector2: baseurl + 'vector2.yaml' + '&lines=14,22',
    vector3: baseurl + 'vector2.yaml' + '&lines=4,8',
    vector4: baseurl + 'vector3.yaml' + '&lines=4',
    raster: baseurl + 'raster.yaml'
};

export default examples;
