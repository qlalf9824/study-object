class PeriodCondition implements DiscountCondition {
  private dayOfWeek: Date;
  private startTime: Date;
  private endTime: Date;

  constructor(dayOfWeek: Date, startTime: Date, endTime: Date) {
    this.dayOfWeek = dayOfWeek;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  isSatisfiedBy(screening: Screening): boolean {
    return (
      screening.getStartTime().getDay() === this.dayOfWeek.getDay() &&
      this.startTime <= screening.getStartTime() &&
      this.endTime >= screening.getStartTime()
    );
  }
}
