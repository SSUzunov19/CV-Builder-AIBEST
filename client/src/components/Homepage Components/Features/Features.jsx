import React from 'react';
import "./Features.css"

export default function FeaturesSection() {
    const features = [
        {
            title: "Add your Info",
            desc: "Effortlessly add the information you want to the document using the provided interface. Preview changes in real-time to ensure everything meets your preferences.",
        },
        {
            title: "Select template",
            desc: "Select the perfect template from the 9 available options. Use the search bar to filter and find the best fit among 6 tags for your needs.",
        },
        {
            title: "Save pdf",
            desc: "Save the finished document as a PDF, ready for easy attachment to emails or job applications. Ensure your work looks professional and remains accessible across different platforms.",
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
