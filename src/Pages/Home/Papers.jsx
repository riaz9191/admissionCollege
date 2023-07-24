import { Link } from "react-router-dom";

const Paper = () => {
  return (
    <div className="container mb-24 text-center">
      <h1 className="text-xl lg:text-3xl font-semibold text-center uppercase text-orange-600" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">Published Research Papers</h1>
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14" data-aos="slide-up" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">

        <div className="card w-full bg-base-100 shadow-xl border-t-[1px] border-purple-700 relative" data-aos="slide-up" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" alt="" className="w-full h-[183px] object-cover object-center rounded-2xl" />
          <div className="absolute bg-black w-full h-full rounded-2xl opacity-60"></div>
          <div className="card-body justify-start items-start absolute">
            <p className="text-sm md:text-xl font-semibold text-purple-200">Topic: <span className="text-sm md:text-base text-white">New Perspectives on Gender Equality.</span></p>
            <p className="text-sm md:text-xl font-semibold text-purple-200">Authors: <span className="md:text-base text-xs text-white">Samantha Anderson, David Johnson, and Maya Thompson.</span></p>
          </div>
          <div className="text-right text-white absolute bottom-2 right-2">
            <Link
              to='https://brill.com/display/book/9789047404361/B9789047404361_s007.xml'
              target="_blank"
              className="lg:px-3 ml-4 lg:ml-20 lg:py-1 md:px-3 md:py-2.5 px-2 py-1 relative rounded group overflow-hidden font-medium bg-purple-50 text-orange-600 inline-block border border-purple-600 text-sm lg:text-base">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Link</span>
            </Link>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl border-t-[1px] border-purple-700 relative" data-aos="slide-up" data-aos-easing="ease-out-cubic"
          data-aos-duration="2500">
          <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" alt="" className="w-full h-[183px] object-cover object-center rounded-2xl" />
          <div className="absolute bg-black w-full h-full rounded-2xl opacity-60"></div>
          <div className="card-body justify-start items-start absolute">
            <p className="text-sm md:text-xl font-semibold text-purple-200">Topic: <span className="text-sm md:text-base text-white">Exploring Autonomy and Behavior Control.</span></p>
            <p className="text-sm md:text-xl font-semibold text-purple-200">Authors: <span className="md:text-base text-xs text-white">Emily Collins, Michael Roberts, and Sarah Turner.</span></p>
          </div>
          <div className="text-right text-white absolute bottom-2 right-2">
            <Link
              to='https://psycnet.apa.org/record/1988-07453-001'
              target="_blank"
              className="lg:px-3 ml-4 lg:ml-20 lg:py-1 md:px-3 md:py-2.5 px-2 py-1 relative rounded group overflow-hidden font-medium bg-purple-50 text-orange-600 inline-block border border-purple-600 text-sm lg:text-base">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Link</span>
            </Link>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl border-t-[1px] border-purple-700 relative" data-aos="slide-up" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" alt="" className="w-full h-[183px] object-cover object-center rounded-2xl" />
          <div className="absolute bg-black w-full h-full rounded-2xl opacity-60"></div>
          <div className="card-body justify-start items-start absolute">
            <p className="text-sm md:text-xl font-semibold text-purple-200">Topic: <span className="text-sm md:text-base text-white">The Evolution of Fast Fashion.</span></p>
            <p className="text-sm md:text-xl font-semibold text-purple-200">Authors: <span className="md:text-base text-xs text-white">John Williams and Elizabeth Adams.</span></p>
          </div>
          <div className="text-right text-white absolute bottom-2 right-2">
            <Link
              to='https://www.tandfonline.com/doi/abs/10.1080/09593960903498300'
              target="_blank"
              className="lg:px-3 ml-4 lg:ml-20 lg:py-1 md:px-3 md:py-2.5 px-2 py-1 relative rounded group overflow-hidden font-medium bg-purple-50 text-orange-600 inline-block border border-purple-600 text-sm lg:text-base">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Link</span>
            </Link>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl border-t-[1px] border-purple-700 relative" data-aos="slide-up" data-aos-easing="ease-out-cubic"
          data-aos-duration="2500">
          <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" alt="" className="w-full h-[183px] object-cover object-center rounded-2xl" />
          <div className="absolute bg-black w-full h-full rounded-2xl opacity-60"></div>
          <div className="card-body justify-start items-start absolute">
            <p className="text-sm md:text-xl font-semibold text-purple-200">Topic: <span className="text-sm md:text-base text-white">Psychological Studies in Different Cultures.</span></p>
            <p className="text-sm md:text-xl font-semibold text-purple-200">Authors: <span className="md:text-base text-xs text-white">Michael Johnson, Emma Carter, and Daniel Lee.</span></p>
          </div>
          <div className="text-right text-white absolute bottom-2 right-2">
            <Link
              to='https://www.annualreviews.org/doi/abs/10.1146/annurev.psych.55.090902.141927'
              target="_blank"
              className="lg:px-3 ml-4 lg:ml-20 lg:py-1 md:px-3 md:py-2.5 px-2 py-1 relative rounded group overflow-hidden font-medium bg-purple-50 text-orange-600 inline-block border border-purple-600 text-sm lg:text-base">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Link</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paper;
