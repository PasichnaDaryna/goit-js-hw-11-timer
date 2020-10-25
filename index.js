const daysElem = document.querySelector('span[data-value="days"]');
const hoursElem = document.querySelector('span[data-value="hours"]');
const minsElem = document.querySelector('span[data-value="mins"]');
const secsElem = document.querySelector('span[data-value="secs"]');


class CountdownTimer {
  constructor({ targetDate } = {}) {
    this.targetDate = targetDate;
    this.init();
  }

  init() {
    this.refreshTimer();
    setInterval(() => {
      this.refreshTimer();
    }, 1000);
  }

  getDeltaTime() {
    const currentTime = Date.now();
    const deltaTime = this.targetDate - currentTime;
    return deltaTime;
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateClockface({ days, hours, mins, secs }) {
    daysElem.textContent = `${days}`;
    hoursElem.textContent = `${hours}`;
    minsElem.textContent = `${mins}`;
    secsElem.textContent = `${secs}`;
  }

  refreshTimer() {
    this.updateClockface(this.getTimeComponents(this.getDeltaTime()));
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
    targetDate: new Date(2021, 1, 7, 0, 0, 0, 0),

});
 const womenDay = new Date(2021, 2, 8, 0, 0, 0, 0)
  console.log(womenDay)