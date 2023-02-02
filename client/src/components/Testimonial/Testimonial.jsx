import React, { useState, useEffect } from 'react';
import instance from '../../api/instance';

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    instance.get('/get-testimonials').then(({ data }) => {
      setTestimonials(data);
    });
  }, []);
  return (
    <section id="testimonial" className="testimonial-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-10">
              <h4 className="title">Testimonial</h4>
              <p className="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row testimonial-active testimonial-wrapper">
              {testimonials.map((element) => {
                return (
                  <div className="col-lg-4 testimonial">
                    <div className="single-testimonial mt-30 mb-30 text-center">
                      <div className="testimonial-image">
                        <img src={element.photo} alt="Author" />
                      </div>
                      <div className="testimonial-content">
                        <p className="text testimonial-description">
                          {element.description}
                        </p>
                        <h6 className="author-name">{element.name}</h6>
                        <span className="sub-title">{element.post}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Testimonial;
