
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("appointmentForm");
    const message = document.getElementById("formMessage");
    const dateInput = document.getElementById("date");

    // Prevent selecting a past appointment date
    const today = new Date();
    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    dateInput.min = localDate;

    // Handle appointment form submission
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const patientName =
            document.getElementById("patientName").value;

        message.textContent =
            "Appointment request submitted successfully! Welcome, "
            + patientName + ".";

        form.reset();

        dateInput.min = localDate;
    });

});
