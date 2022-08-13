import React from "react";
import "../component/Show.css";

function Show(props) {
  return (
    <div class="show col-9">
      <section class="header-main border-bottom bg-white">
        <div class="container-fluid">
          <div class="row p-2 pt-3 pb-3 d-flex align-items-center">
            <div class="col-md-2">
              <img
                class="d-none d-md-flex"
                src="https://ict-imgs.vgcloud.vn/2021/01/25/11/tai-sao-moi-nguoi-lai-bi-am-anh-boi-bitcoin.jpg"
                width="100"
              />
            </div>
            <div class="col-md-8">
              <div class="d-flex form-inputs">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Search any product..."
                />
                <i class="bx bx-search"></i>
              </div>
            </div>

            <div class="col-md-2">
              <div class="d-flex d-none d-md-flex flex-row align-items-center">
                <span class="shop-bag">
                  <i class="bx bxs-shopping-bag"></i>
                </span>
                <div class="d-flex flex-column ms-2">
                  <button className="btn btn-outline-success">Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="row container-fluid ">
        <div class=" mx-auto">
          <table class="table bg-white rounded border">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Phone</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>9898894003</td>
                <td>Male</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>9898894309</td>
                <td>Male</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>Bird</td>
                <td>9898894309</td>
                <td>Male</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>9898894003</td>
                <td>Male</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>Bird</td>
                <td>9898894309</td>
                <td>Male</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Show;
