class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  constructor(movie: Movie, sequence: number, whenScreened: Date) {
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
  }

  getStartTime(): Date {
    return this.whenScreened;
  }

  isSequence(sequence: number): boolean {
    return this.sequence === sequence;
  }

  getMovieFee(): Money {
    return this.movie.getFee();
  }

  calculateFee(audienceCount: number) {
    return this.movie.calcuateMovieFee(this).times(audienceCount);
  }
}
