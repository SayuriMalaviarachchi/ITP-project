import React, { useEffect, useState } from "react";

import "./styles.css";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Header from "../../components/labrotary/header";
import Footer from "../../components/labrotary/footer";
import { Button, Table } from "react-bootstrap";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const RequestedLabTestList = () => {
  const [requestedlabTests, setRequestedLabTests] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:5001/api/v1/requested-lab-tests")
      .then((res) => {
        console.log(res.data);
        setRequestedLabTests(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); 
  const updateApproved = async (event , id) => {
    event.preventDefault();
    let dataApproved = {
      id : id,
      status : "APPROVED"
    }
    await axios.put('http://localhost:5001/api/v1/requested-lab-tests', dataApproved).then((res) => {
                console.log(res.data);
                axios
                .get("http://localhost:5001/api/v1/requested-lab-tests")
                .then((res) => {
                  console.log(res.data);
                  setRequestedLabTests(res.data.data);
                })
                .catch((err) => {
                  console.error(err);
                });
    }).catch(err => {
      console.log("data",dataApproved)
                console.error(err);
    });

  };
  const updateRejected = async (event , id) => {
    event.preventDefault();
    let dataReject = {
      id : id,
      status : "REJECTED"
    }
    await axios.put('http://localhost:5001/api/v1/requested-lab-tests', dataReject).then((res) => {
                console.log(res.data);
                axios
                .get("http://localhost:5001/api/v1/requested-lab-tests")
                .then((res) => {
                  console.log(res.data);
                  setRequestedLabTests(res.data.data);
                })
                .catch((err) => {
                  console.error(err);
                });
    }).catch(err => {
      console.log("data",dataReject)
                console.error(err);
    });

  }

  const generatePDF = async (event) => {
    event.preventDefault()
    // Create a new PDF instance
    const doc = new jsPDF();

    // Set the document title
    doc.text('Table Data', 10, 10);

    // Convert the table data to an array of arrays
   // const data = requestedlabTests.map(row => Object.values(row));
    //console.log(data)
    let data = []
    requestedlabTests.forEach(element => {
      let array = [element.test_name ,element.requested_user_name , element.requested_user_contact_number , element.requested_date , element.status ] 
      data.push(array);


    });

    // Add the table using autoTable plugin
    doc.autoTable({
      head: [['Test Name', 'Patient Name', 'Patient Contact Number' , 'Test Date', 'Status']], // Header row
      body: data // Data rows
    });

    // Save the PDF
    doc.save('requested-lab-test.pdf');
  };

  return (
    <div>
      <Header />
      <center>
      <main style={{minHeight:"500px"}}>
      <h1>Requested Lab Tests</h1>
      <button onClick={(e) => generatePDF(e)}>Generate PDF</button>
      <Table responsive="sm" className="table-data">
        <thead>
          <tr>
            <th>#</th>
            <th>Test Name</th>
            <th>Patient Name</th>
            <th>Patient Contact Number</th>
            <th>Test Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {requestedlabTests.map((row) => (
          <tr>
            <td>1</td>
            <td>{row?.test_name}</td>
            <td>{row.requested_user_name}</td>
            <td>{row.requested_user_contact_number}</td>
            <td>{row.requested_date}</td>
            <td>{row.status == "APPROVED" ? 'APPROVED' : row.status == "REJECTED" ? 'REJECTED' : 
              <div><Button variant="success" onClick={(e) => updateApproved(e , row._id)}>Approve</Button> <Button variant="warning" className="ml-3" onClick={(e) => updateRejected(e , row._id)}>Reject</Button></div> }
            </td>
          </tr>
      ))}
        </tbody>
      </Table>

     
      </main>
      </center>
      <Footer />
    </div>
  );
};

export default RequestedLabTestList;