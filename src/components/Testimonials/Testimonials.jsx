import s from './Testimonials..module.scss';
import TestimonialSlider from './TestimonialsSlider/TestimonialsSlider'
const Testimonials = () => {
  return (
    <div className={s.testimonials}>
      <h1>What Our Customer Says</h1>
      <TestimonialSlider/>
    </div>
  );
};

export default Testimonials;
