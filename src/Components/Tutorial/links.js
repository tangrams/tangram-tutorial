let tangramplayurl = 'https://precog.mapzen.com/tangrams/tangram-play/tangram-tutorial/?scene=';
let tutorialurl = 'https://tangrams.github.io/tangram-tutorial/src/Assets/tutorial-files/'
let baseurl = tangramplayurl + tutorialurl;

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
    colors: baseurl + 'colors.yaml' + '&lines=14-19',
    filters: baseurl + 'filters.yaml' + '&lines=21-27',
    filters2: baseurl + 'filters2.yaml' + '&lines=21-28',
    filters3: baseurl + 'filters3.yaml' + '&lines=21-27',
    vector: baseurl + 'vector.yaml' + '&lines=4,10,18',
    vector2: baseurl + 'vector2.yaml' + '&lines=14,22',
    vector3: baseurl + 'vector3.yaml' + '&lines=24-31' + '#6/39.130/-118.224',
    vector4: baseurl + 'vector4.yaml' + '&lines=32-37' + '#13/40.8125/-73.9282',
    vector5: baseurl + 'vector5.yaml' + '&lines=32-39' + '#14/40.7180/-74.0020',
    vector6: baseurl + 'vector6.yaml' + '&lines=40-49' + '#14/40.7180/-74.0020',
    vector7: baseurl + 'vector7.yaml' + '&lines=49-53' + '#14/40.7180/-74.0020',
    vector8: baseurl + 'vector8.yaml' + '&lines=49-56' + '#14/40.7180/-74.0020',
    vector9: baseurl + 'vector9.yaml' + '&lines=13,22,30,38,46,54' + '#14/40.7180/-74.0020',
    url1: baseurl + 'url1.yaml' + '&lines=4,8',
    url2: baseurl + 'url2.yaml' + '&lines=4',
    shorthand: baseurl + 'shorthand.yaml',
    shorthand2: baseurl + 'shorthand2.yaml',
    shorthand3: baseurl + 'shorthand3.yaml',
    raster: baseurl + 'raster.yaml',
    raster2: baseurl + 'raster2.yaml' + '&lines=5'
};

export default examples;

console.log(examples.vector3);
