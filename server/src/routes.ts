import express from "express";
import { NodemailerMailAdpater } from "./adapters/nodemailer/NodemailerMailAdapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/PrismaFeedbacksRepository";
import { SubmitFeedbackUseCase } from "./use-cases/submitFeedbackUseCase";

export const routes = express.Router();





routes.post ("/feedbacks",async (request, response) => {
  const {type, comment, screenshot} = request.body;

  const prismaFeedbackRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdpater = new NodemailerMailAdpater();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerMailAdpater);

  submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  });

 
return response.status(201).send();
 
});