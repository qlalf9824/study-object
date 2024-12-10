class Movie {
  title: string;
  runningTime: Date;
  fee: Money;
  discountPolicy: DiscountPolicy;

  constructor(
    title: string,
    runningTime: Date,
    fee: Money,
    discountPolicy: DiscountPolicy
  ) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountPolicy = discountPolicy;
  }

  getFee() {
    return this.fee;
  }

  calcuateMovieFee(screening: Screening) {
    return this.fee.minus(
      this.discountPolicy.calculateDiscountAmount(screening)
    );
  }

  changeDiscountPolicy(discountPolicy: DiscountPolicy) {
    this.discountPolicy = discountPolicy;
  }
}
