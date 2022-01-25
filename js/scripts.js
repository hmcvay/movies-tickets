// Business

function TotalCost() {
  this.tickets = {};
  this.currentId = 0;
}

Cost.prototype.addTicket = function(ticket){
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket
}

TotalCost.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};


// Movie logic

function Ticket(title, showTime, ticketType) {
  this.title = title;
  this.showTime = showTime;
  this.ticketType = ticketType;
}


// Ticket.prototype.getPrice = function() {
//   // return this.firstName + " " + this.lastName; calculation to determine the price
// };

// UI
let totalCost = new TotalCost();

$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();


    
  })
})