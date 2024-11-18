class Ride {
  staff: Staff;

  constructor(staff: Staff) {
    this.staff = staff;
  }

  enter(vistor: Vistor) {
    console.log(this.staff.decideEntrance(vistor));
  }
}
