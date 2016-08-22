import React from 'react';
import Image from 'react-bootstrap/lib/Image';

require('../../Assets/images/*.png');

function _split (markdown) {
    var sections = markdown.split('[section]');
    let annotatedSections = [];

    // For each [section] in the markdown
    for (let section of sections) {
        section = section.trim();

        // If the section is an image or a tangram play object
        if (section.startsWith('{')) {
            let special = section.replace(/&quot;/g, '\"');
            special = JSON.parse(special);

            annotatedSections.push(special);
        }
        // Else if the section is just text
        else {
            annotatedSections.push({
                "type": "text",
                "text": section
            });
        }
    }

    console.log(annotatedSections);
    return annotatedSections;
}

function _goThroughSections (annotatedSections) {
    let jsx = [];

    for (let section of annotatedSections) {
        if (section.type === 'text') {
            jsx.push(textJSX(section));
        }
        else if (section.type === 'image') {
            jsx.push(imageJSX(section));
        }
    }

    return jsx;
}


function textJSX (section) {
    let text = section.text;
    let textJSX = <div dangerouslySetInnerHTML={{ __html: text }} />;
    return textJSX;
}

let imagesPath = '../../Assets/images/';

function imageJSX (section) {
    let image = section;
    let src = imagesPath + image.src;

    let string = 'require(\'' + src + '\')';
    console.log(string);

    let imageJSX = <Image width={image.width} src={src} responsive />;
    return imageJSX;
}

// Will return something like:
/* <div dangerouslySetInnerHTML={{ __html: sections[0] }} />
 * <Image width="60%" src={require('../../Assets/images/min.png')} responsive />
 * <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
 */
export default function parseJSX (markdown) {
    let annotatedSections = _split(markdown);
    let result = _goThroughSections(annotatedSections);

    console.log(result);

    return result;
}
