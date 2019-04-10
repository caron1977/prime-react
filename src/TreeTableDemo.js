import React, { Component } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { NodeService } from "./NodeService";

export class TreeTableDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: []
    };
    this.nodeservice = new NodeService();
  }

  componentDidMount() {
    this.nodeservice
      .getTreeTableNodes()
      .then(data => this.setState({ nodes: data }));
  }

  render() {
    return (
      <TreeTable value={this.state.nodes}>
        <Column field="name" header="Name" expander />
        <Column field="size" header="Size" />
        <Column field="type" header="Type" />
      </TreeTable>
    );
  }
}
