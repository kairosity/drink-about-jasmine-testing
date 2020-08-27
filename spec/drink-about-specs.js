describe("What Can I Drink", () =>{
    describe("Drinking Age is less 0", ()=>{
        it("should return an error if the age is less than 0", function(){
            expect(whatCanIDrink).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        })
    })
});
