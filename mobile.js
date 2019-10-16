function Mobile(battery,draft,inbox,sent,status) {
    this.battery = battery;
    this.draft = draft;
    this.inbox = inbox;
    this.sent = sent;
    this.status = true;

    this.getStatus = function () {
        return this.status;
    };
    this.chargeBattery = function () {
        if (this.battery < 100) {
            this.battery++;
        }
    };
    this.writeMessage = function (newMassage) {
        if (this.status) {
            this.draft.push(newMassage);
            this.battery--;
        }
    };
    this.sentMessage = function (phone, sentMess) {
        this.draft = [];
        this.sent.push(sentMess);
        phone.inbox.push(sentMess);
        this.battery--;
        phone.battery--;
    };
    this.getSentMessage = function () {
        return this.sent;
        this.battery--;
    };
    this.getInbox=function () {
        return this.inbox;
        this.battery--;
    };
}
let iporn=new Mobile(100,[],[],[],true);
let Xaomi=new Mobile(100,[],[],[],true);