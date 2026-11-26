// Any button on the page can open the chat bot by calling openChatBot().
export const OPEN_CHATBOT_EVENT = "open-chatbot"

export function openChatBot(e?: { preventDefault: () => void }) {
  e?.preventDefault()
  if (typeof window !== "undefined") window.dispatchEvent(new Event(OPEN_CHATBOT_EVENT))
}
