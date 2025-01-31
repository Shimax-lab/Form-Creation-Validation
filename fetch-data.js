// Define the async function to fetch user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Convert the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a list element
        const userList = document.createElement('ul');

        // Loop through the users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors and update the UI
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener("DOMContentLoaded", fetchUserData);
