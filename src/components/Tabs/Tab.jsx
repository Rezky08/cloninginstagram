import React from "react";
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabItemProps: [],
      active: props.active ?? 0,
    };
    let tabItems = props.children;
    if (!(tabItems instanceof Array)) {
      tabItems = [props.children];
    }
    this.state.tabItemProps = tabItems.map((tabItem) => {
      return tabItem.props;
    });
  }

  onSelectedTab(tabIndex) {
    this.setState({ active: tabIndex ?? this.state.active });
  }

  render() {
    return (
      <div className="tab w-full">
        <div className="tab-items">
          <div className="tab-items--labels border-t flex justify-center">
            {this.state.tabItemProps.map((tabItem, index) => {
              return (
                <div
                  className={[
                    this.state.active === index
                      ? "tab-items--label-active border-t border-black transform -translate-y-px text-black"
                      : "tab-items--label text-gray-500",
                    "px-3 py-4 flex items-center gap-2 cursor-pointer",
                  ].join(" ")}
                  key={index}
                  onClick={(e) => this.onSelectedTab(index)}
                >
                  {tabItem.labelIcon}
                  <span className="text-xs font-medium">{tabItem.label}</span>
                </div>
              );
            })}
          </div>
          <div className="tab-items--contents">
            {this.state.tabItemProps.map((tabItem, index) => {
              return (
                <div
                  className={[
                    "tab-items--content",
                    this.state.active !== index ? "hidden" : null,
                  ].join(" ")}
                  key={index}
                >
                  <span>{tabItem.children}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Tab;
