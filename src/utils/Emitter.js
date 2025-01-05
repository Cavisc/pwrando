export default function Emitter(eventName) {
  const event = new Event(eventName);
  window.dispatchEvent(event);
}
