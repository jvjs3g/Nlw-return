import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase";

describe("submit Feedback", () => {
  const createFeedbackSpy = jest.fn();
  const sendMailSpy = jest.fn();


  const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  );

  
  it("should be able to submit a feedback",async () => {
  
    await expect(submitFeedback.execute({
      type:"BUG",
      comment:"deu tudo errado",
      screenshot:"data:image/png;base64saksjakjsa",
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();

  });

   
  it("should not be able to submit feedback without type",async () => {
  
    await expect(submitFeedback.execute({
      type:"",
      comment:"deu tudo errado",
      screenshot:"data:image/png;base64saksjakjsa",
    })).rejects.toThrow();
  });


  it("should not be able to submit feedback without comment",async () => {
  
    await expect(submitFeedback.execute({
      type:"BUG",
      comment:"",
      screenshot:"data:image/png;base64saksjakjsa",
    })).rejects.toThrow();
  });

  it("should not be able to submit feedback without screenshot type invalid",async () => {
  
    await expect(submitFeedback.execute({
      type:"BUG",
      comment:"deu tudo errado",
      screenshot:"teste.png",
    })).rejects.toThrow();
  });
});