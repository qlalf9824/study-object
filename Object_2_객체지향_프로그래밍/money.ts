class Money {
  static ZERO: Money = Money.wons(0);

  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  static wons(amount: number) {
    const money = new Money(amount);
    return money;
  }

  plus(amount: Money) {
    const money = this.amount + amount.amount;
    return new Money(money);
  }

  minus(amount: Money) {
    const money = this.amount - amount.amount;
    return new Money(money);
  }

  times(percent: number) {
    const money = this.amount * percent;
    return new Money(money);
  }

  isLessThen(other: Money) {
    return this.amount < other.amount;
  }

  isGreaterThanEqual(other: Money) {
    return this.amount >= other.amount;
  }
}
