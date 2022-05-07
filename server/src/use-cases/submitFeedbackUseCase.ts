import { MailAdapter } from "../adapters/MailAdapter";
import { FeedbacksRepository } from "../repositories/FeedbacksRepository";

interface submitFeedbackUseCaseRequest{
  type:string;
  comment:string;
  screenshot?:string;
}

export class SubmitFeedbackUseCase{

  constructor(
   private  feedbackRepository:FeedbacksRepository,
   private mailAdapter: MailAdapter,
  ){
  }
  async execute(request:submitFeedbackUseCaseRequest){
    const {type,comment,screenshot} = request;
  
    if(!type){
      throw new Error("type is required");
    }

    if(!comment){
      throw new Error("comment is required");
    }

    if(screenshot && !screenshot.startsWith("data:image/png;base64")){
      throw new Error("invalid screenshot format.");
    }

    await this.feedbackRepository.create({
      type,
      comment,
      screenshot
    });

    await this.mailAdapter.sendMail({
      subject:"Novo feedback",
      body:[
        `<div style="font-family:sans-serif; font-size:16px; color:#111;">`,
        `<p>Tipo do feedback:${type}</p>`,
        `<p>Comentário:${comment}</p>`,
         `</div>`
       ].join("\n")
    });
  }
}