// Any button on the page can open the chat bot by calling openChatBot().
// Pass a topic id (e.g. "conference", "panel") to skip the "how can I help" question.
export const OPEN_CHATBOT_EVENT = "open-chatbot"

export type ChatTopicId = "conference" | "lecture" | "panel" | "podcast" | "radio" | "content" | "other"

export function openChatBot(e?: { preventDefault: () => void }, topic?: ChatTopicId) {
  e?.preventDefault()
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent(OPEN_CHATBOT_EVENT, { detail: { topic } }))
}

// Helper for onClick props: onClick={openChatBotWith("panel")}
export function openChatBotWith(topic: ChatTopicId) {
  return (e?: { preventDefault: () => void }) => openChatBot(e, topic)
}
