// 1.⁠ ⁠მარტივი გამრავლება
// ფუნქცია უნდა მიიღოს ორი რიცხვი და დააბრუნოს მათი ნამრავლი. მაგალითად, თუ არგუმენტები არიან 3 და 4, ფუნქციამ უნდა დააბრუნოს 12.
function multiply(x, y) {
  return x * y;
}
console.log(multiply(10, 5));

// 2.⁠ ⁠ასაკის შემოწმება
// ფუნქციამ უნდა მიიღოს ასაკი და დააბრუნოს "შენ ხარ სრულწლოვანი", თუ ასაკი 18-ზე მეტია ან ტოლია, წინააღმდეგ შემთხვევაში უნდა დააბრუნოს "შენ ხარ არასრულწლოვანი".

function CheckAge(age) {
  if (age >= 18) {
    console.log("შენ ხარ სრულწლოვანი");
  } else {
    console.log("შენ ხარ არასრულწლოვანი");
  }
}
CheckAge(19);

// 3.⁠ ⁠რიცხვი ლუწია თუ კენტი
// ფუნქციამ უნდა მიიღოს რიცხვი და გამოითვალოს, თუ ის ლუწია ან კენტი და დააბრუნოს შესაბამისი ტექსტი.

function IsEvenOrOdd(num) {
  if (num % 2 == 0) {
    console.log("ლუწია");
  } else {
    console.log("კენტია");
  }
}
IsEvenOrOdd(12);

// 4.⁠ ⁠switch case – დღეების დასახელება
// ფუნქციამ უნდა მიიღოს 1-დან 7-მდე რიცხვი და switch case-ების გამოყენებით დააბრუნოს შესაბამისი დღის სახელი (მაგ. 1 - ორშაბათი, 2 - სამშაბათი და ა.შ.).

function GetDayName(dayNumber) {
  switch (true) {
    case dayNumber == 1:
      console.log("ორშაბათი");
      break;
    case dayNumber == 2:
      console.log("სამშაბათი");
      break;
    case dayNumber == 3:
      console.log("ოთხშაბათი");
      break;
    case dayNumber == 4:
      console.log("ხუთშაბათი");
      break;
    case dayNumber == 5:
      console.log("პარასკევი");
      break;
    case dayNumber == 6:
      console.log("შაბათი");
      break;
    case dayNumber == 7:
      console.log("კვირა");
      break;
    default:
      console.log("კვირაში მარტო 7 დღეა");
      break;
  }
}
GetDayName(8);

// 5.⁠ ⁠ორი რიცხვის შედარება
// ფუნქციამ უნდა მიიღოს ორი რიცხვი და დააბრუნოს "პირველი რიცხვი უფრო დიდია", "მეორე რიცხვი უფრო დიდია" ან "ორივე რიცხვი ტოლია".

function compareNumbers(a, b) {
  if (a > b) {
    console.log("პირველი რიცხვი უფრო დიდია");
  } else if (b > a) {
    console.log("მეორე რიცხვი უფრო დიდია");
  } else {
    console.log("ორივე რიცხვი ტოლია");
  }
}
compareNumbers(5, 6);

// 6.⁠ ⁠ოთხი მოქმედების კალკულატორი
// ფუნქცია უნდა მიიღოს ორი რიცხვი და ოპერატორი (+, -, *, /) და შესაბამისი ოპერატორის მიხედვით გამოითვალოს შედეგი.

function calculator(a, b, operator) {
  switch (true) {
    case operator == "+":
      console.log(a + b);
      break;
    case operator == "-":
      console.log(a - b);
      break;
    case operator == "*":
      console.log(a * b);
      break;
    case operator == "/":
      console.log(a / b);
      break;
    default:
      break;
  }
}
calculator(5, 6, "*");

//  7.⁠ ⁠ტემპერატურის კონვერტორი
// ფუნქცია უნდა მიიღოს ტემპერატურა ცელსიუსში და დააბრუნოს ფარენჰეიტში კონვერტირებული მნიშვნელობა. ფორმულა:
// F=C×9/5+32.

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(`F=${celsiusToFahrenheit(12)}`);

//  8.⁠ ⁠მაქსიმალური რიცხვის პოვნა
// ფუნქცია უნდა მიიღოს სამი რიცხვი და დააბრუნოს მათ შორის მაქსიმალური მნიშვნელობა.

function findMax(a, b, c) {
  switch (true) {
    case b > a && b > c:
      return b;
    case a > b && a > c:
      return a;
    case c > a && c > b:
      return c;
    default:
      break;
  }
}
console.log(findMax(5, 7, 10));

//  9.⁠ ⁠რიცხვის დადებითი თუ უარყოფითი
// ფუნქციამ უნდა მიიღოს რიცხვი და შეამოწმოს, დადებითია თუ უარყოფითი. დააბრუნოს შესაბამისი ტექსტი.

