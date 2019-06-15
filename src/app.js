import React from "react";

let toastCount = 0;

export default class Apps extends React.Component {
  state = {
    toasts: []
  };

  toast = (msg, ok) => {
    this.setState(preState => {
      let { toasts = [] } = preState;
      const id = toastCount++;
      toasts.unshift({ id, msg, ok });
      this.clearToast();
      return { toasts };
    });
  };

  clearToast = () => {
    setTimeout(() => {
      this.setState(preState => {
        let { toasts = [] } = preState;
        toasts.pop();
        return { toasts };
      });
    }, 3000);
  };

  render() {
    return (
      <div>
        hello
        <input
          className="button"
          type="button"
          onClick={() => this.toast("Hello world!", true)}
          value="toast"
        />
        <div className="toast-wrapper">
          {this.state.toasts.map(({ id, msg, ok }) => {
            let styles = nuteralStyle;
            if (ok === true) styles = successStyle;
            else if (ok === false) styles = errorStyle;
            return (
              <div
                key={id}
                style={{ ...styles, borderRadius: 3 }}
                className="Toast show"
              >
                {msg}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const nuteralStyle = {
  boxShadow: "0px 3px 5px 0px #4448",
  backgroundColor: "white"
};

const successStyle = {
  boxShadow: "0px 3px 5px 0px #9f98",
  backgroundColor: "#8dd58d",
  color: "#060"
};

const errorStyle = {
  boxShadow: "0px 3px 5px 0px #f998",
  backgroundColor: "#f58f8f",
  color: "#600"
};
