document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("markForm");
    const button = document.getElementById("calculateButton");

    button.addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const english = parseInt(document.getElementById("english").value, 10) || 0;
        const math = parseInt(document.getElementById("math").value, 10) || 0;
        const computer = parseInt(document.getElementById("computer").value, 10) || 0;

        if (!name.trim()) {
            alert("Please enter your name.");
            return;
        }

        const total = english + math + computer;

             // Determine the subject with the maximum marks
             let maxMarks = english;
             let maxSubject = "English";
     
             if (math > maxMarks) {
                 maxMarks = math;
                 maxSubject = "Math";
             }
             if (computer > maxMarks) {
                 maxMarks = computer;
                 maxSubject = "Computer Science";
             }
     
             // Display a styled alert message
             alert(`Hi ${name}, your total marks are ${total}. 
     You scored the highest in ${maxSubject} with ${maxMarks} marks. Keep up the good work!`);

       
    });
});
