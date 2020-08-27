describe("What Can I Drink", () =>{
    describe("Drinking Age is less than 0", ()=>{
        it("should return an error if the age is less than 0", function(){
            expect(whatCanIDrink(-5)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        })
    })
    describe("Drinking Age is less than 14", ()=>{
        it("should return 'Drink Water'", function(){
            expect(whatCanIDrink(6)).toBe("Drink Water.")
        })
    })
    describe("Drinking Age is less than 18", ()=>{
        it("should return 'Drink Sparkling Water'", function(){
            expect(whatCanIDrink(15)).toBe("Drink Sparkling Water.")
        })
    })
    describe("Drinking Age is less than 21", ()=>{
        it("should return 'Drink Veggie Juice'", function(){
            expect(whatCanIDrink(20)).toBe("Drink Vegetable Juice.")
        })
    })
    describe("Drinking Age is less than 130", ()=>{
        it("should return 'Drink Moderately'", function(){
            expect(whatCanIDrink(119)).toBe("Drink Moderately.")
        })
    })
});
