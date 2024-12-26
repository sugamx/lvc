function calculateScholarship() {
    // Get values from 12th grade
    const math12 = Number(document.getElementById('12-math').value);
    const english12 = Number(document.getElementById('12-english').value);
    const science12 = Number(document.getElementById('12-science').value);
    const computer12 = Number(document.getElementById('12-computer').value);

    // Get values from 10th grade
    const math10 = Number(document.getElementById('10-math').value);
    const english10 = Number(document.getElementById('10-english').value);
    const science10 = Number(document.getElementById('10-science').value);
    const computer10 = Number(document.getElementById('10-computer').value);

    // Calculate percentages
    const percentage12 = (math12 + english12 + science12 + computer12) / 4;
    const percentage10 = (math10 + english10 + science10 + computer10) / 4;

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
        resultDiv.innerHTML = `Congratulations! You got ${scholarshipPercentage}% scholarship.<br>
                             Total fees after scholarship: ₹${finalFees}`;
    } else {
        resultDiv.innerHTML = "Sorry, you are not eligible for scholarship.<br>Total fees: ₹100,000";
    }
}