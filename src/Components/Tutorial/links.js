let tangramplayurl = 'https://precog.mapzen.com/tangrams/tangram-play/tangram-tutorial/?scene=';
let tutorialurl = 'https://tangrams.github.io/tangram-tutorial/src/Assets/tutorial-files/'
let baseurl = tangramplayurl + tutorialurl;

// Symbol to add consequtive lines is: 9-11
// Symbol to add multiple non-consecutive lines is: 9%2C11

let examples = {
    min: baseurl + 'min.yaml',
    layers: baseurl + 'layers.yaml' + '&lines=2&#44;4',
    layers2: baseurl + 'layers2.yaml' + '&lines=12',
    layers3: baseurl + 'layers3.yaml' + '&lines=13-13',
    styling: baseurl + 'styling.yaml' + '&lines=18-19',
    styling2: baseurl + 'styling2.yaml' + '&lines=15-15',
    styling3: baseurl + 'labels.yaml',
    filters: baseurl + 'filters.yaml' + '&lines=11-17'
}

export default examples;
