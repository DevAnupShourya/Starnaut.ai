export default function ChattingPage({ params }: { params: { chatId: string } }) {
    return (
        <section className="p-10">
            <h1>Chatting Page</h1>
            <br />
            <br />
            <h2>Chatting with {params.chatId}</h2>
        </section>
    );
}