import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }
    componentDidCatch(error) {
        console.log(error)
        this.setState({ hasError: true});
    }
  render() {
      if (this.state.hasError) {
          return <p>Something Went Wrong!</p>;
      }
    return this.props.children;
  }
}
