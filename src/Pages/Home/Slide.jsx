

const Slide = ({image,text}) => {
            return (
                        <div className="hero min-h-screen" style={{backgroundImage: `url(${image})`}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                          <div className="max-w-md">
                           {
                                    text
                           }
                            <button className="btn btn-primary">Get Started</button>
                          </div>
                        </div>
                      </div>
            );
};

export default Slide;