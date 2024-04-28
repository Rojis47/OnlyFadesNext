import { TBarber, BarberSchema } from "../app/types";

type SquireBookModalProps = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  barber: TBarber;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

function SquireBookModal({
  showModal,
  setShowModal,
  barber,
  isLoading,
  setIsLoading,
}: SquireBookModalProps) {
  const result = BarberSchema.parse(barber);

  return (
    <div>
      {showModal ? (
        <div className={`relative z-10 block top-0`}>
          <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75"></div>
          <div className="fixed inset-0 overflow-y-auto lg:max-w-96 lg:m-auto">
            <div className="sticky top-0 pt-4 text-white text-end">
              <button
                title="modal"
                className="z-10"
                onClick={() => setShowModal(false)}
              >
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
            {isLoading && (
              <div className="absolute translate-y-1/2 right-1/2 bottom-1/2 ">
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                ></div>
              </div>
            )}
            <iframe
              className="w-full rounded-xl h-4/5 lg:h-5/6 lg:max-w-96 lg:m-auto"
              src={`https://getsquire.com/booking/book/${
                barber.location
              }/${barber.role.toLowerCase()}/${
                barber.squireId
              }/services?platform=widget`}
              title="External Content"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SquireBookModal;
