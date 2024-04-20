it('should calculate low-brackets', function () {
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
    expect(1 + 1).toEqual(2);
})

it('should calculate high-brackets', function () {
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(80000)).toEqual(20000);
})