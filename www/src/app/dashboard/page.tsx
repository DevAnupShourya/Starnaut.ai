import ChatBox from "@/components/custom/chat-box";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";
import { currentUser } from '@clerk/nextjs/server';
import { isUserInDB } from "@/server/actions/userActions";

export default async function DashboardHomePage() {
  const user = await currentUser();
  // TODO should be using clerk webhooks but for now 
  isUserInDB(user?.id!, { name: user?.fullName! });

  const HAS_CHAT = true;
  return (
    <section className="p-1">
      {HAS_CHAT && (
        <>
          <div className="max-w-screen-lg mx-auto pt-2">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {`Welcome ${user?.firstName ? user?.firstName : "back"}`}
            </h1>
            <h2 className="scroll-m-20 mt-4 text-3xl font-light tracking-tight first:mt-0">
              How can I help you?
            </h2>
          </div>
          <div className="max-w-screen-lg mx-auto py-8">
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Recent Chats
            </h2>
            <div>
              <div className="flex flex-row flex-wrap justify-between">
                {recent_chats.map((chat, idx) => {
                  return (
                    <ChatBox {...chat} key={idx} />
                  )
                })}

              </div>
            </div>
          </div>
        </>
      )
      }
      {/* When user first time enters and has not started chatting with any persona */}
      {
        !HAS_CHAT && (
          <div className="w-full">
            <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
              Recent Chats
            </h2>
            <div className="text-center w-full py-14">
              <p className="text-sm text-muted-foreground mb-8">
                You have no recent chats!
              </p>
              <Link href="/dashboard/new" className="whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-sm inline-block">
                <ShimmerButton role="button" shimmerDuration="2s" className="shadow-2xl mx-auto group">
                  <div className="flex flex-row flex-nowrap gap-2 justify-between items-center">
                    <svg className="size-4 ease-in-out transform transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                    <span className="ease-in-out transform transition-transform duration-300 group-hover:scale-95">Create Persona</span>
                  </div>
                </ShimmerButton>
              </Link>
              <p className="text-sm text-muted-foreground my-8">
                OR
              </p>
              <Link href="/dashboard/explore" className="whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-sm inline-block">
                <ShimmerButton role="button" shimmerDuration="5s" className="shadow-2xl mx-auto group">
                  <div className="flex flex-row flex-nowrap gap-2 justify-between items-center">
                    <svg className="size-4 ease-in-out transform transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
                    <span className="ease-in-out transform transition-transform duration-300 group-hover:scale-95">Explore Personas</span>
                  </div>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        )
      }
    </section >
  );
}


const recent_chats = [
  {
    name: "Jack",
    last_chat: "4 Hours ago",
    last_message: "I've never seen anything like this before. It's amazing. I love it.",
    avatar: "https://avatars.githubusercontent.com/u/124591",
    chat_link: '/chats/124591'
  },
  {
    name: "Jill",
    last_chat: "11 Hours ago",
    last_message: "I don't know what to say. I'm speechless. This is amazing.",
    avatar: "https://avatars.githubusercontent.com/u/124592",
    chat_link: '/chats/124592'
  },
  {
    name: "John",
    last_chat: "42 mins ago",
    last_message: "I'm at a loss for words. This is amazing. I love it.",
    avatar: "https://avatars.githubusercontent.com/u/124593",
    chat_link: '/chats/124593'
  },
  {
    name: "Jane",
    last_chat: "2 days ago",
    last_message: "I'm at a loss for words. This is amazing. I love it.",
    avatar: "https://avatars.githubusercontent.com/u/124594",
    chat_link: '/chats/124594'
  },
  {
    name: "Jenny",
    last_chat: "10 mins ago",
    last_message: "I'm at a loss for words. This is amazing. I love it.",
    avatar: "https://avatars.githubusercontent.com/u/124695",
    chat_link: '/chats/124595'
  },
  {
    name: "Danny",
    last_chat: "14 mins ago",
    last_message: "I'm at a loss for words. This is amazing. I love it.",
    avatar: "https://avatars.githubusercontent.com/u/124525",
    chat_link: '/chats/124595'
  },
  {
    name: "James",
    last_chat: "8 Hours ago",
    last_message: "I'm at a loss for words. This is amazing. I love it.",
    avatar: "https://avatars.githubusercontent.com/u/144596",
    chat_link: '/chats/124596'
  },
  {
    name: "Danny",
    last_chat: "14 mins ago",
    last_message: "I'm at a loss for words. This is amazing. I love it.",
    avatar: "https://avatars.githubusercontent.com/u/124525",
    chat_link: '/chats/124595'
  },
  {
    name: "James",
    last_chat: "8 Hours ago",
    last_message: "I'm at a loss for words. This is amazing. I love it.",
    avatar: "https://avatars.githubusercontent.com/u/144596",
    chat_link: '/chats/124596'
  },
  {
    name: "Danny",
    last_chat: "14 mins ago",
    last_message: "I'm at a loss for words. This is amazing. I love it.",
    avatar: "https://avatars.githubusercontent.com/u/124525",
    chat_link: '/chats/124595'
  },
  {
    name: "James",
    last_chat: "8 Hours ago",
    last_message: "I'm at a loss for words. This is amazing. I love it.",
    avatar: "https://avatars.githubusercontent.com/u/144596",
    chat_link: '/chats/124596'
  },
  {
    name: "Danny",
    last_chat: "14 mins ago",
    last_message: "I'm at a loss for words. This is amazing. I love it.",
    avatar: "https://avatars.githubusercontent.com/u/124525",
    chat_link: '/chats/124595'
  },
  {
    name: "James",
    last_chat: "8 Hours ago",
    last_message: "I'm at a loss for words. This is amazing. I love it.",
    avatar: "https://avatars.githubusercontent.com/u/144596",
    chat_link: '/chats/124596'
  },
];