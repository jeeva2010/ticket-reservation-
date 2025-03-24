document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    // Collect form data
    const name = document.getElementById("name").value;
    const train = document.getElementById("train").value;
    const date = document.getElementById("date").value;
    const seats = document.getElementById("seats").value;

    // Create a new list item for the booking
    const bookingList = document.getElementById("booking-list");
    const listItem = document.createElement("li");

    listItem.textContent = `Name: ${name} | Train: ${train} | Date: ${date} | Seats: ${seats}`;
    bookingList.appendChild(listItem);

    // Clear the form inputs after booking
    document.getElementById("booking-form").reset();
});