function checkSign(num) {
  if (num > 0) {
    return "რიცხვი დადებითია";
  } else if (num < 0) {
    return "რიცხვი უარყოფითია";
  } else {
    return "რიცხვია ნულის ტოლია";
  }
}
console.log(checkSign(0));

// 10.⁠ ⁠switch case – თვეების დასახელება
// ფუნქციამ უნდა მიიღოს 1-დან 12-მდე რიცხვი და switch case-ების გამოყენებით დააბრუნოს შესაბამისი თვის სახელი (მაგ. 1 - იანვარი, 2 - თებერვალი და ა.შ.).

function getMonthName(monthNumber) {
  switch (true) {
    case monthNumber == 1:
      console.log("იანვარი");
      break;
    case monthNumber == 2:
      console.log("თებერვალი");
      break;
    case monthNumber == 3:
      console.log("მარტი");
      break;
    case monthNumber == 4:
      console.log("აპრილი");
      break;
    case monthNumber == 5:
      console.log("მაისი");
      break;
    case monthNumber == 6:
      console.log("ივნისი");
      break;
    case monthNumber == 7:
      console.log("ივლისი");
      break;
    case monthNumber == 8:
      console.log("აგვისტო");
      break;
    case monthNumber == 9:
      console.log("სექტემბერი");
      break;
    case monthNumber == 10:
      console.log("ოქტომბერ");
      break;
    case monthNumber == 11:
      console.log("ნოემბერი");
      break;
    case monthNumber == 12:
      console.log("დეკემბერი");
      break;
    default:
      console.log("წელიწადში 12 თვეა");

      break;
  }
}
getMonthName(13);

// 11.⁠ ⁠გამრავლების მნიშვნელობა
// ფუნქცია უნდა მიიღოს ერთი რიცხვი და თუ რიცხვი 5-ის ტოლია ან მეტი, დააბრუნოს მისი ნამრავლი 10-ზე. წინააღმდეგ შემთხვევაში დააბრუნოს "რიცხვი მცირეა".

function multiplyIfGreaterThanFive(num) {
  if (num >= 5) {
    return num * 10;
  } else {
    return "რიცხვი მცირეა";
  }
}
console.log(multiplyIfGreaterThanFive(5));

// 12.⁠ ⁠switch case – სეზონის შემოწმება
// ფუნქციამ უნდა მიიღოს 1-დან 4-მდე რიცხვი და switch case-ებით დააბრუნოს შესაბამისი სეზონი (1 - გაზაფხული, 2 - ზაფხული, 3 - შემოდგომა, 4 - ზამთარი).

function getSeason(seasonNumber) {
  switch (true) {
    case seasonNumber == 1:
      console.log("გაზაფხული");
      break;
    case seasonNumber == 2:
      console.log("ზაფხული");
      break;
    case seasonNumber == 3:
      console.log("შემოდგმოა");
      break;
    case seasonNumber == 4:
      console.log("ზამთარი");
      break;
    default:
      console.log("წელიწადში ოთხი თვეა");
      break;
  }
}
getSeason(5);

// 13.⁠ ⁠მარტივი აღრიცხვის ფუნქცია
// ფუნქციამ უნდა მიიღოს ფასის მნიშვნელობა და შეამოწმოს, არის თუ არა იგი 100-ზე მეტი. თუ კი, დააბრუნოს "ფასი მაღალია", წინააღმდეგ შემთხვევაში დააბრუნოს "ფასი ნორმალურია".

function checkPrice(price) {
  if (price > 100) {
    return "ფასი მაღალია";
  } else {
    return "ფასი ნორმალურია";
  }
}
console.log(checkPrice(101));

// 14.⁠ ⁠switch case – მათემატიკური ოპერატორების შემოწმება
// ფუნქცია უნდა მიიღოს ორი რიცხვი და ოპერატორი (+, -, *, /) და switch case-ების გამოყენებით დააბრუნოს შესაბამისი მოქმედების შედეგი.

function switchCalculator(a, b, operator) {
  switch (true) {
    case operator == "+":
      console.log(a + b);
      break;
    case operator == "-":
      console.log(a - b);
      break;
    case operator == "*":
      console.log(a * b);
      break;
    case operator == "/":
      console.log(a / b);
      break;
    default:
      break;
  }
}
switchCalculator(10, 14, "*");

// 15.⁠ ⁠რიცხვების დადებითი ჯამი
// ფუნქციამ უნდა მიიღოს ორი რიცხვი და თუ ორივე დადებითია, დააბრუნოს მათი ჯამი. წინააღმდეგ შემთხვევაში დააბრუნოს "მინიმუმ ერთი რიცხვი უარყოფითია".

function positiveSum(a, b) {
  if (a > 0 && b > 0) {
    return a + b;
  } else {
    return "მინიმუმ ერთი რიცხვი უარყოფითია";
  }
}
console.log(positiveSum(10, -1));
