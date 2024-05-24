let num = prompt("Enter the Quarter: ");

// Convert the prompt input to a number
num = Number(num);

switch(num) {
    case 1:
        console.log("Months in Quarter 1: January, February, March");
        break;
    case 2:
        console.log("Months in Quarter 2: April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3: July, August, September");
        break;
    case 4:
        console.log("Months in Quarter 4: October, November, December");
        break;
    default:
        console.warn("Please enter a number between 1 and 4.");
}
