// src/services/ticketService.js
import ticketModel from "../models/ticketModel.js";

class TicketService {
  async getAllTickets(limit, page, query, sort) {
    // Implementar lógica para obtener todos los tickets
  }

  async getTicketById(ticketId) {
    return await ticketModel.findById(ticketId);
  }

  async getTicketsByUserId(userId) {
    return await ticketModel.find({ purchaser: userId });
  }

  async createTicket(ticketData) {
    const ticket = new ticketModel(ticketData);
    return await ticket.save();
  }
}

export default new TicketService();
