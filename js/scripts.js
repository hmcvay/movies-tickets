// Business

function TotalCost() {
  this.tickets = {};
  this.currentId = 0;
  this.total = 0;
}

TotalCost.prototype.addTicket = function(ticket){
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
}

TotalCost.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

TotalCost.prototype.findTicket = function(id) {
  if (this.tickets[id] != undefined) {
    return this.tickets[id]
  }
  return false;
}

TotalCost.prototype.getTotalPrice = function() {
  for (const key in this.tickets) {
    this.total += this.tickets[key].ticketPrice;
  }
  return this.total
}

// Ticket logic

function Ticket(title, showTime, ticketType) {
  this.title = title;
  this.showTime = showTime;
  this.ticketType = ticketType;
  this.ticketPrice = 0;
}

Ticket.prototype.getPrice = function() {
  let ticketPrice = 5;
  if (this.ticketType === "Adult") {
    ticketPrice += 5;
  }
  if (this.title === "Scream" || this.title === "Spiderman") {
    ticketPrice += 5;
  }
  if (this.showTime === "Evening") {
    ticketPrice += 3;
  }
  this.ticketPrice += ticketPrice
};

// UI

// add delete button if enough time

let totalCost = new TotalCost();

function displayTicketList(ticketsToDisplay){
  let ticketList = $("ul#ticket-sheet");
  let htmlForTicketList = "";
  Object.keys(ticketsToDisplay.tickets).forEach(function(key){
    const ticket = ticketsToDisplay.findTicket(key);
    htmlForTicketList += "<li>" + ticket.title + ", " + ticket.showTime + ", " + ticket.ticketType + "</li>";
  })
  ticketList.html(htmlForTicketList);
}



$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    const inputMovieTitle = $("#title").val();
    const inputShowTime = $("#show-time").val();
    const inputAge = $("#age-group").val();
    
    let newTicket = new Ticket(inputMovieTitle, inputShowTime, inputAge);
    totalCost.addTicket(newTicket);
    displayTicketList(totalCost);
    $("#output").show();
    $("#title").val("");
    $("#show-time").val("");
    $("#age-group").val("");
    newTicket.getPrice();
    console.log(totalCost.getTotalPrice());
  })
})