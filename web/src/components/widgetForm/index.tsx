import { CloseButtom } from "../CloseButtom";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";


export const  feedbackTypes = {
  BUG:{
    title:"Probelma",
    image:{
      source:bugImageUrl,
      alt:"Imagem de um inseto",
    }
  },
  IDEA:{
    title:"Ideia",
    image:{
      source:ideaImageUrl,
      alt:"Imagem de uma lâmpada",
    }
  },
  OTHER:{
    title:"Outro",
    image:{
      source:thoughtImageUrl,
      alt:"Imagem de um balão de pensamento",
    }
  },
};

export type typeFeedback = keyof typeof feedbackTypes;

export function WidgetForm(){

  const [feedbackType, setFeedbackType] = useState<typeFeedback | null>(null);

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
     
     {!feedbackType ? (
       <FeedbackTypeStep setFeedbackType={setFeedbackType}/>
     ): <FeedbackContentStep/>
     
     }
     <footer className="text-xs text-neutral-400">
       Feito com amor por <a className="underline underline-offset-2" href="https://github.com/jvjs3g">Joâo vitor</a>
     </footer>
    </div>
  );
}