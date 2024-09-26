import Link from "next/link";

export default function ChatsPage() {
  return (
    <section className="p-10">
      <h1>Chats Page</h1>
      <br />
      <br />
      {[1, 2, 3, 4, 5, 6].map((chatId) => {
        return (
          <Link
            className="my-2 max-w-max rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href={`/dashboard/chats/chat_id-${chatId}`}
          >
            Chat with {chatId}
          </Link>
        )
      })}

    </section>
  );
}
