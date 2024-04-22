import './modal.css'

function Modal({ id, header, body, footer , onClose}) {
  return (
    <>
      <div id={id || "Modal"} className="modal border shadow-lg shadow-slate-400 fixed z-10 pt-3 left-0 top-0 w-[100%] h-[100%] overflow-auto bg-blue-300 ">
        <div className="modal-content relative bg-white m-auto p-0 border border-solid border-red-500 w-[80%]">
          <div className="header py-4 px-4 m-auto bg-yellow-300 text-black font-bold text-4xl">
            <span className="close-modal-icon cursor-pointer text-3xl float-right font-bold " onClick={onClose}>
              &times;
            </span>
              <h2>{header ? header : "Header"}</h2>
          </div>
          <div className="body my-8 flex justify-center items-center text-5xl text-blue-950 ">
            {
                body ? (
                    body
                ) : (
                    <div>
                        <p>This is our Modal Body</p>
                    </div>
                )
            }
          </div>
          <div className="footer flex justify-center items-center text-red-950 text-4xl py-4 mt-3 bg-yellow-300">
            {
                footer ? footer : <h2>This is our Footer</h2>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
