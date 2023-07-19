import React from 'react';
import "./Features.css"

export default function FeaturesSection() {
    const features = [
        {
            title: "Add your Info",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quasi? Distinctio optio totam voluptatibus sed.",
        },
        {
            title: "Select template",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quasi? Distinctio optio totam voluptatibus sed.",
        },
        {
            title: "Save pdf",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quasi? Distinctio optio totam voluptatibus sed.",
        }
    ]

    return (
        <section className='features-wrapper'>
            <p className="features-header">It's so easy, you don't even need to think</p>
            <div className="features-grid">
                {features.map(({ title, desc }, index) => (
                    <div className="feature" key={index}>
                        <p className="number">0{index + 1}</p>
                        <p className="title">{title}</p>
                        <p className="desc">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
