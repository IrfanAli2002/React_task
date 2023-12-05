import "./custom_modal.css";

const Custom_Modal = ({ is_open, on_close, children, white_background }) => {
  const handle_overlay_click = (event) => {
    if (event.target === event.currentTarget) {
      on_close();
    }
  };

  return (
    <div
      onClick={handle_overlay_click}
      className={`modal ${is_open ? "open" : ""}`}
    >
      <div className="modal-content">
        <span
          className="close"
          style={{ color: white_background ? "black" : "white" }}
          onClick={on_close}
        >
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Custom_Modal;
