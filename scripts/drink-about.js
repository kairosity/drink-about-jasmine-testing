function whatCanIDrink(age){
    if(age < 0){
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    } else if ((age < 14) && (age > 0)) {
        return "Drink Water.";
    } else if ((age < 18) && (age > 13)) {
        return "Drink Sparkling Water.";
    } else if ((age < 21) && (age > 17)) {
        return "Drink Vegetable Juice.";
    } else if ((age < 130) && (age > 21)) {
        return "Drink Moderately.";
    }
}