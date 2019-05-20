import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //     tags: ["tag1", "tag2", "tag3"]
  //   };
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  // constructor(){
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = productID => {
    //arrow function to pass the this Object
    //   console.log('Increment Clicked');
    this.setState({ value: this.state.value + 1 });
    console.log("Product ID: " + productID + " Count:" + this.state.value);
  };
  render() {
    //   console.log("Props:" + this.props)
    return (
      <React.Fragment>
        {this.props.children}
        <span styles={this.styles} className={this.getBadgeClasses()}>
          {this.formarCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create the tags!"}
        {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2";
    classes +=  " badge-" + (this.props.counter.value === 0 ? "warning" : "primary");
    return classes;
  }

  formarCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
