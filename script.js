const employeeData = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "Engineering",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    department: "Product",
  },
  { id: 3, name: "Sam Johnson", position: "Designer", department: "Design" },
  {
    id: 4,
    name: "Chris Lee",
    position: "Data Scientist",
    department: "Data",
  },
];

// getEmployeeData.innerText = "Script Connected";
// const cell1 = document.createElement("td");
// getEmployeeData.appendChild(cell1);
// cell1.innerText = "Abu Taher";

const getEmployeeData = document.getElementById("employeeTableBody");

function employeeDetails() {
  employeeData.forEach((employee) => {
    const tableRow = document.createElement("tr");
    const cell = document.createElement("td");
    cell.innerText = employee.id;
    tableRow.appendChild(cell);

    const cell1 = document.createElement("td");
    cell1.innerText = employee.name;
    tableRow.appendChild(cell1);

    const cell2 = document.createElement("td");
    cell2.innerText = employee.position;
    tableRow.appendChild(cell2);

    const cell3 = document.createElement("td");
    cell3.innerText = employee.department;
    tableRow.appendChild(cell3);

    getEmployeeData.appendChild(tableRow);
  });
}

// const renderEmployeeData = () => {
//   employeeDetails();
// };

employeeDetails(employeeData);
