const tableWrapper = document.querySelector('.table-wrapper')
const table = document.createElement('table')
table.classList.add('table')
tableWrapper.appendChild(table)

const tHead = (name, username, email, street) => {
    table.innerHTML = `
        <tr class="heading-row">
            <th class="heading">${name}</th>
            <th class="heading">${username}</th>
            <th class="heading">${email}</th>
            <th class="heading">${street}</th>
        </tr>
    `
}
tHead('name', 'username', 'email', 'street')

const getApiResponse = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()

        const getInfo = (arr) => {
            arr.forEach(item => {
                const row = document.createElement("tr");
                row.classList.add('list-row')
                const nameCell = document.createElement("td");
                const usernameCell = document.createElement("td");
                const emailCell = document.createElement("td");
                const streetCell = document.createElement("td");

                nameCell.textContent = item.name;
                usernameCell.textContent = item.username;
                emailCell.textContent = item.email;
                streetCell.textContent = item.address.street;

                row.appendChild(nameCell);
                row.appendChild(usernameCell);
                row.appendChild(emailCell);
                row.appendChild(streetCell);

                table.appendChild(row);
            });
        }
        getInfo(data);
    } catch (error) {
        console.log(error);
    }
}

getApiResponse();
// import { tHead , getInfo } from "./importedFunctions";

// const tableWrapper = document.querySelector('.table-wrapper')
// const table = document.createElement('table')
// tableWrapper.appendChild(table)

// tHead('name', 'username', 'email', 'street'); 

// const getApiResponse = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()

//         const rows = getInfo(data);
//         table.innerHTML = rows;
//     } catch (error) {
//         console.log(error);
//     }
// }

// getApiResponse();