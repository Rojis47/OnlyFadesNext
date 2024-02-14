"use Client";

import GalleryImageCard from "./GalleryImageCard";

type ImageGalleryProps = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  barber: {
    name: string;
    pics: string[];
  };
};

function ImageGallery({ showModal, setShowModal, barber }: ImageGalleryProps) {
  return (
    <div>
      {showModal ? (
        <div className={`relative z-10 block`}>
          <div>
            <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75"></div>
          </div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <div>
                <div
                  style={{ width: "75vw", height: "80vh" }}
                  className="relative px-4 pb-4 overflow-auto text-left transition-all transform bg-[rgba(255,255,255,0.1)] rounded-lg scroll-bar shadow-xl backdrop-blur-lg bg-opacity-90 drop-shadow-2xl sm:my-8 sm:p-6 scrollbar"
                >
                  <div className="sticky top-0 z-10 pt-4 text-white text-end">
                    <button title="modal" onClick={() => setShowModal(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <ul
                      role="list"
                      className="grid max-w-2xl grid-cols-1 mx-auto my-10 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                    >
                      {barber.pics.map((image, i) => (
                        <GalleryImageCard
                          key={i}
                          image={image}
                          alt={`Image ${i + 1} for ${barber.name}`}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ImageGallery;
