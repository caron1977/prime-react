import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/components/column/Column";
import { CarService } from "./CarService";

export class DataTableDemo extends Component {
  constructor() {
    super();
    this.state = {};
    this.carservice = new CarService();
  }

  componentDidMount() {
    this.carservice.getCarsSmall().then(data => this.setState({ cars: data }));
  }

  render() {
    return (
      <DataTable value={this.state.cars}>
        <Column field="vin" header="Vin" />
        <Column field="year" header="Year" />
        <Column field="brand" header="Brand" />
        <Column field="color" header="Color" />
      </DataTable>
    );
  }
}
