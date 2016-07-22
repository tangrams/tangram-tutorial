let tangramplayurl = 'https://precog.mapzen.com/tangrams/tangram-play/tangram-tutorial/?scene=';
let tutorialurl = 'https://tangrams.github.io/tangram-tutorial/src/Assets/tutorial-files/'
let baseurl = tangramplayurl + tutorialurl;

let examples = {
    min: baseurl + 'min.yaml',
    layers: baseurl + 'layers.yaml',
    layers2: baseurl + 'layers2.yaml' + '&lines=12',
    layers3: baseurl + 'layers3.yaml' + '&lines=13',
    styling: baseurl + 'styling.yaml' + '&lines=18-19',
    styling2: baseurl + 'styling2.yaml' + '&lines=15',
    styling3: baseurl + 'labels.yaml',
    filters: baseurl + 'filters.yaml' + '&lines=11-17'
}

export default examples;
