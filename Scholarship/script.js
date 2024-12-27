// Function to validate input
function validateInput(value, fieldName) {
    // Check if empty
    if (value === '') {
        alert(`Please enter marks for ${fieldName}`);
        return false;
    }

    // Convert to number
    const num = Number(value);

    // Check if it's a valid number
    if (isNaN(num)) {
        alert(`Please enter a valid number for ${fieldName}`);
        return false;
    }

    // Check if it's positive and in range
    if (num < 0 || num > 100) {
        alert(`${fieldName} marks must be between 0 and 100`);
        return false;
    }

    // Check if it's a whole number
    if (!Number.isInteger(num)) {
        alert(`${fieldName} marks must be a whole number`);
        return false;
    }

    return true;
}

function calculateScholarship() {
    // Get student name
    const name = document.getElementById('name').value.trim();
    if (!name) {
        alert('Please enter student name');
        return;
    }

    // Validate all marks inputs
    const fields = {
        '12-math': 'Mathematics (12th)',
        '12-english': 'English (12th)',
        '12-science': 'Science (12th)',
        '12-computer': 'Computer (12th)',
        '10-math': 'Mathematics (10th)',
        '10-english': 'English (10th)',
        '10-science': 'Science (10th)',
        '10-computer': 'Computer (10th)'
    };

    let values = {};
    
    // Validate each field
    for (let [id, fieldName] of Object.entries(fields)) {
        const value = document.getElementById(id).value;
        if (!validateInput(value, fieldName)) {
            return;
        }
        values[id] = Number(value);
    }

    // Calculate percentages
    const percentage12 = (values['12-math'] + values['12-english'] + 
                         values['12-science'] + values['12-computer']) / 4;
    const percentage10 = (values['10-math'] + values['10-english'] + 
                         values['10-science'] + values['10-computer']) / 4;

    // Calculate average percentage
    const averagePercentage = (percentage12 + percentage10) / 2;

    // Calculate scholarship
    let scholarshipPercentage = 0;
    let finalFees = 100000;

    if (averagePercentage >= 90) {
        scholarshipPercentage = 50;
        finalFees = 100000 * 0.5; // 50% off
    } else if (averagePercentage >= 80) {
        scholarshipPercentage = 25;
        finalFees = 100000 * 0.75; // 25% off
    }

    // Display result
    const resultDiv = document.getElementById('result');
    if (scholarshipPercentage > 0) {
        alert(`Congratulations ${name}! You are eligible for ${scholarshipPercentage}% scholarship.`);
        resultDiv.innerHTML = `
            <div class="success-result">
                <h3>Scholarship Result for ${name}</h3>
                <p>12th Grade Average: ${percentage12.toFixed(2)}%</p>
                <p>10th Grade Average: ${percentage10.toFixed(2)}%</p>
                <p>Overall Average: ${averagePercentage.toFixed(2)}%</p>
                <p class="scholarship">Scholarship Awarded: ${scholarshipPercentage}%</p>
                <p class="fees">Total fees after scholarship: ₹${finalFees.toLocaleString()}</p>
            </div>`;
    } else {
        alert(`Sorry ${name}, you are not eligible for scholarship.`);
        resultDiv.innerHTML = `
            <div class="failure-result">
                <h3>Scholarship Result for ${name}</h3>
                <p>12th Grade Average: ${percentage12.toFixed(2)}%</p>
                <p>10th Grade Average: ${percentage10.toFixed(2)}%</p>
                <p>Overall Average: ${averagePercentage.toFixed(2)}%</p>
                <p class="fees">Total fees: ₹100,000</p>
            </div>`;
    }
}

// Add input event listeners to validate input as user types
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        // Remove any non-numeric characters except minus sign
        this.value = this.value.replace(/[^\d-]/g, '');
        
        // Ensure value is within range
        let num = Number(this.value);
        if (num > 100) this.value = '100';
        if (num < 0) this.value = '0';
    });
});