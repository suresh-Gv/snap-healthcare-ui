import React, { Component } from "react";

class LabList extends Component {
  render() {
    return (
      <>
        <div className="row h-100">
          <div className="col-md-12 overflow-auto h-100">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group d-flex mb-0 justify-content-between">
                      {/* ... your form fields */}
                      <div className="form-group-fields row">
                        <div className="col-md-2 px-1">{/* INPUT */}</div>
                        <button
                          className="btn btn-primary rounded-pill mr-2"
                          onClick={() => this.submitFiltersHandler()}
                        >
                          Search
                        </button>
                        <button
                          className="btn btn-outline-secondary rounded-pill"
                          onClick={() => this.clearFiltersHandler()}
                        >
                          Clear
                        </button>
                      </div>

                      <div className="addAction">
                        <div className="btn-group ">
                          <button
                            className="btn btn-primary"
                            onClick={this.addFormHandler}
                          >
                            {" "}
                            Add{" "}
                          </button>

                          <button
                            className="btn btn-outline-secondary dropdown no-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <span className=" dropdown-toggle ">
                              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </span>
                            <div
                              className="dropdown-menu dropdown-menu-right shadow "
                              aria-labelledby="userDropdown"
                            >
                              <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Group Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Grid Edit
                              </a>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <div className="datatable-container dataTable">
                  {/* <TableGrid 
                      {...tableRecords} 
                      gridEditProps={{
                        formDataInEdit:this.state.formDataInEdit,
                        activeEditId:this.state.activeEditId,
                        onChangeFormDataInEdit:this.onChangeFormDataInEdit,
                      }}
                       /> */}
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </>
    );
  }
}
export default LabList;
