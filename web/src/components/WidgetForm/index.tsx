import { useState } from "react";
import { CloseButton } from "../CloseButton";

import BugImgUrl from '../../assets/bug.svg';
import IdeaImgUrl from '../../assets/idea.svg';
import OtherImgUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./FeedbackTypeStep";
import { FeedbackContentStep } from "./FeedbackContentStep";
import { FeedbackSucessStep } from "./FeedbackSucessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            src: BugImgUrl,
            alt: 'Icone de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            src: IdeaImgUrl,
            alt: 'Icone de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            src: OtherImgUrl,
            alt: 'Icone de um balão de pensamento'
        }
    }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            { feedbackSent ? (
                <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    { !feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback} onFeedbackSent={setFeedbackSent} />
                    )}
                </>
            )}
            <footer className="text-xs text-neutral-400 ">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}