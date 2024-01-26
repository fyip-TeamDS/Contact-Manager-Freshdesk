// app.js
const fddomain = '';
const apiKey = '';
const endpoint = `https://${fddomain}/api/v2/contacts`;
let allContacts = [];
let nextPage = 1;
let tbody = document.querySelector('#contactsTable tbody');

const setDisplay = (filteredContacts) => {
  allContacts = allContacts.concat(filteredContacts);
  nextPage++;
  const contactCount = document.getElementById('contactCount');
  const pageFetch = document.getElementById('pageFetch');
  contactCount.innerHTML = `Contact Filtered: <strong>${allContacts.length}</strong>`;
  pageFetch.innerHTML = `Now Fetching Page: <strong>${nextPage}</strong>`;
};

const setDisplayTable = () => {
  tbody.innerHTML = ''; // Clear existing rows
  allContacts.forEach((contact) => {
    var newRow = tbody.insertRow();
    newRow.innerHTML = `
                  <td><input type="checkbox" id="contact_${contact.id}" /></td>
                  <td>${contact.name}</td>
                  <td>${contact.email}</td>
                  <td>${contact.company_id}</td>
                  <td>${contact.job_title}</td>
                  <td>${contact.active}</td>
              `;
  });
};
// Function to retrieve and display contacts
async function retrieveContacts() {
  try {
    do {
      const response = await fetch(
        `${endpoint}?page=${nextPage}&per_page=100`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${btoa(apiKey + ':')}`, // Use base64 encoding for API key
          },
        }
      );
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        const filteredContacts = data.filter((contact) => {
          return (
            contact.active === false &&
            contact.company_id === null &&
            contact.job_title === null
          );
        });
        setDisplay(filteredContacts);
      } else {
        break;
      }
    } while (true);
    // Display contacts in the table
    setDisplayTable();
  } catch (error) {
    console.error('Error fetching contacts:', error.message);
  }
}

async function retrieveContactsCompany() {
  try {
    do {
      const response = await fetch(
        `${endpoint}?page=${nextPage}&per_page=100`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${btoa(apiKey + ':')}`, // Use base64 encoding for API key
          },
        }
      );
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        const filteredContacts = data.filter((contact) => {
          return (
            contact.active === false &&
            contact.company_id !== null &&
            contact.job_title === null
          );
        });
        setDisplay(filteredContacts);
      } else {
        break;
      }
    } while (true);
    // Display contacts in the table
    setDisplayTable();
  } catch (error) {
    console.error('Error fetching contacts:', error.message);
  }
}

async function retrieveContactsTitle() {
  try {
    do {
      const response = await fetch(
        `${endpoint}?page=${nextPage}&per_page=100`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${btoa(apiKey + ':')}`, // Use base64 encoding for API key
          },
        }
      );
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        const filteredContacts = data.filter((contact) => {
          return (
            contact.active === false &&
            contact.company_id === null &&
            contact.job_title !== null
          );
        });
        setDisplay(filteredContacts);
      } else {
        break;
      }
    } while (true);

    setDisplayTable();
  } catch (error) {
    console.error('Error fetching contacts:', error.message);
  }
}

// Function to delete selected contacts
function deleteSelectedContacts() {
  // Implement your logic to delete contacts here
  let selectedContactIds = [];

  // Find selected checkboxes
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      let contactId = parseInt(checkbox.id.split('_')[1]);
      selectedContactIds.push(contactId);
    }
  });

  // Make DELETE requests to delete selected contacts
  selectedContactIds.forEach((contactId) => {
    fetch(`${endpoint}/${contactId}/hard_delete?force=true`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(apiKey + ':')}`, // Use base64 encoding for API key
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Contact with ID ${contactId} deleted successfully.`);
        } else {
          console.error(`Error deleting contact with ID ${contactId}.`);
        }
      })
      .catch((error) => console.error('Error deleting contacts:', error));
  });
  // After deletion, you may want to refresh the displayed contacts
  retrieveContacts();
}

// Function to select or deselect all contacts
function selectAllContacts() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var selectAllCheckbox = document.getElementById('selectAll');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAllCheckbox.checked;
  });
}
