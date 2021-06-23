import { OSDViewer } from './OSDViewer';
import React, { useState, useEffect } from 'react';

export default function MainViewer() {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState();

    const selectImage = (slide) => {
        setSelectedImage(slide.slide);
    };

    const getImages = async () => {
        const response = await fetch("https://openslide-demo.s3.dualstack.us-east-1.amazonaws.com/info.json")
        let image = await response.json();
        setImages(image.groups)
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <>
            <h5>Menu of Images</h5>
            <div className="d-flex flex-row ">
                {images.map((group, index) => {
                    return (
                        <div className="border border-dark rounded my-2 mx-1">
                            <h5 key={index}>{group.name}</h5>
                            <div classname="contents">
                            {group.slides.map((slide, index) => {
                                return (
                                    <>
                                        <button
                                            className="btn btn-sm btn-outline-danger my-1 mx-1"
                                            key={index}
                                            onClick={() => {
                                                return selectImage(slide);
                                            }}
                                        >
                                            {slide.name}
                                        </button>
                                    </>
                                );
                            })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="image-viewer">
                <OSDViewer image={selectedImage}/>
            </div>
        </>
    )
}
