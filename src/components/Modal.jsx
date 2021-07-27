import React from "react";
import { ReactComponent as CrossIcon } from "@/assets/icons/instagram/Cross.svg";
import { PropCheck } from "@/functions";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible ?? false,
    };
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.propCheck = PropCheck;
    this.propCheck = this.propCheck.bind(this);
  }
  hideModal() {
    this.setState({
      visible: false,
    });
  }
  showModal() {
    this.setState({
      visible: true,
    });
  }

  render() {
    return (
      <div className="modal flex">
        <span className="modal-trigger cursor-pointer" onClick={this.showModal}>
          {this.props.trigger}
        </span>
        <div
          className={[
            "modal-cover fixed left-0 top-0 flex items-center justify-center  w-screen h-screen",
            this.state.visible ? null : "hidden",
          ].join(" ")}
        >
          <div
            className="modal-close absolute bg-gray-700 opacity-60 h-full w-full flex justify-end p-5"
            onClick={this.hideModal}
          >
            <CrossIcon onClick={this.hideModal} className="cursor-pointer" />
          </div>
          <div className="modal-container rounded-sm bg-white w-1/2 h-1/2 z-10 flex flex-col relative">
            {!this.propCheck("header") ? null : (
              <div className="modal-header h-1/6 flex items-center px-3">
                <div className="flex">{this.props.header}</div>
              </div>
            )}
            <div className="modal-body h-full">{this.props.children}</div>

            {!this.propCheck("footer") ? null : (
              <div className="modal-footer h-1/6 flex items-center px-3">
                {this.props.footer}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  header: "",
  footer: "",
};

export default Modal;
