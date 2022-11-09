class AlarmClock{
    constructor() {
        this.alarmCollection = []
        this.timerId = null
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('id будильника не передан');
        }
        if (this.alarmCollection.some((alarm) => alarm.id === id)) {
            return console.error('Будильник с таким id уже существует');
        }
        return this.alarmCollection.push({ id, time, callback });
    }

    removeClock(id) {
        const beginLenght = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
        const endLenght = this.alarmCollection.length;
        return beginLenght > endLenght;
    }

    getCurrentFormattedTime() {
        const date = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        return date;
    }

    start() {
        let checkClocks = () => {
          this.alarmCollection.forEach((clock) => {
            if(clock.time == this.getCurrentFormattedTime()){
              clock.callback()
            }
          })
        }
        if (this.timerId == null){
          this.timerId = setInterval(checkClocks, 1000);
         }
      }

    stop() {
        if (this.timerId !== null) {
          clearInterval(this.timerId);
          this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(elem => console.log(elem.id + ':' + elem.time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

let PhoneClock = new AlarmClock();
PhoneClock.addClock('06:01', () => console.log ('Пора просыпаться!'), 1);
PhoneClock.addClock('06:02', () => console.log ('Сейчас же вставай!!!'), 2);
PhoneClock.removeClock(2);
PhoneClock.addClock('06:10', () => console.log ('Ну всё, ты проспал!'), 3);
PhoneClock.start();
PhoneClock.stop();
PhoneClock.printAlarms();

