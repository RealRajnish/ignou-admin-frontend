import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAppointmentContext } from "../../contexts/ProductContext";
import styled from "styled-components";
import AppointmentSlot from "../AppointmentSlot";

const ViewAppointmentPage = () => {
  const { appointments } = useAppointmentContext();
  const ref = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const customWidth = width + "px";

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  useEffect(() => {
    forceUpdate();
  }, [width, height]);

  // useLayoutEffect(() => {
  //   setWidth(ref.current.offsetWidth);
  //   setHeight(ref.current.offsetHeight);
  // }, []);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Wrapper>
      <div className="table-container" ref={ref}>
        {/* <AppointmentSlot
          width={width}
          height={height}
          customWidth={customWidth}
        />
        ; */}
        {/* <div
          className="parent"
          inner-width={width}
          style={{ width: customWidth }}
        >
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Contact</th>
                <th>Pet</th>
                <th>Breed</th>
                <th>Age</th>
                <th>Date</th>
                <th>Booked On</th>
                <th>Clinic</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((elem) => {
                const { customer_details, animal_details, Date } = elem;
                const { name, email, phone, address } = customer_details;
                const { title, breed, age, appointment, clinic } =
                  animal_details;

                return (
                  <tr>
                    <td>{name}</td>
                    <td>
                      {phone} <br /> {email}
                    </td>
                    <td>{title}</td>
                    <td>{breed}</td>
                    <td>{age}</td>
                    <td>{appointment}</td>
                    <td>{Date}</td>
                    <td>{clinic}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="child">
            Lorem ipsum dolor sit amet
            consecteturkjkjkjkjkjkjkjkjjkjjkjkjkjkjjkjkjjkjkjk adipisicing elit.
            Optio iste suscipit aliquam eum debitis illum rerum totam assumenda
            porro adipisci facere, ea tempora sequi? Dolorem enim, fugiat rerum
            consequatur, nobis, ad possimus sequi facere quasi itaque
            perferendis laboriosam optio corporis? Qui, reprehenderit? Aliquam
            eligendi maiores voluptas facilis hic ipsum. Dicta autem, dolorem
            inventore veritatis quas sit ullam odit necessitatibus recusandae,
            veniam, eum expedita. Optio?
          </div>
        </div> */}

        <div
          className="parent"
          inner-width={width}
          style={{ width: width.customWidth }}
        >
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Contact</th>
                <th>Pet</th>
                <th>Breed</th>
                <th>Age</th>
                <th>Date</th>
                <th>Booked On</th>
                <th>Clinic</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((elem) => {
                const { customer_details, animal_details, Date } = elem;
                const { name, email, phone, address } = customer_details;
                const { title, breed, age, appointment, clinic } =
                  animal_details;

                return (
                  <tr>
                    <td>{name}</td>
                    <td>
                      {phone} <br /> {email}
                    </td>
                    <td>{title}</td>
                    <td>{breed}</td>
                    <td>{age}</td>
                    <td>{appointment}</td>
                    <td>{Date}</td>
                    <td>{clinic}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1; */

  .table-container {
    /* background: green; */
    width: 100%;
  }

  .parent {
    min-width: 100%;
    /* max-height: 200px; */
    /* overflow: auto; */
    .child {
      /* overflow: auto; */
    }
  }

  /* .table {
    width: 100%;
    overflow: scroll;
  } */

  font-size: 1.5rem;
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
  }

  tbody {
    overflow-y: auto;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
export default ViewAppointmentPage;
